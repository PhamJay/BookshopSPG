"use strict";

module.exports.register = async server => {

  // Get All Orders
  //Get Order by ordernr
  server.route( {
    method: "GET",
    path: "/api/orders",
    config: {
      handler: async request => {
        try {
          const db = request.server.plugins.sql.client;

          if(request.query.ordernr) {
            const id = request.query.ordernr;
            const res = await db.orders.getOrderById(id);
            return res.recordset;
          }
          else {
            const res = await db.orders.getOrders();
            return res.recordset;
          }
        } catch ( err ) {
          console.log( err );
        }
      }
    }
  } );

  // Get Books of Order
  server.route( {
    method: "GET",
    path: "/api/orders/books",
    config: {
      handler: async request => {
        try {
          const db = request.server.plugins.sql.client;
          const id = request.query.ordernr;
          const res = await db.orders.getBooksByOrder( id );
          return res.recordset;
        } catch ( err ) {
          console.log( err );
        }
      }
    }
  } );

  //Edit Order
  //Add Book to Order
  //Add Order
  server.route( {
    method: "POST",
    path: "/api/orders",
    config: {
      handler: async request => {
        try {
          const db = request.server.plugins.sql.client;

          if(request.query.ordernr && !request.query.isbn) {
            const id = request.query.ordernr;
            const { username, ordertime, delivery } = request.payload;
            const res = await db.orders.updateOrder( { id, username, ordertime, delivery } );
            return res.recordset;
          }
          else if (request.query.ordernr && request.query.isbn) {
            const id = request.query.ordernr;
            const isbn = request.query.isbn;
            const res = await db.orders.addBookToOrder( { id, isbn } );
            return res.recordset;
          }
          else {
            const {username, ordertime, delivery} = request.payload;
            const res = await db.orders.addOrder({username, ordertime, delivery});
            return res.recordset;
          }
        } catch ( err ) {
          console.log(err);
        }
      }
    }
  } );

  //Delete Order
  server.route( {
    method: "DELETE",
    path: "/api/orders",
    config: {
      handler: async request => {
        try {
          const db = request.server.plugins.sql.client;
          const ordernr = request.query.ordernr
          const res = await db.orders.deleteOrder( ordernr );
          return res.recordset;
        } catch ( err ) {
          console.log(err);
        }
      }
    }
  } );

};
