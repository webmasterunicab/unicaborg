/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';
import './styles/estilosUnicabOrg.scss';

//console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
const $ = require('jquery');
require('bootstrap');
global.$ = global.jQuery = $;
//window.bootstrap = require('bootstrap');
