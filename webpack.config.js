'use strict';

import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/js/script.js';
export const output = {
  filename: 'bundle.js',
  path: resolve('./dist')
};
export const optimization = {
  minimize: false
};
export const module = {
  rules: [
    {
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
  ]
};

