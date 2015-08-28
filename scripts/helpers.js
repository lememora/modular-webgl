/*global define*/
'use strict';

define([
  'twgl'
], function(
  twgl
) {
  twgl.setAttributePrefix("a_");

  function gl() {
    var c = document.createElement('canvas');
    c.setAttribute('id', 'c');
    document.body.appendChild(c);
    return twgl.getWebGLContext(document.getElementById("c"));
  }

  function programInfo(gl, vs, fs) {
    return twgl.createProgramInfo(gl, [vs, fs]);
  }

  return {
    gl: gl,
    programInfo: programInfo
  }
});
