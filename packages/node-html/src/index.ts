type HTMLToImageOptions = {
  outputPath?: string;
  omitBackground?: boolean;
};

async function htmlToImage(
  html: string,
  { outputPath, omitBackground = false }: HTMLToImageOptions = {}
) {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  const screenshot = await page.screenshot({
    path: outputPath,
    omitBackground,
  });

  await browser.close();

  return screenshot;
}

export default htmlToImage;