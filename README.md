# Freight Deck Bootcamp

# Tools

 1. VSCode: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
 2. Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
 3. Postman: [https://www.getpostman.com/downloads/](https://www.getpostman.com/downloads/)
 4. ngrok: [https://ngrok.com/download](https://ngrok.com/download)

# Plugins

 1. [Glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)
 2. [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
 3. [ES7 React/Redux/GraphQL/React-Native snippets]( https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
 4. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
 5. [Javascript Booster](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)
 6. [Synk](https://marketplace.visualstudio.com/items?itemName=pmbenjamin.vscode-snyk)
 7. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
 8. [Node Exec](https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node)
 9. [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)

 # Newsletters
  Some news letters for regular updates
 1. Javascript Weekly: https://javascriptweekly.com/
 2. React Status: https://react.statuscode.com/
 3. Node Weekly: https://nodeweekly.com/
 4. Mobile Dev Weekly: https://mobiledevweekly.com/

# VSCode Settings

Hit `Shift+Cmd+P` in VSCode and click `Open Settings (JSON)` then append the following to it.

```json
{
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": { "javascript": "javascriptreact" },
  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "eslint.workingDirectories": [
    "./client",
    "./server"
  ]
}
```

# Let's Begin

First of all let us start with getting familiar with javascript concepts. Go to `https://github.com/Freight-Deck/Bootcamp/tree/js-bootcamp/Javascript` and go through all the modules for you knowledge. once you are done then let us begin with the nodejs bootcamp.

## Day 1

Task for Day 1 will be to setup the environment like tools, plugins and run the express server. Then we will learn to configure git to push our code to github.

### Prerequisites

 1. Download the required tools and plugins and subscribe to the above mentioned newsletters.
 2. Open [https://github.com/](https://github.com/) and create your account.
 3. Download and Install Node.js from [here](https://nodejs.org/en/download/). After installing you will be able to acess node package manager (npm) globally.
 4. Go through the following cheatsheet for shortcuts in VSCode.
	 1. Windows: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
	 2.  macOS: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
	 3. Linux: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
  
  ### Walkthrough
  
 1. Create a new folder in your preferred location and open that folder in VSCode.
 2. Open the terminal inside VSCode (or if you prefer to use an external terminal, open that and navigate to the current working directory) by pressing ``Ctrl + ` `` .
 3. Initialize the project folder with `express-generator` using command `npx express-generator`. Note: npx is already available in Node.js version 8.2.0 and above.
 4. After running the command it will ask `destination is not empty, continue?`. Press `y` and hit Enter.
 5. Now your express server is bootstrapped by express-generator. The generated app will have the following directory structure.
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

### Directory Structure
 
**`package.json`** holds the various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package.

The **`bin/`** directory serves as a location where you can define your various startup scripts. The `www` is an example to start the express app as a web server.

In `Express 4.0`  all middleware have been removed so that they can be maintained and updated independently from the core Express, thus they need to be called separately (what you see in **`app.js`**.

The **`public/`** directory serves static files such as images, CSS files, and JavaScript files. We use the `express.static` built-in middleware function in Express. We will talk in detail about this in future.

The **`routes/`** directory is used by `app.js` to register all the routes to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions. We will talk in detail about controller function in future.

The **`views/`** directory will server our static template files in our application.

Then what is the difference between `views/` and `public/` directory 🤔. Let's find out:

`Views` are rendered by the JavaScript runtime “dynamically”, requiring processing of data to generate a response body (usually HTML or a template which in our case is JADE/PUG). The view could be rendered by any http endpoint, or other view, by name.

`Public` is served “statically”, meaning that a file is served as-is from disk or from an in-memory cache. Usually, the path of any subtree or file in public is served by applying its relative path as a suffix to the server’s host plus public subpath.

### Next Steps

1. Now it's time to install the packages defined in `package.json`. Run `npm install` in your terminal. Now `node_modules` folder will be created in your root directory. Don't forget to add this directory in `.gitignore`.
2. Now you can run your server using `npm start` in your terminal. By default it will be hosted at `http://localhost:3000`. Visit the link and you will see the default page which express-generator uses. 
3. Now it's time to initialize this directory as a repository. Run the following github commands in order:
	1. `git config --global user.name "[name]"`. Replace [name] with your GitHub username.
	2. `git config --global user.email "[email address]"`. Replace [email address] with your email id used to create GitHub account.
	3. `git init`
	4. Now go to your github account on web and create a new repository. Use step 1 to step 6 from here: [https://help.github.com/en/articles/create-a-repo](https://help.github.com/en/articles/create-a-repo)
	5. `git remote add origin [url]`.  Replace [url] with your repository url on web. Now your local repo is attached to the github repo.
	6. Since there is already a `README.md` file present in your cloud repo, we should pull the changes first on cloud before commiting our owns. So now we have to run `git pull origin master`.
	7. Now you will see a `README`.md file pulled from github to your local repo.
	8. Now next step is to let github know which files to track. For this we will use the command `git add [filename]` or `git add .` to track all files. But there will be time we don't want some files/dirs to be pushed to cloud like node_modules and the .env file. So before tracking any files we will add a `.gitignore` file in the root directory. You can use [http://gitignore.io/](http://gitignore.io/) to generate content for .gitignore. Just type "Node" in [http://gitignore.io/](http://gitignore.io/) and hit "Create". Now copy this content to your .gitignore file and then run the command `git add .`. You will notice that the folder `node_modules` is blurred which indicates it is not being tracked by git.
	9. Next step is to commit your changes. Run `git commit -am [message]`. Replace [message] with your own message.
	10. Now run `git push origin master`. It will push your changes to github. Go to your browser and navigate to your repository and you will see your content there under `master` branch. We will learn more about branching later in this bootcamp.
	11. Remember the order: pull --> add --> commit --> push.

### Assignment

Find out what the following npm packages does in `app.js`

 1. path
 2. cookie-parser
 
 Find out what the following middlewares does in `app.js`

1. express.json()
2. express.urlencoded({ extended:  false })
3. cookieParser()
4. path.join(__dirname, 'public')

Push your directory to GitHub.

Read this GitHub [cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

## Day 2

The tasks for day 2 is to create our own routes in express and learn how to use Postman to test those routes. We will also learn some basics of JADE templating here.

### Prerequisites

1. Express server from Day 1 should be up and running.
2. Postman should be installed.

  ### Walkthrough
  
1. First we will learn how does the express server knows to render `index.jade` or `index.html` when we hit `http://localhost:3000`.
2. `http://localhost:3000` is the root route which is indicated by `/`. All other routes will be like this `http://localhost:3000/login` which will be indicated as `/login` in our express server.
3. So for configuring root route we will use `/` and for further sub routes we will use `/routeName`.
4. Now lets naviagate to routes folder with the structure as follows.
```
.
├── routes
│   ├── index.js
│   └── users.js
```

5. `index.js` file will handle our root route means `/`, while `user.js` will handle our routes starting from `/users`.
6. Now coming inside the `index.js` file we can see that the we are importing the express router and configuring a `GET` method on `/` route.

```
router.get('/', function(req, res, next) {
	res.render('index', { title:  'Express' });
});
```
In the above code present in `routes/index.js` we are using a `get` method present in `router` object which is used to listen to `GET` requests on this route.

Now the first parameter passed in `get` method is the route name which in our case is the `/` route or the root route. The second parameter is a callback function which runs when someone will hit this route from  a browser or postman or anything else. Inside this function we have access to `request (req)` object, `response (res)` object and `next` which is a callback. We will talk about `next` later in this bootcamp.

The `request` object is used to get the data from frontend while the `response` object is used to send back the response to frontend. In the above piece of code we are not handling any data coming from frontend, but we are sending the response back. Here we are asking the response object to render the `index.jade` file when someone hits the `/` route. Please keep in mind
the .jade file name should match the string passed in the res.render() method. The other parameter which is `{title: 'Express'}` a payload/data which is sent to jade template to render which means the html page will be dynamic, whatever you will send here as payload will be rendered on the browser. Now let's see ho can we use this object in jade.

Navigate to `views/index.jade` and you will see the below code there:

```
block  content
	h1= title
	p Welcome to #{title}
```

Keep in mind the indentation here. As you can see there are two ways to use the `title` property here which is paased before.

1. `h1= title`
2. `p Welcome to #{title}`

If we want some string to be appended to our dynamic data we can use the second syntax otherwise we can use the first syntax.

Instead of send a webpage if you want to send a json object to the frontend we use the below syntax inside the callback function.

```
router.get('/', function(req, res, next) {
	res.status(200).json({data: "some data here"})
});
```

Also don't forget to initialize 'jade' template inside `app.js`. Express generator does it for you. Syntax for the same is:

```
app.set('view engine', 'jade');
```

Also we have to intialize our routes in `app.js` for them to work. Navigate to `app.js` where you will find the below code:

```
var indexRouter =  require('./routes/index');
var usersRouter =  require('./routes/users');
```

Here `indexRouter` will represent our  `/` router while `userRouter` will represent `/users` router.
 
:bulb: ****Pro Tip :**** For this import to work properly don't forget to export your router from `routes/index.js` and `routes/users.js`. Syntax for the same is `module.exports  = router;`

Now coming back to `app.js` file you will see the following code:

```
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

`app.use()` is a method we need to invoke middlewares. In first line we are telling our application to use routes in `indexRouter` wheenver someone hits the `/` route and in second we are telling the app to use `usersRouter` wheever someone hits the `/users` route.

Now let's create our own routes. Open `routes/users.js` and add the following code to it

```
router.get('/info', function(req, res, next) {
	res.status(200).json({data: "Welcome to Freight Deck!!"})
});
```
Restart the server by killing it with `Ctrl+C` and running `npm start` again.

Open Postman. On first launch you will see the following window:

![enter image description here](https://freightdeck-assets.s3.ap-south-1.amazonaws.com/Postman_1.png)

Just Cross this screen from the cross button on top right of this window. Now Click the `+`  button and type this url `http://localhost:3000/users/info`. You will see the response as in the below image.

![enter image description here](https://freightdeck-assets.s3.ap-south-1.amazonaws.com/Postman_2.png)


Now let's see how the url `http://localhost:3000/users/info` is constructed. The first part i.e `http://localhost:3000` is our host running on port 3000. Then we asked the application to use `usersRouter` for `/users` route. So we came upto `http://localhost:3000/users`. Then inside `routes/users.js` we define a GET route for `/info` and sent back the response with status 200 and a json data `{ data:  "Welcome to FREIGHTDECK!!" }` . So we got now `http://localhost:3000/users/info`.

### Assignment

Create a route such that when I hit the route `http://localhost:3000/books/search` I should get back a JSON response `{id: 1, name: "Harry Potter", author: "J.K. Rowling"}`

Create a route such that when I go to `http://localhost/auth/login` I should see webpage templatized in JADE with two fields username and password.

Read up on HTTP methods like GET, POST, PATCH, DELETE etc.

Read Http Status Codes like 404, 403, 200, 201, 500 etc.

## Day 3

In Day 3 we will see how can we send the data from frontend to backend in the form of request body as well as request parameters.

### Prerequisites

1. Basic Express routing should be clear.
2. You should be able to send requests using postman.

### Walkthrough

Today along with GET requests we will be sending some POST requests also. Let's begin.

**Request Body:**

Suppose we want to store details of a book which user enters in a frontend in a form and we want to store that details in our database. So first step will be to get the data from frontend to backend. For these type of use cases we can use POST requests.

First let's create a route `http://localhost:3000/books/add`. Since this a book route we should not be using `routes/users.js` or `routes/index.js`. We will create a new router to handle our book routes.

Create a new file under `routes` folder books.js. After that first things first, we will import the express router. Add the following lines of code in `routes/books.js`

```
var express =  require('express');
var router = express.Router();
```

Now add the POST route as follows

```
router.post('/add', function (req, res, next) {
	console.info(req.body);
	res.status(200).json({ message:  "Book Saved Successfully" });
});
```

Remember we gave you a task to find what `express.json()` does. The answer is it parses the request data in the form of json so that we can access the frontend data through `req.body`.

Last but not the least, never forget to export the router. Add the following piece of code at the last.

```
module.exports  = router;
```

Now we have successfully create a route for adding a book. Now we need to register the route in `app.js`

Open `app.js` and add the following piece of code.

```
var booksRouter =  require('./routes/books');
```

Here we are importing that router which we exported through `routes/books.js`.

Now we have to tell the app to use this route.

Add the following piece of code in `app.js`

```
app.use("/books", booksRouter)
```

So all the routes starting with `/books` will search for methods in `routes/books.js`.

Restart the server by killing it with `Ctrl+C` and running `npm start` again.

Now open postman. Since this is a POST request first change request type to POST from the dropdown. Then add the url `http://localhost:3000/books/add`. Now to send data via postman we have to click the "Body" Radio Button just below where you type the url and also change the type from TEXT to JSON. Then in the space provided send the following data as payload.

```
{
	"id": "1",
	"name": "Harry Potter"
}
```

Please refer to highlighted areas in the below image for better understanding:
![enter image description here](https://freightdeck-assets.s3.ap-south-1.amazonaws.com/Postman_3.png)

Then click Send.

Since you used `console.info(req.body)` this data should be printed on your console as well:

![enter image description here](https://freightdeck-assets.s3.ap-south-1.amazonaws.com/Postman_4.png)

**Request Params:**

Somewhere you must have seen urls like `/books/find/:id`. So in this case the part after the colon becomes a dynamic content and `id` will act as a variable not a string.

Example: if we send a request to the url `/books/find/1234` then in the callback function of this route we can access the id as `const {id} = req.params`. The variable name `id` should be same as in `/books/find/:id`.

Now let's talk about this syntax `const {id} = req.params`. This type of syntax is called destructuring. We can also write it as `const id = req.params.id`. Destructuring is a shorthand for this.

Now let's add another route as follows in `routes/books.js`

```
router.get('/find/:id', function (req, res, next) {
	const {id} = req.params
	console.info(id);
	res.status(200).json({ message:  "Book Found" });
});
```

Remember we gave you a task to find what `express.urlencoded()` does. The answer is it parses the data in the url so that we can access the frontend data through `req.params` .

Restart the server by killing it with `Ctrl+C` and running `npm start` again.

![enter image description here](https://freightdeck-assets.s3.ap-south-1.amazonaws.com/Postman_5.png)

Now send a GET request using postman to route `http://localhost:3000/books/find/1234` and you will see your id which is 1234 is accessible through id variable and also printed in your console.

![enter image description here](https://freightdeck-assets.s3.ap-south-1.amazonaws.com/Postman_6.png)

### Assignment

Create a form using JADE templating engine such that when I got to the route `http://localhost:3000/book/add` it will render a webpage with 3 input boxes containing book id, book name, author name and a Submit button. When I click on the submit button it should send the form data to the backend and print it to console.

Implement this with both request body and request params means in Case 1 the data will be in request body and Case 2 data will be in request params.

Remember one thing, you have to use `/book/add` route only to implenent this.

## Day 4

In Day 4 we will learn how to connect to the database, write schemas and saving data to database.

### Prerequisites

1. Create a free tier account in MongoDB Atlas.
2. It will take 5-10 minutes to setup your cluster.
3. Altlas will ask you to create a new database user. Create this user and remember the password.
4. Then cliclk on `Choose a connection method` and under this choose `Connect your Application`.
5. It will then give you a connection string. Copy and save it somewhere for now and replace `<password>` with your actual password in this string. Note: It is a bad practice to directly set password in this string. Later in this bootcamp we will learn how to use `Vault` for storing our secret keys.
6. Now clone this repository git@github.com:Freight-Deck/Bootcamp.git   Open a terminal in your preffered location and type `git clone git@github.com:Freight-Deck/Bootcamp.git`. You can do it using github CLI also, read about that.

In Day 4 we will learn how to connect to the database, write schemas and saving data to database.

### Walkthrough

Let's start with introducing you with the environment variables.

An `environment variable` is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time. Example:

`SECRET_KEY = "My secret key goes here!!!"`

During application initialization, these are loaded into `process.env` and accessed by suffixing the name of the environment variable as shown below.

`process.env.SECRET_KEY`

For our application we will be using `dotenv` technique. This technique externalizes data by moving it from source code into environment variables in a `.env` file. 

:bulb: ****Pro Tip :**** Add the `.env` file name to `.gitignore` which will prevents `git push` commands from uploading it to the GitHub repo where, for public repos, it would be available to anyone.

**Initialize Database Connection :**

Now open the cloned repo and move to branch `database/connection`. To do it just open your terminal and type `git checkout database/connection` and hit enter. Now you are in `database/connection` branch.

First let's see the folder structure here:

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── connection
│   ├── mongoose.js
├── .gitignore
``` 

First thing whenever you clone a node.js repo is run `npm install` in your terminal to install all the node_modules defined in package.json.

First naviagate to `connection/mongoose.js`.  Here you can see on top we are requiring `mongoose` like `const mongoose =  require("mongoose")` . Mongoose provides a straight-forward, schema-based solution to model your application data. In simple words, Mongoose acts as an intermediate between mongodb and server side language (like NodeJs).

Then next you must be seeing the below line:

`require("dotenv").config();`

We will talk about this in detail. But for now just look at what is does. So `dotenv` is an npm package which loads the environment variables from the `.env` file into the application and make them accessible through `process.env.KEY_NAME`. Now coming to next part, how to actually make a connection to MongoDB.

```
mongoose.connect(process.env.mongoURI, {
	useNewUrlParser:  true,
	useUnifiedTopology:  true
});
```

Mongoose provides a connect method which takes two parameters as follows:
	1. Mongo URI : Connection Url which you got from Atlas before.
	2. options: Some MongoDB parameters.

You can read more about what parameters it supports from here: [https://mongoosejs.com/docs/connections.html](https://mongoosejs.com/docs/connections.html)

Now let's go through the Event Handlers which are as follows: 

1. `connected` - This piece of code will run when the connection is established successfully. So if you want to perform some tasks after a connection is established you can do them here.

```
mongoose.connection.on("connected", () => {
	console.info("MongoDB connected Successfully!!");
});
```

2. `error` - This piece of code will run when the mongoose driver will not be able to make a connection to mondoDB.

```
mongoose.connection.on("error", err  => {
	console.error(`Error in mongoose connection: ${err.message}`);
});
```

3. `disconnected`: This piece of code will run whenever the driver is disconnected from the Atlas server.
```
mongoose.connection.on("disconnected", () => {
console.info("Mongoose connection is disconnected");
});
```

4. `SIGINT`: This piece of code will run whenever there is an unexpected shutdown of the server or somehow unexpectedly the driver is disconnected. 

```
process.on("SIGINT", function() {
	mongoose.connection.close(() => {
		process.exit(0);
	});
});
```

Now we haven't create a `.env` file yet. So if you run only this it will show error like cannot find variable `mongoURI` or it is undefined. So let's create it first. Add a file and name it as `.env` in the root folder and insert below line:

`mongoURI: <your connection url from Altas>`

Remember we used to register our routes in `app.js`.  Same thing we have to do here also. We need to require this file once in app.js. So if you open app.js you will find the following line

`require("./connection/mongoose");`

This is just like running a script. When we require it means we are running the javascript present in that file. So if we require like this, it will run and establish a mongDB connection. Remember there was this line `console.info("MongoDB connected Successfully!!");` in the `connected` event handler in `connection/mongoose.js` file. This will print "MongoDB connected Successfully!!" in your console if the connection is established successfully otherwise if not it will print error to your console.

Note: console.log() is a very bad practice. In future we will learn how to use and configure a logger.

Now if you run this using `npm start` it will require the mongoose connection and connection will be established. Next step is to insert data to it but before that we need to learn some terminologies which will be helpful throughout the bootcamp.

**Some Terminologies:**

1. **Schema**: A Schema is an object that defines the structure of any entry you will store in the database. For example if you want to store a book detail in the db then you need to define the properties of the book like book's name, id and author. That defining of properties of an entry is called a Schema.

2. **Model**: Model is an object that gives you easy access to a named collection, allowing you to query the collection and use the Schema to validate any documents you save to that collection.

3. **Document**: Each entry in a collection is a Document.

 4. **Collection**: All the documents are stored in a collection which in our case is "books" collection.

**Schema, Model, Document and Collection:**

Now move to branch `database/schema` like we did before.

Now you will see a new folder named `schema`. Open `schema/index.js`.

Like we did before we first import `mongoose` on top, then in next line we are extracting `Schema` method from mongoose.

```
const Schema = mongoose.Schema;
```

Then we defined a user schema as follows:

```
const userSchema = new Schema({
	<property_name>: <property_type>
})
```

Example: 

```
const userSchema = new Schema({
	firstName: String
})
```

This can also be written as follows:

```
const userSchema = new Schema({
	firstName: {
		type: String
	}
})
```

The benefit of the above method is we can define other properties as well, like in below example

```
const userSchema = new Schema({
	firstName: {
		type: String,
		minlength: 6
	}
})
```

`minlength` will add a validation that minimum length of the firstName should be 6 otherwise the document will not be inserted in the collection. You can read more about schema types here: [https://mongoosejs.com/docs/schematypes.html](https://mongoosejs.com/docs/schematypes.html)

Now see the last line in schema/index.js :

```module.exports  = User = mongoose.model("User", userSchema);```

Here we are exporting a mongoose model. `mongoose.model` will take two parameters:
1.  Collection name which in this case is "User"
2.  Schema

So now each entry/document of user will be the part of "user" collection in Atlas.

**Instance, Static  Methods and Virtuals:**

1. Instance Methods: These are the methods which are used to manipulate the individual document like `updateUserByName(`), `findUserById()`. Some of them are already provided by mongoose driver as explained here: [https://mongoosejs.com/docs/queries.html](https://mongoosejs.com/docs/queries.html). We also can create our custom instance methods which we are going to learn in a bit.

2. Static Methods: These are the methods which are used to query the whole collection. We will do an example of the same in a bit.

3. Virtuals: Virtuals are the document properties that you can get and set but that do not get persisted to MongoDB like for example there are two properties in your schema one is firstName and other is lastName. Now there is a requirement there in which you have to print the full name. One way is to do like this `firstName + " " + lastName`, another is `${firstName} ${lastName}`. But the best way would be if we can directly access like User.fullName. So what virtuals does is, it creates a virtual property `fullName` to the schema but this property will not be persisted in the database but we can access this like `User.fullName`.

:bulb: ****Pro Tip :**** The Schema, Instance Methods and Virtuals are applied on a Schema not on a Model.

Let's see an example for each one of those:

Change your branch to `database/schema-methods`

You will see a new folder `methods` in the root directory. Open `methods/index.js`.
 
As I said above theses methods (static, instance and virtuals) are applied on the schema rather than the model first setep will be to import that schema like below.

`const { userSchema } =  require("../schema/index");`

Now you might be wondering why I used destructuring here but not in other imports. You will get your answer as you move further.

First let's see how to define **instance methods**. Consider the following piece of code.

```
userSchema.methods.getIfAdult  =  function() {
	return  this.age >  18;
};
```

`this` is a keyword which will give refer to current user object.

Now you might also be wondering why I did not use arrow functions here like below:

```
userSchema.methods.getIfAdult  = () => {
	return  this.age >  18;
};
```

So there is this one thing about arrow functions that they have no scope means we cannot use `this` keyword here.

Now lets describe some **static methods**. There are two ways in which you can define static methods.

Method 1:

```
userSchema.statics.findByAge  =  function(age, callback) {
	this.find({ age: age }, callback);
};
```

Method 2:
```
userSchema.static("findByLastName", function(lastname, callback) {
	this.find({ lastname: lastname }, callback);
});
```

Now let's see how can we implement **Virtuals**.
```
userSchema.virtual("fullName").get(function() {
	return this.firstname + " " + this.lastname;
});
```

This will create a virtual property `fullName` and whenever we will call `user.fullName` it will return `this.firstname + " " + this.lastname;`

We will run all these while implementing controllers in next topic.

**Important:** For all these methods to work it is important to require them before creating the model out of schema. Otherwise they will not be a part of mongoose objects.

So now if you remind we create and export the model in schema files. So open "schema/index.js" and move to last. You will see the below lines.

```
module.exports.userSchema = userSchema;              ---- Line 1
require("../methods/index");                         ---- Line 2
const User = mongoose.model("User", userSchema);     ---- Line 3
module.exports.User = User;                          ---- Line 4
```
Let's see them one by one. First focus on line 2. As I said before creating and exporting the model we have to require the above methods. So Line 2 does that.

But why there are two exports. :thinking:

If you open `methods/index.js` you will see on top we have to import user schema. So before requiring methods in the schema we have to export the schema so that methods/index.js can consume the schema.

And now since we have to export two objects here one is model and other is schema.
Therfore there are 2 module.exports. So now we are exporting the following object `{userSchema, User}`, and this is the reason we import like this `const { userSchema } =  require("../schema/index");` in our methods file.

**Controllers**

A controller is nothing but a  place to take user requests, bring data from the model and pass it back to the view.

If you remember we did routing like this:

```
router.get('/info', function(req, res, next) {
	res.status(200).json({data: "Welcome to FREIGHTDECK!!"})
});
```

If we separate the callback function, it will become a controller like below.

```
infoController = function(req, res, next) {
	res.status(200).json({data: "Welcome to FREIGHTDECK!!"})
}
```
Now we can rewrite our route as below:

```
router.get('/info', infoController);
```

Now you can see the code readability is very much improved.

This all we are going to implement today:

First move to the branch `database/controller`. You will see a new folder named "controller". Open index.js file inside it.

First the user schema is imported on the top. Let's dissect one controller.

```
module.exports.readUser = (req, res) => {
	User.findById(req.params.id, (err, user) => {
	if (err){
		return res
			.status(HttpStatus.NOT_FOUND)
			.json({ message: "Error fetching the user by id" });
	}
	res.status(HttpStatus.OK).json({ user });
	});
};
```

1.  `readUser` will be our controller name.
2.  `module.exports.readUser` means we want to export this controller so that other file can require it.
3.  `req and res` are parameters for the call back function we did previously.
4.  `findById` is an inbuilt function which comes out of the box with schemas created with mongoose driver. It takes 2 parameters, first is id and second is a callback function that will give us an error (null if no error) and the fetched user (null if not found)

if there is some error we are using the response object to send a message to the frontend that there is some problem fetching the user by it's id like below :

```
return res
		.status(HttpStatus.NOT_FOUND)
		.json({ message: "Error fetching the user by id" });
```

But if user is found meaning error is null then we return the user found from id like below:

`res.status(HttpStatus.OK).json({ user });`

You can read about all the methods that comes with mongoose here: [https://mongoosejs.com/docs/api.html](https://mongoosejs.com/docs/api.html)

Now go to folder `routes/index.js`. Here all the routes are defined, we just separated the callbacks and put them all in controllers.

**Assignment**

1.  Create a report on mongoose connection parameters: [https://mongoosejs.com/docs/connections.html](https://mongoosejs.com/docs/connections.html)
2.  Create a report on schema parameters: [https://mongoosejs.com/docs/schematypes.html](https://mongoosejs.com/docs/schematypes.html)
3.  Create a report on all Http Status
4.  Create a profile page in jade template and add 5 fields like first name, last name, address , date of birth, phone and store them in the database.
5. Create routes and controllers for the following:
	1. Create an instance method to check if a person has birthday today.
	2. Create a static method to fetch all users who are having birthday today.
	3. Create a virtual property which will return full name ie first name + last name of the user.



## Engineering Core Values

- **Be humble!**
- Always strive for *simplicity* and *clarity* over 
complexity and fanciness.
	- Don't over-enginner things
	- Don't solve problems which we don't have

	![simplicity](https://i.imgflip.com/3gauln.jpg "simplicity")
- Mistakes
	- Don't be afraid of making them
	-	However, don't make the same mistake twice!
- **Thoughtful Disagreement** - the goal is not to convince the opposite party that you are right, but simply to find out which view is true and then what to do about it. We should strive for *attacking problems as a team*, *help overcome each others' biases*, and *deliver the best solution*.
- Don't be afraid to ask for help
	- Make sure you have exhausted all other options before asking a colleague for help e.g Google, Stack Overflow etc.
	- Respect your colleague's **[flow](https://en.wikipedia.org/wiki/Flow_(psychology))** and _only ask for help when they are free._

		![flow](https://www.gamasutra.com/db_area/images/feature/166972/figure1.png "Logo Title Text 1")

	- Don't interrupt their **flow**, here's why:

		 ![flow](https://i.imgur.com/cXBhfPt.jpg, "Don't interrupt a programmer")


- Offer help when asked
	- Try to understand the problem and the context without blindly offering a solution
	- Try to understand what all approaches the person has tried and why they haven't worked for them
	- Explain the context and assumptions behind the solution you are providing
	- Make sure that the person understands your solution and the reasoning behind it
