options( digits = 16 )
library( jsonlite )


m = 5
n = 9
k = 2
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qhyper( probs, m, n, k )

cat( y, sep = ",\n" )

data = list(
	m = m,
	n = n,
	k = k,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
