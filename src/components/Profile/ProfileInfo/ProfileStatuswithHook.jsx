import React from "react";

const ProfileStatusWithHook = (props) =>{


    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>
              {this.props.status || "-------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
export default ProfileStatusWithHook;
