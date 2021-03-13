const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.use(express.json());
const unirest = require("unirest");

app.get("/", (req, res) => {
  var req = unirest("GET", "https://ip-geo-location.p.rapidapi.com/ip/check");

  req.query({
    format: "json",
  });

  req.headers({
    "x-rapidapi-key": "969ddf4f94mshe5029138db7e4f1p139c31jsnb2b9317182ce",
    "x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
    useQueryString: true,
  });

  //   req.end(function (result) {
  //     if (res.error) throw new Error(result.error);

  //   console.log(body.location.latitude, body.location.longitude);
  req.end(function (res) {
    res.send(res.body.location.latitude, res.body.location.longitude);
  });
});

// app.use(logger("dev"));

// app.use(compression());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
