"use strict";

module.exports.register = async server => {

  // Get All Books
  //Get Book by ID
  //Get Books by AuthorID
  server.route( {
    method: "GET",
    path: "/api/books",
    config: {
      handler: async request => {
        try {
          const db = request.server.plugins.sql.client;

          if(request.query.id){
            const id = request.query.id;
            const res = await db.books.getBookById( id );
            return res.recordset;
          }else if(request.query.autnr){
            const id = request.query.autnr;
            const res = await db.books.getBookByAutnr( id );
            return res.recordset;
          }
          else {
            const res = await db.books.getBooks();
            return res.recordset;
          }
        } catch ( err ) {
          console.log( err );
        }
      }
    }
  } );
};
