"use strict";

// Functions for the "Order" Element

const utils = require( "../utils" );

const registerOrders = async ( { sql, getConnection } ) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries( "orders" );

  const getOrders = async orders => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // return the executed query
    return request.query( sqlQueries.getOrders );
  };

  const getOrderById = async ( id ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "id", sql.Int, id );
    return request.query( sqlQueries.getOrderById );
  }

  const getBooksByOrder = async ( id ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "id", sql.Int, id );
    return request.query( sqlQueries.getBooksByOrder );
  }

  const updateOrder = async ( { id, username, ordertime, delivery } ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "ordernr", sql.Int, id);
    request.input( "username", sql.VarChar( 255 ), username );
    request.input( "ordertime", sql.DateTime2(0), ordertime );
    request.input( "delivery", sql.DateTime2(0), delivery );
    return request.query( sqlQueries.updateOrder );
  };

  const addBookToOrder = async ( { id, isbn } ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "ordernr", sql.Int, id);
    request.input( "isbn", sql.Char(20), isbn );
    return request.query( sqlQueries.addBookToOrder );
  };

  const addOrder = async ( { username, ordertime, delivery } ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "username", sql.VarChar( 255 ), username );
    request.input( "ordertime", sql.DateTime2(0), ordertime );
    request.input( "delivery", sql.DateTime2(0), delivery );
    return request.query( sqlQueries.addOrder );
  };

  const deleteOrder = async ( ordernr ) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input( "ordernr", sql.Int, ordernr)
    return request.query( sqlQueries.deleteOrder );
  };


  return {
    getOrders,
    getOrderById,
    updateOrder,
    addOrder,
    deleteOrder,
    getBooksByOrder,
    addBookToOrder
  };
};

module.exports = { registerOrders };
