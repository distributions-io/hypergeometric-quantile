'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, m, n, k )
*	Evaluates the quantile function for a hypergeometric distribution with number of white balls in urn `m` and number of black balls in urn `n` and number of draws `k` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} m - number of white balls in urn
* @param {Number} n - number of black balls in urn
* @param {Number} k - number of draws
* @returns {Number} evaluated quantile function
*/
function quantile( p, m, n, k ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
