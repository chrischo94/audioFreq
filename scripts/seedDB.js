const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/podCastDB"
);
const podcastSeed = [
  {
    title_original: "Modern Finance",
    description_original:
      "Modern Finance breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    audio: "",
    image: ""
  },
  {
    title_original: "The Rough Cut",
    description_original:
      "The Rough Cut breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    audio: "http://theroughcutpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    image: ""
  },
  {
    title_original: "Sky Sports Lock Up",
    publisher: "Chris Cho",
    description_original:
      "Sky Sports Lock Up breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    audio: "http://skysportslockuppod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    image:""
  },
  {
    title_original: "The Side Dish",

    description_original:
      "The Side Dish breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    audio: "http://thesidedishpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    image: ""
  },
  {
    title_original: "Joe Rogan Experience",
   
    description_original:
      "JRE breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    audio: "http://JREpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    image: ""
  },
];
db.Podcast
  .remove({})
  .then(() => db.Podcast.collection.insertMany(podcastSeed))
  .then(data => {
    console.log(data.result.n + " podcasts included!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });