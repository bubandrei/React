import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = () => {
    return (
        <form>
            <div>
                <Field name={"login"} placeholder={'Login'} component={"input"}/>
            </div>
            <div>
                <Field  name={"password"} placeholder={'Password'} component={"input"}/>
            </div>
            <div>
                <Field name={"remeber me"} type={'checkbox'} component={"input"}/> remeber me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = () => {
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm />
        </>

    )
}

export default Login