options( digits = 16 )
library( jsonlite )


m = 8
n = 4
k = 3
probs = seq( 0, 1, 0.01 )
y = qhyper( probs, m, n, k )

cat( y, sep = ",\n" )

data = list(
	m = m,
	n = n,
	k = k,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
