export const destinationData = [
    {      
        destinationId: 1,  
        destination: 'Taiwan',
        img: 'https://images.unsplash.com/photo-1519275565142-d81952f9e2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        coordinate: {lat:23.6978, lng:120.9605},
        userId: 1,
    },
    {
        destinationId: 2,  
        destination: 'Maldives',
        img: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80',
        coordinate: {lat:3.2028, lng:73.2207},
        userId: 1,
    },
    {
        destinationId: 3,
        destination: 'Morocco',
        img: 'https://images.unsplash.com/photo-1540396610404-df314e8f8330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        coordinate: {lat:31.7917, lng:7.0926},
        userId: 1,
    }
]

export const userData = [
    {
        userId: 1,
        email: 'hello@gmail.com',
        password: 'hellohello'
    },
    {
        userId: 2,
        email: 'daphne1052@hotmail.com',
        password: 'secondpassword'
    },  
    {
        userId: 3,
        email: 'daphnefang@gmail.com',
        password: 'thirdpassword'
    },       
]

export const userDestinationRelationData = [
    {
        relationId: 1,
        userId: 1,
        destinationId: 1,
    },
    {
        relationId: 2,
        userId: 1,
        destinationId: 2,
    },    
    {
        relationId: 3,
        userId: 1,
        destinationId: 3,
    },    
]


export const todoData = [
    {
        todoId: 1,
        userId: 1,
        userDestinationRelationId: 1,
        content: 'Eat XiaoLongBao',
        checkedActive: false
    },
    {
        todoId: 2,
        userId: 1,
        userDestinationRelationId: 1,
        content: 'Drink Original Boba',
        checkedActive: false
    },    
    {
        todoId: 3,
        userId: 1,
        userDestinationRelationId: 1,
        content: 'Shop for Food and Crafts at Night Markets',
        checkedActive: false
    },    
    {
        todoId: 4,
        userId: 1,
        userDestinationRelationId: 2,
        content: 'Freediving',
        checkedActive: false
    },
    {
        todoId: 5,
        userId: 1,
        userDestinationRelationId: 2,
        content: 'Dolphin Spotting',
        checkedActive: false
    },  
    {
        todoId: 6,
        userId: 1,
        userDestinationRelationId: 2,
        content: 'Island Hopping',
        checkedActive: false
    },  
    {
        todoId: 7,
        userId: 1,
        userDestinationRelationId: 3,
        content: 'Explore Casablanca',
        checkedActive: false
    },  
    {
        todoId: 8,
        userId: 1,
        userDestinationRelationId: 3,
        content: 'See the medina in Fez',
        checkedActive: false
    },  
    {
        todoId: 9,
        userId: 1,
        userDestinationRelationId: 3,
        content: 'See the Blue Village of Chefchaouen',
        checkedActive: false
    },  
]