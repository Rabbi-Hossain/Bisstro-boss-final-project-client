import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { createUser, updateUserProfile  } = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photoURL)
            })

    }





    return (
        <>
        <Helmet>
            <title>Bistro Boss | SignUp</title>
        </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} placeholder="Full Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.PhotoURL && <span className="text-red-600">Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 characters</span>
                                }
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">password must be less then 20 characters </span>
                                }
                                {errors.password?.type === 'pattern' && <span className="text-red-600">password must be one uppercase,  one lowerecase , one special characters and one number </span>
                                }

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center"><small>Already registered? <Link to='/login' className="text-green-500">Go to Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;