import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dds6yoff3' } });

  // Replace 'pexels-sanaan-3052361' with the actual public ID from Cloudinary
  const img = cld
        .image('pexels-sanaan-3052361') // Public ID from Cloudinary (No local path)
        .format('auto') // Optimize delivery
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Auto crop and resize

  return <AdvancedImage cldImg={img} />;
};

export default App;
