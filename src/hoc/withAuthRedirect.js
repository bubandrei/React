import React from "react";

export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.isAuth) return <Navigate to={"/login"} />;
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent;
}