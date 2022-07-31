import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={'Login'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field  name={"password"} placeholder={'Password'} component={Input} validate={[required]}/>
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
    const onSubmit = (formData) =>{
        console.log(formData)
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>

    )
}

export default Login