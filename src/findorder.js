
// Script to find the order of the power of an 
// element given the order of the element to no power.


const getGCD = (m,n) => {

	let max = Math.max(m,n);
	let min = Math.min(m,n);

	while (min !== 0){
		let temp = min
		min = max % min;
		max = temp
	}

	return max
}

const getOrder = (orderA, powerOfA) => {
	const order = orderA/getGCD(orderA,powerOfA);
	return order;
}
export default getOrder;