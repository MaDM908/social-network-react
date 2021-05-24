import * as axios from 'axios';

const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY" : "5bd1aa5f-e4f4-4a73-b64e-a45038a0363e"
        },
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

const newsInstance = axios.create({
    headers: {
        "x-api-key": "8f2aa74b1d494bd2aa88deaecb6f29af"
    },
    baseURL: "https://newsapi.org/v2/"
})

export const newsAPI = {
    getAllNews(keyPhraze) {
        return newsInstance.get(`everything?q=${keyPhraze}`)
        .then( response => response );
    } 

};


export const usersAPI = {
    getUsers(PageNumber, PageSize) {
        return instance.get(`users?page=${PageNumber}&count=${PageSize}`)
        .then( response => response.data );
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
        .then( response => response.data );
    },
    follow(userID) {
        return instance.post(`follow/${userID}`, {}).then( response => response.data );
    },
    getProfile(userID) {
        console.warn("Obsolete method, use profileAPI object instead...");
        return profileAPI.getProfile(userID);
    }
};

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
        .then(response => response.data);
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`)
        .then(response => response.data);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, { status })
        .then(response => response);
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            "content-type": "multipart/form-data"
        }).then(response => response.data)
    },
    editProfile(userId, payload){

        return instance.put(`profile/`, {userId, ...payload})
        .then(response => response);
    }
};

export const authAPI = {
    getAuthProfile() {
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
        .then(response => response.data);
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => response.data);
    }
}; 

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
        .then(response => response.data);
    }
}; 