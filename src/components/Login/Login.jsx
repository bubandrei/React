import React from "react";
import { connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControl";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormControls/FormsControls.module.css";

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
      {props.error && <div className={style.formError}>{props.error}</div>}
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
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
