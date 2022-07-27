import React from "react";
import { connect } from "react-redux";
import Profile from "../Profile";
import { getUserProfile } from "../../../redux/profileReducer";
import {
  useParams,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

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
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: status.profilePage.status 
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
