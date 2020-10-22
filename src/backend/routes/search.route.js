const express = require("express");
const router = express.Router();

const SeerArticle = require("../models/SeerArticle.model");

const todaysDate = new Date()
const currentYear = todaysDate.getFullYear()

// all the /search request
router.use((req, res, next) => {
  console.log(
    "Router level - all search",
    req.method,
    req.originalUrl,
    Date.now()
  );
  next();
});

// List all
router.get("/", (req, res, next) => {
  // let newSeerArticle = new SeerArticle({"title":"test_title", "URL":"http://google.com", "status": "queued", "date": Date.now() })
  // newSeerArticle.save();
  // console.log(res);
  // SeerArticle.find({})
  //   .then((data) => {
  //     res.json(data);
  //     console.log(data);
  //     console.log(res);
  //   })
  // .catch(next);
  seerSearch("", "", "", "", "", "", [], res, next);
});

// search 
router.post("/filter", (req, res, next) => {
  console.log(req.body);

  // console.log("req.body:" + req.body.task);
  console.log("req.body.title:" + req.body.title);
  console.log("req.body.author:" + req.body.author);
  console.log("req.body.yearSelection:" + req.body.yearSelection);
  console.log("req.body.fromYear:" + req.body.fromYear);
  console.log("req.body.toYear:" + req.body.toYear);
  console.log("req.body.method:" + req.body.method);
  console.log("req.body.claims:" + req.body.claims);

  let title = req.body.title;
  let author = req.body.author;
  let yearSelection = req.body.yearSelection;
  let fromYear = req.body.fromYear;
  let toYear = req.body.toYear;
  let method = req.body.method;
  let claims = req.body.claims;

  seerSearch(title, author, yearSelection, fromYear, toYear, method, claims, res, next);
});

// create
router.post("/", (req, res, next) => {
  console.log("req.body:" + req.body.title);

  if (req.body.title) {
    SeerArticle.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(400).send("adding new SeerArticle failed");
      });
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

// delete
router.delete("/:id", (req, res, next) => {
  SeerArticle.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

function seerSearch(title, author, yearSelection, fromYear, toYear, method, claims, res, next) {
  seerSearchJson(title, author, yearSelection, fromYear, toYear, method, claims)
    .then((data) => { 
      console.log(JSON.stringify(data, null, 4))
      res.json(data)
    })
    .catch(next);
}

function seerSearchJson(title, author, yearSelection, fromYear, toYear, method, claims) {
  let query = SeerArticle.find(
    {
      title: { $regex: title, $options: "i" },
      author: { $regex: author, $options: "i" },
      method: { $regex: method, $options: "i" },
      // claims: { $all: claims },
    }
  );

  // if (yearSelection != "all") {
  //   // year: { $gte: fromYear, $lte: toYear },
  //   query = query.where({ year: { $gte: fromYear, $lte: toYear } });
  // } else if (condition) {

  // } else {

  // }

  switch (yearSelection) {
    case "thisYear":
      query = query.where({ year: currentYear });
      break;
    case "fiveYears":
      query = query.where({ year: { $gte: currentYear - 4, $lte: currentYear } });
      break;
    case "tenYears":
      query = query.where({ year: { $gte: currentYear - 9, $lte: currentYear } });
      break;
    case "custom":
      query = query.where({ year: { $gte: fromYear, $lte: toYear } });
      break;
    default:
  }

  if (claims.length > 0) {
    query = query.where({ "claims.benefit": { $in: claims } });
  }

  // sorting
  query = query.sort({year: 'descending'});

  // console.log(JSON.stringify(query, null, 4))
  console.log(query)
  return query;
}

module.exports = router;
// module.method = seerSearchJson;