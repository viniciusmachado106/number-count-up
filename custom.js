const preQualifiedAmount = 7504;

const dollarOption = {
	duration: 1,
	prefix: '$',
}

const qualifiedAmount = new CountUp('pre-qualified-amount', preQualifiedAmount, dollarOption);


if (!qualifiedAmount.error) {
	qualifiedAmount.start();
	amazonOverall.start();
	minAmount.start();
	maxAmount.start();
} else {
	console.error(qualifiedAmount.error);
}