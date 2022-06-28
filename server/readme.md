# Vehicle Database Backend Server

This is a server for working with a car database, it has been customized based on the shape of the database

To get started, run

```bash
npm install
```

## Configuaration variables

The config npm module was used for configuration,
The default or production JSON file would look like this

```json
{
  "dbName": "cardb",        //Database name
  "dbHost": "localhost",    //Databse host
  "dbPort": 27017,          //Database port
  "dbUser": "",             //Database username
  "dbPass": ""              //Database password
}

```

## Endpoints

### Get All cars

uses the GET method.

```bash
/api/
```

### Get cars using ID

Uses the GET method.

where ID is the string representation of the database ID.

```bash
/api/id
```

### Add new car to database

Uses the POST method.

```bash
/api/
```

### Update car in the database

Uses the POST method

where ID is the string representation of the database ID.

```bash
/api/id
```

### Remove car from the database

Uses the DELETE method

where ID is the string representation of the database ID.

```bash
/api/id
```

### Get all makes in the database

Uses the GET method.

```bash
/filter
```

## Query endpoints

### Search for a car by make, model and year

Uses the GET method.

where make, model and year are the query strings and are compulsory fields for this endpoint

```bash
/s
```

### Get all models of a make

Uses the GET method.

where make is the query string and is a compulsory field for this endpoint

```bash
/filtmodel
```

### Get all years of a model

Uses the GET method.

where make and model are the query strings and are compulsory fields for this endpoint

```bash
/filtyear
```
