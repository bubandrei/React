import React from "react";

const Users = (props) => {
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
                src={user.photos.small != null ? user.photos.small : userPhoto}
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
};
export default Users;
