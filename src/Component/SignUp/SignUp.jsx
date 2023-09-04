import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvaider } from '../../Provaider/Provaider';
const SignUp = () => {
    const [error, setError] = useState(null)
    // console.log(error)
    const { gmailPassLogin, signIn } = useContext(AuthProvaider)
    // console.log(gmailPassLogin)
    const submitForm = (event) => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confrim = form.confrim.value
        console.log(name, email, password, confrim)
        setError('')
        if (password !== confrim) {
            setError('Password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Password should be atleast 6 charecter')
            return
        }

        gmailPassLogin(email, password, confrim)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
            })
            .catch(err => {
                console.log(err);
                setError(err.message)
            })

    }
    // const googleLogin = () => {
    //     signIn()
    // }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={submitForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confrim Password</span>
                            </label>
                            <input type="password" name='confrim' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>Already have an account?<Link to='/login' className='mx-2 text-amber-400'>Login</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                        <p className='text-error'>{error && error}</p>

                    </form>

                    {/* <button onClick={googleLogin} className='bg-gray-500 rounded-lg flex justify-center gap-5 mx-auto  w-full px-8 items-center'>
                        <p className='text-xl'>Continue with</p>
                        <img className='w-8' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    </button> */}

                </div>
            </div>
        </div>
    );
};

export default SignUp;