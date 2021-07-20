const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/podCastDB"
);
const podcastSeed = [
  {
    title: "Modern Finance",
    publisher: "Kevin Rose",
    description:
      "Modern Finance breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    listen_score_global_rank: "0.5%",
    link: ""
  },
  {
    title: "The Rough Cut",
    publisher: "Matt Feury",
    description:
      "The Rough Cut breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    listen_score_global_rank: "2.5%",
    link: "http://theroughcutpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
  },
  {
    title: "Sky Sports Lock Up",
    publisher: "Chris Cho",
    description:
      "Sky Sports Lock Up breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    listen_score_global_rank: "5.0%",
    link: "http://skysportslockuppod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
  },
  {
    title: "The Side Dish",
    publisher: "Bestville Apartments",
    description:
      "The Side Dish breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    listen_score_global_rank: "99%",
    link: "http://thesidedishpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
  },
  {
    title: "Joe Rogan Experience",
    publisher: "Spotify",
    description:
      "JRE breaks down all things bitcoin, cryptocurrency, finance hacks & tips, decentralized finance (DeFi), yield farming, NFTs, robo-investing, and more. Join entrepreneur and technology venture capitalist Kevin Rose as he interviews experts and the entrepreneurs building modern finance tools. Time Magazine calls Kevin one of the 'Top 25 Most Influential People on the Web,' and Bloomberg lists him as a 'Top 25 Angel Investor.' Kevin has appeared on the Jimmy Fallon Show, Charlie Rose Show, as well as the print covers of Businessweek and Inc. Magazine.",
    listen_score_global_rank: "6.0%",
    link: "http://JREpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
  },
];
db.Podcast
  .remove({})
  .then(() => db.Podcast.collection.insertMany(podCastSeed))
  .then(data => {
    console.log(data.result.n + " podcasts included!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });