/*global require*/
'use strict';

require.config({
  baseUrl: 'scripts',
  paths: {
    'twgl': 'twgl-full'
  },
  urlArgs: "bust=" + (new Date()).getTime(),
  deps: ['app']
});
