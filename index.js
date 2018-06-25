#!/usr/bin/env node

const getFoodTrucks = require('./getFoodTrucks');
console.log("NAME".padEnd(75) + "ADDRESS");
getFoodTrucks.getFoodTrucks(0);