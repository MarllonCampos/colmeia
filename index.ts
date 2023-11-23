function fizzBuzz(numbers: Array<number>) {
  // for (let number of numbers) {
  //   let response = '';
  //   if (number % 3 == 0) response += 'fizz';
  //   if (number % 5 == 0) response += response.length > 0 ? 'Buzz' : 'buzz';
  //   console.log(`${number} - ${response}`);
  // }

  // Existem diversas formas de realizar esse método porém decidi seguir pelo forEach
  numbers.forEach((number) => {
    let response = '';
    if (number % 3 == 0) response += 'fizz';
    if (number % 5 == 0) response += response.length > 0 ? 'Buzz' : 'buzz';
    console.log(`${number} - ${response}`);
  });

  // for (let i = 0; i < numbers.length; i++) {
  //   let response = '';
  //   if (numbers[i] % 3 == 0) response += 'fizz';
  //   if (numbers[i] % 5 == 0) response += response.length > 0 ? 'Buzz' : 'buzz';
  //   console.log(`${numbers[i]} - ${response}`);
  // }
}

const numbersArray = [3, 5, 9, 15, 29, 27, 32, 45];
fizzBuzz(numbersArray);
