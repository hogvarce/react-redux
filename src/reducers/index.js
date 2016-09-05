import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import FilmsReducer from './reducer_films';
import AddBookReducer from './recucer_add_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    films: FilmsReducer,
    addBook: AddBookReducer
});

export default rootReducer;
