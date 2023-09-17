'use strict';

/**
 * brand-identity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::brand-identity.brand-identity');
