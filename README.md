# Table of contents
- [Configuration](#Configuration)
- [Run](#Run)
- [Authentication](#Authentication)
- [Authorization](#Authorization)
- [Folder structure](#Project-folder-structure)
- [Endpoints](#Endpoints)
    - [User enpoints](#Users)
    - [Movies enpoints](#Movies)
    - [Order enpoints](#Orders)
#


# My favourite movies API
Simple API rest for backend exercise with local database, using Node + Express, Mongo and Postman.
#


## Configuration
- Backend: Download and install Node.js
- Data Base: Download and install mongoDB and create a new database, then write the database url on the ***db*** environmental variable in ***.env*** file at the project root, by default this value is

        mongodb://localhost:27017/API_rest

- Port: Set ***port*** variable in the environmental variable  file ***.env*** by default this value is 3000

- JWT secret: Set ***secret*** variable in the environmental variable file ***.env*** by default this value is *1jmi006lz2DLsmbcyqacUhlAavDvjHjf2VtpoNTeppt*

- Installing Dependencies: on root folder

        npm install

- Install Postman
#

## Run

Open the ***app.js*** file with node on the root folder of the project

        node app.js

You can now start making requests using your API rest development platform

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20b4cd6d5f009e4082e2?action=collection%2Fimport#?env%5BMy%20Movies%5D=W3sia2V5IjoidXJsIiwidmFsdWUiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InRva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InVzZXJpZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX1d)
#


## Project folder structure
                ├───config
                ├───controllers
                ├───middleware
                ├───models
                ├───routes
                └───util
#


## Authentication
New users will have to signup in order to access the service endpoints.


Registered users can [login](#Login) and once the user is logged in, each subsequent request must include a **JSON Web Token**, which allows the user to access routes, services, and resources that are permitted with that token.
#

## Authorization
All new users are created with 'client' role by default, only the 'admin' role user can create, update or delete documents. Except for new users wich can be created without authentication or authorization
#


## Endpoints
The supported request body format is JSON

All endpoints but the login and signup require authentication by JWT sent on the request via headers

- headers:
  - authentication: {token}

## Users

The user request data need to be sent through headers:

- **POST** /user/signup

        {
                "email": "user@example.com",
                "username": "username",
                "password": "1234",
                "age": "30",
                "role": client

        }


- **POST** /login

        {
                "email": "user@example.com",
                "password": "1234"

        }

- **GET** /user/dashboard?id={id}

- **DELETE** /user/delete?id={id}
#

## Movies

- **POST** /movie/new

        {
                "title": "Interstellar",
                 "releaseDate": "7 November 2014",
                "mainCast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
                "genre": ["Adventure", "Drama", "Sci-Fi"],
                "ageRate": "PG-13",
                "director": "Christopher Nolan"

        }

- **GET** /movie/collection?{params} 
    
    parameters: 
    - skip: Number
    - limit: Number
    
    In order to make pagination you only have to set the limit param to the amount of elements you want to show. The skip param for the first page would be 0 (zero), and the second page should be set to the limit times x2, for Page 3 times x3 and so on.

    Example:

        Page 1:
        /movie/collection?skip=0&limit=10

        Page 2:
        /movie/collection?skip=10&limit=20

- **GET** /movie
    
    parameters: 
    - id: mongoDB id

- **GET** /movie/title
    
    parameters: 
    - title: movie title

- **GET** /movie/genre
    
    parameters: 
    - genre: movie genre

- **GET** /movie/performer
    
    parameters: 
    - performer: actor or actress

- **GET** /movie/director
    
    parameters: 
    - director: director

- **PATCH** /movie/update

    You can patch any specific field or the whole document

    parameters: 
- id: mongoDB id


    
        {
        "genre": ["Adventure", "Drama", "Sci-Fi"],
        "mainCast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        "title": "Interstellar",
        "releaseDate": "7 November 2014",
        "ageRate": "PG-13",
        "director": "Christopher Nolan"
        }

- **DELETE** /movie/delete
    
    parameters: 
    - id: mongoDB id
#

## Orders

- **POST** /order/new
       
        {
        "user": "user MongoDB ObjectId",
        "movie": "605f1181eea0db3864d64ad7",
        "status": "created"
        }

- **GET** /order/list

- **GET** /order/list

    parameters: 
- id: mongoDB id
#

[TOP](#Table-of-contents)

