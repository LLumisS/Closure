'use strict';

const seq = (f) => (g) => (isNaN(g) ? seq((c) => f(g(c))) : f(g));

module.exports = { seq };
