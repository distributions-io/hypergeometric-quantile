options( digits = 16 )
library( jsonlite )

m = 1
n = 1
k = 1
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
