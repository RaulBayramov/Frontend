const http = require("http");
const url = require("url");
const fs = require("fs");
const tempMainPage = fs.readFileSync(`./index.html`, "utf-8");
// const slugs = courses.map((cartElement) => {
//   slugify(cartElement.name, { lower: true });
// });
// console.log(slugs);
const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-type": "text/html" });
  console.log("Hell0");
  res.end(tempMainPage);
});
server.listen(1000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
