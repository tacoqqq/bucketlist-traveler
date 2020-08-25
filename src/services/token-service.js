import config from '../config';

const TokenService = {
    //after logged in, save the token sent from backend to session storage
    saveAuthToken(token){
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },

    //verify if user is currently logged in in order to render corresponding route
    hasAuthToken(){
        if (window.sessionStorage.getItem(config.TOKEN_KEY)){
            return true
        }
        return false
    },

    //all backend endpoints require the request body to include the token
    getAuthToken(){
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },

    //clear the token when logged out / close the tab or window
    clearAuthToken(){
        window.localStorage.removeItem(config.TOKEN_KEY)
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    }
}

export default TokenService;