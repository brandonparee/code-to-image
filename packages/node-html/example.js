const htmlToImage = require("./lib");

const html = `
<html>
  <body>
    <h1>Hello there</h1>
  </body>
</html>
`;

(async () => {
  await htmlToImage(html, { outputPath: "example.png" });
  await htmlToImage(html, { outputPath: "transparent-example.png", omitBackground: true });
})();
