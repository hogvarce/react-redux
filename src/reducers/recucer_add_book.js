export default function (state = null, action) {
    switch(action.type){
        case 'ADD_BOOK':
           return state.books.push(action.payload);
    }
    return state;
}
