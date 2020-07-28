// We can use import since we are using babel
import express from "express";
import React from "react";
// Another method that delivers responses in chunks for better performance in large applications.
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));

app.use((req, res) => {
  // Immediately flush this
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  // Flush pieces of data in parts
  // Progressively give u data over time
  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(
    res,
    { end: false }
  );

  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
