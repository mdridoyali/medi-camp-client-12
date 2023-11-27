
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import SectionHeading from '../../../../Components/sectionHeading';
import PaymentForm from './PaymentForm';
// TODO : add key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const Payment = () => {

    return (
        <div>
            <SectionHeading heading={'Your Payment History'} ></SectionHeading>
            <div>
               <Elements stripe={stripePromise} >
                    <PaymentForm></PaymentForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;