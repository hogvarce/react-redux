import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import FilmsReducer from './reducer_films';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    films: FilmsReducer,
});

export default rootReducer;
