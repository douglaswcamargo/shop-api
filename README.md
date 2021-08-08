### Starting the api

Before you start, make sure you have `node` (v14+) and `npm` (6+) installed. 

##### Setup DB connection
Make sure you have mysql installed and running.
Rename the file `.env.example` to `.env` and change the environment variables, if necessary. The default configuration is the following:
```
  DB_HOST="127.0.0.1"
  DB_NAME="database_development"
  DB_PASSWORD=""
  DB_PORT="3306"
  DB_USER="root"
  NODE_ENV="development"
  SHOP_API_PORT="3333"
```

##### Running the API
- `npm install`
- `npm run create-db`
- `npm run start`

After that the api should be running on the port defined with `SHOP_API_PORT`

##### Create a new order
To create a new order, simply send a POST request with a JSON body like tho following:

```
{
    "email": "email@email.com",
    "name": "John Doe",
    "items": [
        { "item_id": 1, "total": 2 },
        { "item_id": 2, "total": 3 }
    ],
    "payment": {
        "name": "John Doe",
        "card_number": "00099999999999",
        "cvv": "999"
    }
}
```