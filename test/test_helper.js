import expect from 'expect'
import * as actions from '../src/actions/'
import rootReducer from '../src/reducers/'

describe('actions', () => {
    it('should create an action to add a book', () => {
        const book = {
            title: null,
            pages: 0
        };
        const expectedAction = {
            type: 'ADD_BOOK',
            payload: book
        }
        expect(actions.addBook(book)).toEqual(expectedAction)
    })
    it('should create an action to select a book', () => {
        const book = {
            title: null,
            pages: 0
        };
        const expectedAction = {
            type: 'BOOK_SELECTED',
            payload: book
        }
        expect(actions.selectBook(book)).toEqual(expectedAction)
    })
})


describe('reducers', () => {
    it('reducer should fetch list of books', () => {
        const state = {
            activeBook: null,
            books: [],
            films: []
        };
        expect(
            rootReducer([], {})
        ).toEqual(state)
    })
    it('reducer should add a book', () => {
        const state = {
            activeBook: null,
            books: [],
            films: []
        };
        const book = {
            title: null,
            pages: 0
        };
        const action = {
            type: 'ADD_BOOK',
            payload: book
        };
        expect(
            rootReducer([], action)
        ).toEqual(Object.assign({}, state, [...state, book]))
    })
})