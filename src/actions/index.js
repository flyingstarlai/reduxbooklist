export function selectBook(book) {
    // selectBook is an ActionCreator -> return action
    // Object with type prop
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}