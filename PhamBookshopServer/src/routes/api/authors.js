"use strict";

module.exports.register = async server => {

    // Get All Authors
    server.route( {
        method: "GET",
        path: "/api/authors",
        config: {
            handler: async request => {
                try {
                    // get the sql client registered as a plugin
                    const db = request.server.plugins.sql.client;

                    // execute the query
                    const res = await db.authors.getAuthors();

                    // return the recordset object
                    return res.recordset;
                } catch ( err ) {
                    console.log( err );
                }
            }
        }
    } );

    //Get Author by ID
    server.route( {
        method: "GET",
        path: "/api/authors/{id}",
        config: {
            handler: async request => {
                try {
                    const id = request.params.id;
                    const db = request.server.plugins.sql.client;
                    const res = await db.authors.getAuthorById( id );
                    return res.recordset;
                } catch ( err ) {
                    console.log( err );
                }
            }
        }
    } );

    //Fuzzy-Search all authors by name (first and last), and return the best match
    server.route( {
        method: "GET",
        path: "/api/authors/name/{name}",
        config: {
            handler: async request => {
                try {
                    const name = request.params.name;
                    const db = request.server.plugins.sql.client;
                    const res = await db.authors.searchAuthorByName( name );
                    return res;
                } catch ( err ) {
                    console.log( err );
                }
            }
        }
    } );

    //Add Author

    server.route( {
        method: "POST",
        path: "/api/authors",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    const { autnr, firstname, familyname } = request.payload;
                    const res = await db.authors.addAuthor( { autnr, firstname, familyname } );
                    return res.recordset;
                } catch ( err ) {
                    console.log(err);
                }
            }
        }
    } );

    //Edit Author

    server.route( {
        method: "POST",
        path: "/api/authors/{id}",
        config: {
            handler: async request => {
                try {
                    const id = request.params.id;
                    const db = request.server.plugins.sql.client;
                    const { firstname, familyname } = request.payload;
                    const res = await db.authors.updateAuthor( { id, firstname, familyname } );
                    return res.recordset;
                } catch ( err ) {
                    console.log(err);
                }
            }
        }
    } );

    //Delete Author

    server.route( {
        method: "DELETE",
        path: "/api/authors/{id}",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    const autnr = request.params.id
                    const res = await db.authors.deleteAuthor( { autnr } );
                    return res.recordset;
                } catch ( err ) {
                    console.log(err);
                }
            }
        }
    } );
};
