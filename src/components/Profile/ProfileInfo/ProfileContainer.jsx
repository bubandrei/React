import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "../Profile";
import { setUserProfile } from "../../../redux/profileReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger
    // let userId = this.props.match.params.userId;
     let userId = this.props.router.params;
    if (userId !== undefined){
      userId = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
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
