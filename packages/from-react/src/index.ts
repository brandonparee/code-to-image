import React from 'react';
import Server from 'react-dom/server';
import htmlToImage from 'from-node-html';

async function reactToImage(Component: React.FC | React.ComponentClass) {
  const html = Server.renderToString(React.createElement(Component));

  const image = await htmlToImage(html);

  return image;
}

export default reactToImage;