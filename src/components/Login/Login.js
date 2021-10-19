import React from 'react';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
  const { signInusingGoogle, handleForm, handleEmail, handlePassword, error, toggle, islogin } = useAuth();
  return (
    <div className='d-flex justify-content-center m-5 '>
      <div className='w-25 border rounded p-3 bg-light'>
        <form onSubmit={handleForm}>
          <h1 className='text-center '>Please Sign{islogin ? " In " : ' Up '}</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label contain">Email address</label>
            <input onChange={handleEmail} type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text text-light'">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={handlePassword} type="password" required className="form-control" id="exampleInputPassword1" />
            <div id="emailHelp" className="form-text text-danger">{error}</div>
          </div>

          <div className="mb-3 form-check">
            <input onChange={toggle} type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Already have an account?</label>
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-warning ">Sign {islogin ? ' In ' : ' Up '}</button>
            <h1>Or</h1>
            <button onClick={signInusingGoogle} type="submit" className="btn btn-warning px-5">Sign In With Google</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;