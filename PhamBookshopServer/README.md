# Bookshop Server Pham

This hapi server exposes REST-Endpoints for a bookshop. Primary technologies used:

* MSSQL Database
* Node.js / Express
* npm hapi

The following endpoints are implemented:

* GET all Authors **api/authors**
* GET author by ID **api/authors/{id}**
* GET most-fitting fuzzy-search results for Author by Name (First or Last) **api/authors/name/{name}**
* POST: Add Author **api/authors**
* POST: Update Author **api/authors/{id}**
* DELETE author **api/authors/{id}**

## Setup

You will need to host a MSSQL Database, execute the script found in `BookshopMSSQL.sql`, and then create an file called `.env` for configuring the hapi server and database connection.

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
```
