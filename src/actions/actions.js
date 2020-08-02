import config from  '../config';


const actions = {
    escFunction(event,history){
        if (event.keyCode === 27) {
            history.push('/dashboard')
        }
    },


    /*
    fetchPlace(place){
        let polishedPlace = place.toLowerCase().split(' ').join('%20')
        console.log(polishedPlace)
        console.log(config.GooglePlacesAPIKey)
        let url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${polishedPlace}&inputtype=textquery&fields=photos&key=${config.GooglePlacesAPIKey}`
        console.log(url)

        return fetch(url,{
            "mode": "cors"
        })
        .then(res => {
            console.log(res)
            if (!res.ok){
                throw new Error(res.error)
            } 
            return res.json()
        })     
        .then(resJson => {
            console.log(resJson)
            return resJson.candidates[0].photos[0].photo_reference
        })
        .catch(err => {
            console.error(err)
        })

    },


    fecthImage(place){
        let placePhotoUrl = this.fetchPlace(place)
        console.log(placePhotoUrl)    
    }
    */
}

export default actions;