class MyString {
  reverse(string) {
    return string.split("").reverse().join("");
  }
  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ucWords(string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}

let str = new MyString();
console.log(str.reverse("abcde")); // print 'edcba'
console.log(str.ucFirst("abcde")); // print 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); // print 'Abcde Abcde Abcde'
