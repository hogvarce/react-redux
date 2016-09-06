export default function (state = [], action) {
    switch(action.type){
        case 'ADD_BOOK':
            console.log(state, action);
            return [...state, action.payload]
    }
    return state;
}