import * as axios from "axios";
import { follow, unfollow } from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "65ca420f-073b-420c-98d1-8f92b7f78e0a"
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true }
        )
            .then(response => {
                return response.data;
            })
    },
    follow(userid) {
        return instance.post(`follow/${userid}`)
    },
    unfollow(userid) {
        return instance.delete(`follow/${userid}`)
    },
    getProfile(userId) {
        return instance
            .get(`profile/` + userId)
    }
}
export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    }
}


