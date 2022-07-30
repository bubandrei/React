import React from "react";
import { reduxForm } from "redux-form";

const LoginForm = () => {
    return (
        <form>
            <div>
                <input type="text" placeholder={'Login'} />
            </div>
            <div>
                <input type="text" placeholder={'Password'} />
            </div>
            <div>
                <input type={'checkbox'} /> remeber me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(ContactForm);

const Login = () => {
    return (
        <>
            <h1>LOGIN</h1>
            <LoginForm />
        </>

    )
}

export default Login