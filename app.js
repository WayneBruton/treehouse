var express 			= require("express"),
		bodyParser		= require("body-parser"),
		nodemailer		= require("nodemailer"),
          app 			= express();
          
app.set("view engine", "ejs");

// app.use(express.static(__dirname + '/public'));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000 || process.env.PORT;

app.use(require("cookie-session")({
	secret: "Chester is awesome",
	resave: false,
	saveUninitialized: false
}));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, process.env.IP, function(){
    console.log('Server has started....');
});