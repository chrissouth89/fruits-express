# MEN Stack Fruits App

# Schema

```
fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
})
```

# Install Guide
First navigate to your lectures directory in your terminal and then the following command: `git clone https://github.com/chrissouth89/fruits-express`


After you have cloned the repo you will cd intro the directory that was newly created by the clone command and run the following command in your terminal: `npm i`

Now that you have installed the projects dependencies it is time to add your .env file: `touch .env`

With your newly created ``.env`` file it is now time to add your `MONGODB_URI` and `PORT` variables to it. Copy and paste your MongoDB connection into the `.env` file and add a `PORT` with a valid port number (Remember, no spaces anywhere in your `.env`!).

It is now time to run your server. Inside your `fruits-express` folder in your terminal, run the following command to start your server: `nodemon`

Navigate to `localhost:4000` or whatever PORT number you specified to see your working app!

# Technologies Used
1. JavaScript
1. ExpressJS
1. NodeJS
1. MongoDB