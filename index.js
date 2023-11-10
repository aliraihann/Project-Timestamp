// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
// app.get("/api/hello", function (req, res) {
//   res.json({greeting: 'hello API'});
// });

app.get("/api", function (req, res) {
  res.json({
    unix: Math.floor(new Date()).valueOf(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date", function (req, res) {
  const date = req.params.date;
  if (date != undefined) {
    let regex = /^[0-9]+$/
    if (regex.test(date)) {
      let unixReqParse = parseInt(date, 10);
      let unixDate = new Date(unixReqParse);
      if (isNaN(unixDate.getTime())) {
        res.json({
              error: "Invalid Date",
            });
            return;
      }
      let unixTime = unixDate.getTime();
      let unixUtcTime = unixDate.toUTCString();
      res.json({
        unix: unixTime,
        utc: unixUtcTime,
      });
    } else {
      let utcDate = new Date(date);
      if (isNaN(utcDate.getTime())) {
        res.json({
              error: "Invalid Date",
            });
            return;
      }
      let utcUnixTime = utcDate.getTime();
      let utcTime = utcDate.toUTCString();
      res.json({
        unix: utcUnixTime,
        utc: utcTime,
      });
    }
  }
});
  

// app.get("/api/:date", function (req, res) {
//   let date_string = req.params.date;
//   let unixTime = parseInt(date_string);
//   if (date_string != undefined) {
//     if (date_string.match("-") != null) {
//       res.json({
//         unix: Math.floor(new Date(date_string)).valueOf(),
//         utc: new Date(date_string).toUTCString(),
//       });
//     } else {
//       // let date_string = parseInt(req.params.date);
//       let unixDate = parseInt(date_string, 10)
//       let date = new Date(unixDate);
//       res.json({
//         unix: date.getTime(),
//         utc: date.toUTCString(),
//       });
//     }      
//   }
// });
//==============
  // }
  //   res.json({ 
  //     error : "Invalid Date" 
  //   })

  // } else {
  //   res.json({
  //     unix: new Date(date_string).getTime(),
  //     utc: new Date(date_string).toUTCString(),
  // })

// };

// unix: Math.floor((new Date(date_string)).getTime()),
// utc: new Date(date_string).toUTCString(),

// listen for requests :)
const port = process.env.PORT || 3000;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
