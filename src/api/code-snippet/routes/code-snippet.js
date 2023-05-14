'use strict';

/**
 * code-snippet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::code-snippet.code-snippet');
