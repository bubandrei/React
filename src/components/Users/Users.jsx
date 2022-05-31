import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.fotoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullname}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}
export default Users