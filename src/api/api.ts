import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3bf495f6-e6e9-4e71-83d5-33191d9139fd'
    }
});

export const authApi = {
    authMe() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    },
};

export const profileApi = {
    getProfile(id: number) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data
        })
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`).then(response => {
            return response.data
        })
    },
    updateStatus(newStatus: string) {
        return instance.put(`profile/status`, {status: newStatus}).then(response => {
            return response.data
        })
    },
};

export const usersApi = {
    getUsers(currentPage: number, catsOnPage: number) {
        return instance.get(`users?page=${currentPage}&count=${catsOnPage}`).then(response => {
            return response.data
        })
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
};