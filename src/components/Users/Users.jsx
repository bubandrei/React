import axios from "axios";
import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response)=> props.SetUsers())
        // props.setUsers([
        //     { id: 1, fotoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true', followed: false, fullname: 'Andrei', status: 'I am a boss', location: { city: 'Warszawa', country: 'Poland' } },
        //     { id: 2, fotoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true', followed: true, fullname: 'Sveta', status: 'I am a boss too', location: { city: 'Wrocław', country: 'Poland' } },
        //     { id: 3, fotoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true', followed: false, fullname: 'Amina', status: 'I am a big boss', location: { city: 'Krakow', country: 'Poland' } }
        // ]
        // )
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.fotoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Follow</button>
                            : <button onClick={() => { props.follow(user.id) }}>UnFollow</button>}
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