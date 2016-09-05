export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export function addBook(book) {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}
