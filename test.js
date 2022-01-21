const createHafas = require("db-hafas");

const hafas = createHafas("gaurail");
// Berlin Jungfernheide to München Hbf
hafas
  .journeys("8011167", "8000261", { results: 1 })
  .then(({ journeys }) => console.log(journeys[0]))
  .catch(console.error);
