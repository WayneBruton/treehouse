var express 			= require("express"),
		bodyParser		= require("body-parser"),
		nodemailer		= require("nodemailer"),
          app 			= express();
          
app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000 || process.env.PORT;

app.use(require("cookie-session")({
	secret: "Chester is awesome",
	resave: false,
	saveUninitialized: false
}));

app.get('/', (req, res) => {
    res.render('index');
});

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, process.env.IP, function(){
    console.log('Server has started....');
});