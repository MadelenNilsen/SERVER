Instructions for using API:

1. Clone the reposotory to your local machine:
git clone https://github.com/MadelenNilsen/SERVER.git

2. Navigate into project directory.

3. Install required dependancies:
npm install express

4. Start the server:
node app.js




API Endpoints:

GET/
- Returns welcome message.
- URL: http://localhost:3000/
- Responce:
    - Status: 200 OK
    - Body: 'Hello, world!
 
POST/data
- Accepts a POST request and confirms message was recieved.
- URL: hhtp://localhost:3000/data
- Response:
    - Status: 200 OK
    - Body: 'message recieved'
 

GET/Users/:id
- Fetches user based on provided ID.
- URL: hhtp://localhost:3000/users/123
- Response:
    - Status: 200OK
    - Body: 'userId': 123
 

Testing the API:
1. GET/: Open http://localhost:3000/ in your broswer.
2. POST/data: Use Postman to send a POST request to http://localhost:3000/data with desired JSON body.
3. GET/users/:id: Open http://localhost:3000/users/123 in your browser. You can replace the numbers with other random numbers. 
