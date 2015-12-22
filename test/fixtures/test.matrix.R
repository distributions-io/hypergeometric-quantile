options( digits = 16 )
library( jsonlite )

m = 25
n = 21
k = 10
probs = 0:24 / 25
y = qhyper( probs, m, n, k )

cat( y, sep = ",\n" )

data = list(
	m = m,
	n = n,
	k = k,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
