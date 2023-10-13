function decimalToBinary(num) {
  //Write you code here
  let binaryNum ="";
	while(num > 0){
		rem = num % 2;
		binaryNum +=rem;
		num = num /2;
	}
	return binaryNum ;
}

window.decimalToBinary = decimalToBinary;
