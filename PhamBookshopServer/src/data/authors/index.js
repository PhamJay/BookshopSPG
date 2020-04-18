"use strict";

// Functions for the "Author" Element

const utils = require( "../utils" );
var FuzzySearch = require('fuzzy-search');

const registerAuthors = async ( { sql, getConnection } ) => {
    // read in all the .sql files for this folder
    const sqlQueries = await utils.loadSqlQueries( "authors" );

    const getAuthors = async authors => {
        // get a connection to SQL Server
        const cnx = await getConnection();

        // create a new request
        const request = await cnx.request();

        // return the executed query
        return request.query( sqlQueries.getAuthors );
    };

    const getAuthorById = async ( id ) => {
        const cnx = await getConnection();
        const request = await cnx.request();
        request.input( "id", sql.Int, id );
        return request.query( sqlQueries.getAuthorById );
    }

    const searchAuthorByName = async ( name ) => {
        const cnx = await getConnection();
        const request = await cnx.request();
        const authors =  await request.query( sqlQueries.getAuthors );

        const searcher = new FuzzySearch(authors.recordset, ["firstname", "familyname"], {sort: true})
        const result = searcher.search(name)
        return result;
    }

    const updateAuthor = async ( { autnr, firstname, familyname } ) => {
        const cnx = await getConnection();
        const request = await cnx.request();
        request.input( "autnr", sql.Int, autnr);
        request.input( "firstname", sql.VarChar( 255 ), firstname );
        request.input( "familyname", sql.VarChar( 255 ), familyname );
        return request.query( sqlQueries.updateAuthor );
    };

    const addAuthor = async ( { autnr, firstname, familyname } ) => {
        const cnx = await getConnection();
        const request = await cnx.request();
        request.input( "autnr", sql.Int, autnr);
        request.input( "firstname", sql.VarChar( 255 ), firstname );
        request.input( "familyname", sql.VarChar( 255 ), familyname );
        return request.query( sqlQueries.addAuthor );
    };

    const deleteAuthor = async ( { autnr } ) => {
        const cnx = await getConnection();
        const request = await cnx.request();
        request.input( "autnr", sql.Int, autnr)
        return request.query( sqlQueries.deleteAuthor );
    };


    return {
        getAuthors,
        getAuthorById,
        updateAuthor,
        addAuthor,
        deleteAuthor,
        searchAuthorByName
    };
};

module.exports = { registerAuthors };
