function createPhoneNumber(numbers){
    if(numbers.length === 10){
      let result = "(";
      for (let i =0; i<= 2; ++i)
      result += numbers[i].toString();
      result += ") ";
      for (let i = 3; i <= 5; ++i){
        result += numbers[i].toString();
      }
      result += "-";
      for (let i = 6; i< numbers.length; ++i) result += numbers[i].toString();
      return result;
    }
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];