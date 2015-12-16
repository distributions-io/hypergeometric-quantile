'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( m, n, k )
*	Partially applies number of white balls in urn `m` and number of black balls in urn `n` and number of draws `k` and returns a function for evaluating the quantile function for a hypergeometric distribution.
*
* @param {Number} m - number of white balls in urn
* @param {Number} n - number of black balls in urn
* @param {Number} k - number of draws
* @returns {Function} quantile function
*/
function partial( m, n, k ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a hypergeometric distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
