import "dotenv/config";

import("./app")
  .then((app) => {
    new app.App().server();
  })
  .catch(() => {
    console.log("Error in the server");
  });
