/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    UnFollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

// let Users = (props) => {
// const getUsers = ()=>{
//     if (props.users.length === 0) {
//         axios
//           .get("https://social-network.samuraijs.com/api/1.0/users")
//           .then((response) => props.setUsers(response.data.items));
//       }
// }

//   return (
//     <div>
//         <button onClick={getUsers}>Get Users</button>
//       {props.users.map((user) => (
//         <div key={user.id}>
//           <span>
//             <div>
//               <img
//                 src={
//                   user.photos.small != null
//                     ? user.photos.small
//                     : userPhoto
//                 }
//                 className={styles.userPhoto}
//               />
//             </div>
//             <div>
//               {user.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unfollow(user.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(user.id);
//                   }}
//                 >
//                   UnFollow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{user.name}</div>
//               <div>{user.status}</div>
//             </span>
//             <span>
//               <div>{"user.location.country"}</div>
//               <div>{"user.location.city"}</div>
//             </span>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Users;
