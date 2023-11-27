

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const PaymentForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure();


    const { data: campInfo = [], refetch } = useQuery({
        queryKey: ['registered-camp', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registered-camp/${user?.email}`)
            return res.data
        }
    })

    const totalPrice = campInfo.reduce((total, item) => total + item.campFees, 0)
    console.log(totalPrice, campInfo)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // now save the to the database
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert . use moment js to
                    cartIds: campInfo.map(item => item._id),
                    // menuItemIds: campInfo.map(item => item.menuId),
                    status: 'pending',
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment save', res.data)
                refetch()
                if (res.data?.paymentResult?.insertedId) {
                    toast.success('Payment success')
                    // navigate('/dashboard/paymentHistory')
                }

            }
        }

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary my-4" type="submit" >
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600">Your transaction Id {transactionId}</p>}
            </form>
        </div>
    );
};

export default PaymentForm;


