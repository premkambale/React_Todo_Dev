import './SignIn.css'
import Logo from 'C:/Users/palla/OneDrive/Desktop/project/React/React_Todo_Dev/frontend/daytaskfrontend/src/images/logo.png';

function SignIn(){

    return <>
            <img src={Logo} alt="" className='logo'/>
            <h3 className='welcome-text'>Welcome Back</h3>

            <label htmlFor="email"></label>
            <input type="email" name="email" id="" />

            <label htmlFor="email"></label>
            <input type="email" name="email" id="" />
            
            <a href="http://">Forget Password</a>

            <button type="button">Log In</button>
            
        </>
} 

export default SignIn;