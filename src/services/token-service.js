import config from '../config';

const TokenService = {
    saveAuthToken(token){
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },

    hasAuthToken(){
        if (window.sessionStorage.getItem(config.TOKEN_KEY)){
            return true
        }
        return false
    },

    getAuthToken(){
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },

    clearAuthToken(){
        console.log('clearing token')
        window.localStorage.removeItem(config.TOKEN_KEY)
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    }
}

export default TokenService;