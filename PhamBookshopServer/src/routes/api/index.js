"use strict";

const authors = require( "./authors" );
const books = require( "./books" );
const orders = require( "./orders" )

module.exports.register = async server => {
    await authors.register( server );
    await books.register( server );
    await orders.register( server );
};
