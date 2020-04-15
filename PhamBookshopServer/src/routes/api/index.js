"use strict";

const authors = require( "./authors" );

module.exports.register = async server => {
    await authors.register( server );
};
