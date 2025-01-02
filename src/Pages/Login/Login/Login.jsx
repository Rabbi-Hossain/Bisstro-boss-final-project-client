import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'



const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const { logInUser } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Login is Successfuly",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  
                  navigate(from, {replace: true})

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleValidetCaptcha = (e) => {
        const user_value_captcha = e.target.value;

        if (validateCaptcha(user_value_captcha)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }

    return (
        <>
        <Helmet>
            <title>Bistro Boss | Login</title>
        </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 t">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidetCaptcha} type="text" name="captcha" placeholder="type captcha above" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'> <small>New Here? <Link to='/signup' className='text-green-500'>Create A New Account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;