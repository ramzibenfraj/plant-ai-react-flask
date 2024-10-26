// Appel des packages
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const bodyParser = require("body-parser")
const router = express.Router(); // Créez un routeur Express.
const cookieParser = require('cookie-parser');
const nodemailer = require("nodemailer");
const predictionsRoute = require('./routes/api/predictions');


// Lancer le module express avec le format JSON
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(cors({
  origin: 'http://react-service:3000',
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Appeler le chemin de connexion
const mongo_url = config.get("mongo_url");

//Permet l'interaction avec MongoDB
mongoose.set("strict", true);
mongoose
  .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Bien connecté à MongoDB");
    
    //link users route(require users.js)
    const usersRouter = require('./routes/api/users');
    app.use('/users', usersRouter);


    const usersLoginRoute = require('./routes/api/auth');
    app.use('/auth', usersLoginRoute);


    const mailRoute = require('./routes/api/contact');
    app.use('/mail', mailRoute);

    app.use('/predictions', predictionsRoute);




    //Démarrer le serveur
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`Bien connecté au serveur via le port ${port}`));
  })
  .catch((err) => console.log(err));