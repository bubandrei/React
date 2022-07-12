import axios from "axios";
import React from "react";
import Profile from "../Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}
export default ProfileContainer;
