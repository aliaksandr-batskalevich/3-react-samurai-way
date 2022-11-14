import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '875e5d3c-d106-4de6-a4d1-29564b65ae2b'
    }
});

export const authApi = {
    authMe() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean, captcha: boolean) {
        console.log({email, password, rememberMe, captcha});
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login');
    }
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