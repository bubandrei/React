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
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.setUsers(response.data.items));
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
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
