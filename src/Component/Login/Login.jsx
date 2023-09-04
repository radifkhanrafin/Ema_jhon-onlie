import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvaider } from '../../Provaider/Provaider';
const Login = () => {
    const { signIn } = useContext(AuthProvaider)
    const [error, setError] = useState(null)
    const [show, setShow] = useState(true)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    // console.log(signIn)
    const from = location.state?.from?.pathname || '/'
    console.log(from)
    const loginEmailPass = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                form.reset()
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginEmailPass} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show? "password" : "text"} placeholder="password" name='password' className="input input-bordered" />
                            <p className='ml-2 cursor-pointer' onClick={()=>setShow(!show)}><small>
                                {
                                    show? <>Show Password</> : <>Hide Password</>
                                }
                            </small></p>

                            <label className="label">
                                <p>New to Ema-john? <Link to='/signup' className='mx-2 text-amber-400'>Create New Account</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {error && <span className='text-error'>{error}</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;