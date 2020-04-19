# Bookshop Server Pham

This hapi server exposes REST-Endpoints for a bookshop. Primary technologies used:

* MSSQL Database
* Node.js / Express
* npm hapi

## Endpoints

The following endpoints are implemented:

### Authors

* GET all Authors **api/authors**
* GET author by ID **api/authors?id={id}**
* GET most-fitting fuzzy-search results for Author by Name (First or Last) **api/authors/name?name={name}**
* POST: Add Author **api/authors**
* POST: Update Author **api/authors?id={id}**
* DELETE author **api/authors/{id}**

### Books

* GET all Books **api/books**
* GET book by ISBN **api/books?id={isbn}**
* GET all books of an author, by autnr **api/books?autnr={autnr}**
* POST: Update Book **api/books**?isbn={isbn}

### Orders

* GET all orders **api/orders**
* GET order by Ordernr **api/orders?ordernr={ordernr}**
* GET books of order **api/orders/books?ordernr={ordernr}**
* POST: Add Order **api/orders**
* POST: Update Order **api/orders?ordernr={ordernr}**
* POST: Add Book to Order **api/orders?ordernr={ordernr}&isbn={isbn}**
* DELETE order **api/orders?ordernr={ordernr}**

Note: For Update- or Add-Statements, ALL attributes except the primary key have to be sent in the request-body via json. 

## Setup

You will need to host a MSSQL Database, execute the script found in `BookshopMSSQL.sql`, and then create a file called `.env` for configuring the hapi server, okta, and database connection. Create this file in the root-dirctory of PhamBookshopServer. The okta-configuration params should not be modified.

### Example .env file:

```dotenv
# Set NODE_ENV=production when deploying to production
NODE_ENV=development

# hapi server configuration
PORT=8080
HOST=localhost
HOST_URL=http://localhost:8080
COOKIE_ENCRYPT_PWD=password

# SQL Server connection
SQL_USER=Jay
SQL_PASSWORD=password
SQL_DATABASE=bookshop
SQL_SERVER=DESKTOP-NOUVFVD
SQL_ENCRYPT=false

OKTA_ORG_URL=https://dev-589202.okta.com
OKTA_CLIENT_ID=0oa96ekx9k6DuxOna4x6
OKTA_CLIENT_SECRET=0XQN_HcTSuXZy49AJPi0YuePw_x4VaLhb6nIyiR8

```
