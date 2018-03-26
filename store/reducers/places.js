const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
            case ADD_PLACE:
            return{
               ...state, 
               places: state.places.concat({
                key: Math.random(), 
                name: action.placeName,
                image: {
                //placeImage, 
                  uri: "https://www.getawaytoday.com/image/3759/11683/hawaii-2.jpg"
                };
            })
        };    


        case DELETE_PLACE:
        return{}
            ...state. 
            places: state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
              }),
              selectedPlace: null;
        };  

        case SELECT_PLACE:
        return {
            ...state,
            selectedPlace: prevState.places.find(place => {
                return place.key === action.placeKey; //logic to select place 
              })
        };
        case DESELECT_PLACE:
        return {
            ...state, 
            selectedPlace: null 
        };

     default:   
        return state; 
    }
};



export default reducer; 