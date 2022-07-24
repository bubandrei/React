import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "../Profile";
import { setUserProfile } from "../../../redux/profileReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { userAPI } from "../../../api/api";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    userAPI.getProfile(userId).then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
