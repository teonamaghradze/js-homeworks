class Validator {
  isEmail(str) {
    const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validMail.test(str);
  }

  isDomain(domain) {
    const validDomain =
      /^(?!:\/\/)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.){1,}(?:[a-zA-Z]{2,}|xn--[a-zA-Z0-9-]{2,})$/;
    return validDomain.test(domain);
  }

  isDate(date) {
    const validDate = /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return validDate.test(date);
  }

  isPhone(phoneNum) {
    //+375 (29) 817-68-92
    const validPhone = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
    return validPhone.test(phoneNum);
  }
}

let validator = new Validator();

console.log(validator.isEmail("jshtml@gmail.com"));
console.log(validator.isDomain("jshtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+375 (29) 817-68-92")); // it can be format of your country
