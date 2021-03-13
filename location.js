// function getLocation(app) {
//   const unirest = require("unirest");

//   app.get("/", (req, res) => {
//     var req = unirest("GET", "https://ip-geo-location.p.rapidapi.com/ip/check");

//     req.query({
//       format: "json",
//     });

//     req.headers({
//       "x-rapidapi-key": "969ddf4f94mshe5029138db7e4f1p139c31jsnb2b9317182ce",
//       "x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
//       useQueryString: true,
//     });

//     req.end(function (result) {
//       if (res.error) throw new Error(result.error);
//       console.log(result.body.location);
//       res.send(result.body.location);
//     });
//   });
// }

// getLocation();
