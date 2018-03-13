#!/usr/bin/env node

'use strict';

exports = module.exports = (query, originalQuery) => {
  console.error('query', query, 'originalQuery', originalQuery);
  return 'select id from jobs';
};