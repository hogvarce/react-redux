export default function (state = [], action) {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, action.payload]
        case 'REMOVE_BOOK':
            let newState =  state.filter((item) => {
                return item !== action.payload
            });

            return newState
    }
    return state;
}