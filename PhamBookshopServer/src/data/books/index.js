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

  return {
    getBooks,
    getBookById,
    getBookByAutnr
  };
};

module.exports = { registerBooks };
