'use strict';

/**
 * code-snippet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-snippet.code-snippet');
