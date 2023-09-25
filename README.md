# Result Management system using Node.js
Crafted using __HTML__, __CSS__, __JavaScript__, and __Node.js__, this application follows the MVC model.

 1. Via a homepage button, two distinct user categories can access the system.
 2. Students are required to input their roll number and date of birth to access their results.
 3. Teachers, on the other hand, are equipped with privileges such as viewing all records, adding new ones, and editing or deleting existing entries.

# Guide for Setup

## Database 
1. Login/Signup to https://www.mongodb.com/cloud/atlas/register 
2. Create a cluster and connect it to your application.
3. To connect database: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
4. Create a variable in the config.env file called __MONGO_URI__ and in this variable, pass the connection link with your database password, like this:-

----

`(MONGO_URI = mongodb+srv://admin:<password>@cluster0.vn20rxn.mongodb.net/?retryWrites=true&w=majority)`


## Backend 
1. Open the project in VS Code.
2. Go to toolbar --> terminal --> Open new terminal OR press `(ctrl+lshift+~)`
3. Run "npm install" and "npm install -g nodemon" 
4. Now to run the project --> Run "nodemon server.js" on terminal.


## Frontend
1. Open URL "https://localhost:3000" on a browser.

## Teacher Login Credentials
__Name :__ admin
- - - -
__Password :__ admin
- - - -


__Note__: Project structure and Screenshots are present in the `(Result-Management system -images)` Folder.