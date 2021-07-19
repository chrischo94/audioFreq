const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
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
      "",
    listen_score_global_rank: "2.5%",
    link: "http://theroughcutpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    synopsis:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    date: new Date(Date.now())
  },
  {
    title: "The Punch Escrow",
    author: "Tal M. Klein",
    synopsis:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    date: new Date(Date.now())
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " podcasts included!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
