import React from "react";
import { connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControl";
import { login } from "../../redux/authReducer";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          placeholder={"Email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"Password"}
          component={Input}
          validate={[required]}
          type={"password"}
        />
      </div>
      <div>
        <Field name={"remeber me"} type={"checkbox"} component={"input"} />{" "}
        remeber me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.remeberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

export default connect(null, { login })(Login);
