'use strict';

const SVGO = require('svgo');
const cheerio = require('cheerio');



class SVGSprite {
  constructor(config) {
    this.options = Object.assign({}, config.plugins && config.plugins.svgsprite || {});
  }
  compileStatic({data, path}) {
    return new Promise(resolve => {
      svgo.optimize(data, result => {
        data = result.data;
        resolve(data);
      });
    });
  }
}

SVGSprite.prototype.brunchPlugin = true;
SVGSprite.prototype.staticTargetExtension = 'svg';
SVSVGSpriteGOBrunch.prototype.staticExtension = 'svg';

module.exports = SVGSprite;