function decimalToBinary(num) {
  //Write you code here
  let binaryNum ="";
	while(num > 0){
		let rem = num % 2;
		binaryNum +=rem;
		num =Math.floor( num/2);
	}
	return binaryNum ;
}

window.decimalToBinary = decimalToBinary;
