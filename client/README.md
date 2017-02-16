# MeanStackFrontBack

show dbs

//database
use mycustomers

//user
db.createUser({
	user: "jesse",
	pwd: "1234",
	roles: ["readWrite", "dbAdmin"]
});

//collection
db.createCollection('customers');

show collections

//insert document
db.customers.insert({first_name: "Nate", last_name: "Soldat"});
db.customers.insert([{first_name: "Marcia", last_name: "Soldat"}, {first_name: "Mark", last_name: "Soldat"}, {first_name: 

"Sela", last_name: "Soldat"}]);


db.customers.find();
db.customers.find().pretty();

//update
db.customers.update({first_name: "Nate"}, {first_name: "Nate", last_name: "Soldat", gender: "male"});

//add a field
db.customers.update({first_name: "Mark"}, {$set:{gender: "male"}});
db.customers.update({first_name: "Mark"}, {$set:{age: 68}});
db.customers.update({first_name: "Marcia"}, {$set:{age: 70}});
db.customers.update({first_name: "Nate"}, {$set:{age: 38}});
db.customers.update({first_name: "Sela"}, {$set:{age: 42}});

//remove a field
db.customers.update({first_name: "Nate"}, {$unset:{gender: "male"}});

//incement a number
db.customers.update({first_name: "Nate"}, {$inc:{age: 3}});

//if not found insert
db.customers.update({first_name: "Jesse"}, {first_name: "Jesse", last_name: "Soldat", gender: "male", address: {street: 

"775 Twin", city: "Bangkok", country: "Thailand"}}, {upsert: true});

//rename key
db.customers.update({first_name: "Jesse"}, {$rename:{"gender": "sex"}});

//remove
db.customers.remove({first_name: "Jesse"});

//same first name customer
db.customers.insert([{first_name: "Mike", last_name: "Soldat"}, {first_name: "Mike", last_name: "Soldat"}, {first_name: 

"Mike", last_name: "Soldat"}]);

//remove 1
db.customers.remove({first_name: "Mike"}, {justOne: true});

//or
db.customers.find({$or:[{first_name: "Mark"},{first_name: "Nate"}]});

//greater than - less than
db.customers.find({age:{$lt:45}});
db.customers.find({age:{$gt:45}});

lte or gte (less than or equal)

//find something in an object
db.customers.find({"address.city": "Bangkok"}).pretty();

//array
db.customers.insert([{first_name: "Mike", last_name: "Miller", hobbies: ["basketball", "tennis", "golf"]}, {first_name: 

"Joe", last_name: "Earn", hobbies: ["basketball", "tennis", "golf"]}, {first_name: "Jim", last_name: "Bean", hobbies: 

["football", "tennis", "golf"]}]);

//find customers with basketball as hobby
db.customers.find({"hobbies": "basketball"}).pretty();

//ascending sort
db.customers.find({"hobbies": "tennis"}).sort({first_name: 1}).pretty();

//descending sort
db.customers.find({"hobbies": "tennis"}).sort({first_name: -1}).pretty();

//count
db.customers.find().count();
db.customers.find({gender: "male"}).count();

//first 4 customers
db.customers.find().limit(4);

//for each do this
db.customers.find().forEach(function(doc){print("Customer Name: "+doc.first_name)});


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
