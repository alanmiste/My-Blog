# AM Blog

AM Blog is a simple blog, consisting of a home page to display all posts, an about page, and a page to add new posts.<br>
Each post can be deleted individually.

I used **Node.js** with **Express** framework to mange routing, requests, server-side logic and responses.

> You can find more information about **Express** [here](https://expressjs.com).

To output the dynamic data that come from database I used a view engine **EJS**

## EJS :

`Embedded JavaScript templating`

-**How dose EJS work?**

The view files live on the server and we want to render one through the browser that view file is passed into the EJS view engine to be processed, the engine looks for any kind of dynamic content, variables, loops... etc. Then whenever it finds those it figures out the resulting HTML code for those parts and in the end it spits out a valid HTML page based on the template we wrote and then the HTML page with the resulting data inside it will be returned to the browser, and this whole process is called **server-side** rendering.

> You can find more information about **EJS** [here](https://ejs.co).

## Database

I used **MongoDB** to handle data, with **Mongoose** I created a Schema for the blogs, it's simple, consisting of: title, snippet and body, with a JSON object timestamps -generated and saved automatically in the database- to sort blogs by creation date.

## MVC approach

It stands for **Model**, **View**, **Controller**. It's a method of structuring the code and files to make the code more modular, reusable and easier to maintain.

**Models** are how to describe the data structure and use them to interact with the database.

**Views** are how to make HTML templates that the a user will see.

**Controllers** is the thing that forms the link between models and views, it use models to get data and then pass that data into a view.

The idea behinde this approach is to make the code easier to manage and to undestand, so I splitted the code into different areas of files and then each area of file has its own job to do, so the route file matches incoming requests and it passes those requests to the correct controller function. A controller communicates with the appropriate model to get dtat into a view, then the view renders that data into it's template and it get sent to the browser.

## Available

The project is available on the link below via **Render**: <br>
[Live Link](https://amblog.onrender.com)

> **Note:** Within the free Render hosting service, the application is put to sleep about half an hour after the last activity, so it may take a few seconds to work sometimes.

## Installation

- Clone the project or download it.
- Run `npm install` in project folder.
- The app needs to connect to **mongodb** database via **MongoDB URI** in the **.env** file.

- Create a database named `AMBlog` if needed.  

- Run the project with `node app.js`.
- The App will run on [http://localhost:3000](http://localhost:3000/) in the browser.
