import TokenService from './../services/token-service';

const actions = {
    //press escape key, go back to the the dashboard page if logged in, else go back to homepage.
    escFunction(event,history){
        if (event.keyCode === 27) {
            if (TokenService.hasAuthToken()){
                history.push('/dashboard')
            } else {
                history.push('/')
            }
        }
    },
}

export default actions;