options( digits = 16 )
library( jsonlite )


m = 3
n = 2
k = 1
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

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
