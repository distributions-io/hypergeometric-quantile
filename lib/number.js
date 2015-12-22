'use strict';

// MODULES //

var hyperCDF = require( 'distributions-hypergeometric-cdf/lib/number.js' );


// FUNCTIONS //

var max = Math.max,
	min = Math.min;


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
	var x,
		finished = false,
		prob;
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	if ( p === 0 ) {
		return max( 0, k - n );
	}
	if ( p === 1 ) {
		return min( k, m );
	}
	x = max( 0, k - n );
	while ( !finished ) {
		prob = hyperCDF( x, m, n, k );
		if ( prob > p ) {
			finished = true;
		} else {
			x++;
		}
	}
	return x;
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
