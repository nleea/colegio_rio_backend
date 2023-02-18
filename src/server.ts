import "dotenv/config";

import("./app")
  .then((app) => {
    new app.App().server();
  })
  .catch((e) => {
    console.log("Error in the server" + e);
  });
