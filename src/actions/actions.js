import TokenService from './../services/token-service';


const actions = {
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