'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (str) {
	return str.split(" ").map(mot => {
		return mot.charAt(0).toUpperCase()+mot.slice(1).toLowerCase();
	}).join(" ")

}





//* Begin of tests
jadenCase("You must write your own tests")
const assert = require('assert')

// assert.fail('You must write your own tests')
// End of tests */
