import { Link } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
      
    }
    return (
        <div>
            <Navbar></Navbar>
                    

                <div className="max-w-96 mx-auto text-center">
                    <div>
                        <h2>Please login</h2>
                    </div>
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
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Dont have a account, <Link className="text-lime-500" to='/register'>Register Now</Link></p>   
                </div>    

        </div>
    );
};

export default Login;