export const selectBook = (book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}

export const removeBook = (book) => {
    return {
        type: 'REMOVE_BOOK',
        payload: book
    }
}