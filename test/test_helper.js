import expect from 'expect'
import * as actions from '../src/actions/'

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