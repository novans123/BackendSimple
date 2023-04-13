const {
  addBookHandler, getBookByIdHandler, getAllBooksHandler, deleteBookByIdHandler, editBookByIdHandler,  } = require('./handler');

const routes = [
  {
    method: 'POST',
   
    path: '/books',
    
    handler: addBookHandler,
  },

  {
    method: 'GET',
    
    path: '/books/{bookId}',
    
    handler: getBookByIdHandler,
  },

  {
    method: 'GET',
    
    path: '/',
   
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    
    path: '/books',
   
    handler: getAllBooksHandler,
  },

  {
    method: 'DELETE',
    
    path: '/books/{bookId}',
    
    handler: deleteBookByIdHandler,
  },

  {
    method: 'PUT',
    
    path: '/books/{bookId}',
    
    handler: editBookByIdHandler,
  },
 

];

module.exports = routes;