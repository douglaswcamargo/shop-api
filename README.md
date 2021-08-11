### Starting the api
Run the following:
- `docker-compose build`
- `docker-compose up`

### Starting the api without `docker`
Alternatively, you could also run the api without using `docker`, but it will take more steps:

##### Setup DB connection
Before you start, make sure you have `node` (v14+) and `npm` (6+) installed.
You also need `mysql` installed and running.
Rename the file `.env.example` to `.env` and change the environment variables, if necessary. The default configuration is the following:
```
    DB_HOST="mysql"
    DB_NAME="database_development"
    DB_PASSWORD="root"
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

### Endpoints

##### `GET` List Categories
URL: `/categories`
Sample Response:
````
[{
    "id": 1,
    "name": "Bakery",
    "image_id": "f3fbf57b118fa9",
    "createdAt": "2021-08-11T00:16:44.000Z",
    "updatedAt": "2021-08-11T00:16:44.000Z"
}]
````

##### `GET` List Items
URL: `/items`
Sample Response:
````
[{
	"id": 1,
	"name": "Bakery",
	"image_id": "f3fbf57b118fa9",
	"createdAt": "2021-08-11T00:16:44.000Z",
	"updatedAt": "2021-08-11T00:16:44.000Z",
	"Items": [{
		"id": 1,
		"category_id": 1,
		"name": "Bagel",
		"image_id": "293202f9d9f7f4",
		"price": 2,
		"createdAt": "2021-08-11T00:16:44.000Z",
		"updatedAt": "2021-08-11T00:16:44.000Z"
	}, {
		"id": 2,
		"category_id": 1,
		"name": "Croissant",
		"image_id": "808916fd5ddf96",
		"price": 1,
		"createdAt": "2021-08-11T00:16:44.000Z",
		"updatedAt": "2021-08-11T00:16:44.000Z"
	}]
}]
````

##### `POST` Create a New Order
URL: `/orders`

Body: `JSON`

Sample body payload:
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