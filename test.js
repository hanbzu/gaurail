const createHafas = require("db-hafas");

const hafas = createHafas("gaurail");

// Berlin Jungfernheide to München Hbf
hafas
  .departures("8000261")
  //   .journeys("8011167", "8000261", { results: 1 })
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch(console.error);
