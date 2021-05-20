import fs from 'fs';
import React from 'react';
import reactToImage from './src';

const Component = () => {
  return (
    <div>
      <h1>Hello there.</h1>
    </div>
  );
};

(async () => {
  const image = await reactToImage(Component);
  fs.writeFileSync('example.png', image);
})();
