!function(f,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.materialColorPalettes=e():f.materialColorPalettes=e()}(window,(function(){return function(f){var e={};function c(a){if(e[a])return e[a].exports;var d=e[a]={i:a,l:!1,exports:{}};return f[a].call(d.exports,d,d.exports,c),d.l=!0,d.exports}return c.m=f,c.c=e,c.d=function(f,e,a){c.o(f,e)||Object.defineProperty(f,e,{enumerable:!0,get:a})},c.r=function(f){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},c.t=function(f,e){if(1&e&&(f=c(f)),8&e)return f;if(4&e&&"object"==typeof f&&f&&f.__esModule)return f;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:f}),2&e&&"string"!=typeof f)for(var d in f)c.d(a,d,function(e){return f[e]}.bind(null,d));return a},c.n=function(f){var e=f&&f.__esModule?function(){return f.default}:function(){return f};return c.d(e,"a",e),e},c.o=function(f,e){return Object.prototype.hasOwnProperty.call(f,e)},c.p="",c(c.s=0)}([function(f,e,c){"use strict";c.r(e),materialColors=new Map(Object.entries({red:["#d50000","#ff1744","#ff5252","#ff8a80","#b71c1c","#c62828","#d32f2f","#e53935","#f44336","#ef5350","#e57373","#ef9a9a","#ffcdd2","#ffebee"],pink:["#c51162","#f50057","#ff4081","#ff80ab","#880e4f","#ad1457","#c2185b","#d81b60","#e91e63","#ec407a","#f06292","#f48fb1","#f8bbd0","#fce4ec"],purple:["#aa00ff","#d500f9","#e040fb","#ea80fc","#4a148c","#6a1b9a","#7b1fa2","#8e24aa","#9c27b0","#ab47bc","#ba68c8","#ce93d8","#e1bee7","#f3e5f5"],deepPurple:["#6200ea","#651fff","#7c4dff","#b388ff","#311b92","#4527a0","#512da8","#5e35b1","#673ab7","#7e57c2","#9575cd","#b39ddb","#d1c4e9","#ede7f6"],indigo:["#304ffe","#3d5afe","#536dfe","#8c9eff","#1a237e","#283593","#303f9f","#3949ab","#3f51b5","#5c6bc0","#7986cb","#9fa8da","#c5cae9","#e8eaf6"],blue:["#2962ff","#2979ff","#448aff","#82b1ff","#0d47a1","#1565c0","#1976d2","#1e88e5","#2196f3","#42a5f5","#64b5f6","#90caf9","#bbdefb","#e3f2fd"],lightBlue:["#0091ea","#00b0ff","#40c4ff","#80d8ff","#01579b","#0277bd","#0288d1","#039be5","#03a9f4","#29b6f6","#4fc3f7","#81d4fa","#b3e5fc","#e1f5fe"],cyan:["#00b8d4","#00e5ff","#18ffff","#84ffff","#006064","#00838f","#0097a7","#00acc1","#00bcd4","#26c6da","#4dd0e1","#80deea","#b2ebf2","#e0f7fa"],teal:["#00bfa5","#1de9b6","#64ffda","#a7ffeb","#004d40","#00695c","#00796b","#00897b","#009688","#26a69a","#4db6ac","#80cbc4","#b2dfdb","#e0f2f1"],green:["#00c853","#00e676","#69f0ae","#b9f6ca","#1b5e20","#2e7d32","#388e3c","#43a047","#4caf50","#66bb6a","#81c784","#a5d6a7","#c8e6c9","#e8f5e9"],lightGreen:["#64dd17","#76ff03","#b2ff59","#ccff90","#33691e","#558b2f","#689f38","#7cb342","#8bc34a","#9ccc65","#aed581","#c5e1a5","#dcedc8","#f1f8e9"],lime:["#aeea00","#c6ff00","#eeff41","#f4ff81","#827717","#9e9d24","#afb42b","#c0ca33","#cddc39","#d4e157","#dce775","#e6ee9c","#f0f4c3","#f9fbe7"],yellow:["#ffd600","#ffea00","#ffff00","#ffff8d","#f57f17","#f9a825","#fbc02d","#fdd835","#ffeb3b","#ffee58","#fff176","#fff59d","#fff9c4","#fffde7"],amber:["#ffab00","#ffc400","#ffd740","#ffe57f","#ff6f00","#ff8f00","#ffa000","#ffb300","#ffc107","#ffca28","#ffd54f","#ffe082","#ffecb3","#fff8e1"],orange:["#ff6d00","#ff9100","#ffab40","#ffd180","#e65100","#ef6c00","#f57c00","#fb8c00","#ff9800","#ffa726","#ffb74d","#ffcc80","#ffe0b2","#fff3e0"],deepOrange:["#dd2c00","#ff3d00","#ff6e40","#ff9e80","#bf360c","#d84315","#e64a19","#f4511e","#ff5722","#ff7043","#ff8a65","#ffab91","#ffccbc","#fbe9e7"],brown:["#3e2723","#4e342e","#5d4037","#6d4c41","#795548","#8d6e63","#a1887f","#bcaaa4","#d7ccc8","#efebe9"],grey:["#212121","#424242","#616161","#757575","#9e9e9e","#bdbdbd","#e0e0e0","#eeeeee","#f5f5f5","#fafafa"],blueGrey:["#263238","#37474f","#455a64","#546e7a","#607d8b","#78909c","#90a4ae","#b0bec5","#cfd8dc","#eceff1"]})),e.default=materialColors}])}));