
import { useForm } from "react-hook-form"
const AddCamp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
 
 
    const onSubmit = (data) => {
        console.log(data.name, data.photoURL)

        
    }


    return (
        <div className="p-5">
            Add camp
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col md:flex-row w-full gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                        {/* {errors.name && <span className="text-red-600">Name is required</span>} */}
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {/* {errors.photoURL && <span className="text-red-600">Photo URL is required</span>} */}
                    </div>
                </div>


                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default AddCamp;


