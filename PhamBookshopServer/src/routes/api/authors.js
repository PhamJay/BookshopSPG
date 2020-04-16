"use strict";

module.exports.register = async server => {

    // Get All Authors
    // ID = * || Get Authors by ID
    // Name = * || Fuzzy-Search all authors by name (first and last), and return the best match
    server.route( {
        method: "GET",
        path: "/api/authors",
        config: {
            auth: {
                strategy: "session",
                mode: "required"
            },
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;

                    if(request.query.id){
                      const id = request.query.id;
                      const res = await db.authors.getAuthorById( id );
                      return res.recordset;
                    }
                    else if(request.query.name){
                      const name = request.query.name;
                      const res = await db.authors.searchAuthorByName( name );
                      return res;
                    }
                    else {
                      const res = await db.authors.getAuthors();
                      return res.recordset;
                    }

                } catch ( err ) {
                    console.log( err );
                }
            }
        }
    } );

    //Add Author
    //Edit Author
    server.route( {
        method: "POST",
        path: "/api/authors",
        config: {
            auth: {
                strategy: "session",
                mode: "required"
            },
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;

                    if(request.query.id) {
                      const id = request.query.id;
                      const { firstname, familyname } = request.payload;
                      const res = await db.authors.updateAuthor( { id, firstname, familyname } );
                      return res.recordset;
                    }
                    else {
                      const {autnr, firstname, familyname} = request.payload;
                      const res = await db.authors.addAuthor({autnr, firstname, familyname});
                      return res.recordset;
                    }
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
            auth: {
                strategy: "session",
                mode: "required"
            },
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
