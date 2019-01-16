Build a simple web application using React.js and Redux.
● A React.js web app based on two routes 1) /add_user 2) /users
1) /add_user :
A simple form to add an user (with below mentioned fields)
first_name
last_name
email
gender
Sample Request:
Method : Post
API:
https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR
Request Body :
{
first_name:”firstname”
last_name:”lastname”
email:”email@domain.com”
gender:”female”
}
2) /users :
A table to display all Users having fields id,name,email,gendor,phone,date of birth
Method :GET
API:
https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsA
AeCdFbhUz1h6-HdVJ30zv8xMYR
For REST API refer : https://gorest.co.in

To Run use yarn start
To create build use yarn build
