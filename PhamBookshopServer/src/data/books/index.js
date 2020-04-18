"use strict";

// Functions for the "Book" Element

const utils = require( "../utils" );

const registerBooks = async ( { sql, getConnection } ) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries( "books" );

  const getBooks = async books => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // return the executed query
    return request.query( sqlQueries.getBooks );
  };

  const getBookById = async ( id ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "id", sql.Char, id );
    return request.query( sqlQueries.getBookById );
  }

  const getBookByAutnr = async ( autnr ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "autnr", sql.Int, autnr );
    return request.query( sqlQueries.getBookByAutnr );
  }

  const updateBook = async ( {isbn, autnr, title, price} ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "isbn", sql.Char(20), isbn);
    request.input( "autnr", sql.Int, autnr);
    request.input( "title", sql.VarChar(255), title);
    request.input( "price", sql.Float, price);
    return request.query( sqlQueries.updateBook );
  };

  return {
    getBooks,
    getBookById,
    getBookByAutnr,
    updateBook
  };
};

module.exports = { registerBooks };
