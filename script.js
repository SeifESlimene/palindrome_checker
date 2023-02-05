function palindrome() {
  let str = document.getElementById("palindrome").value.toUpperCase();
  let result = false;
  let reg = /[^A-Za-z0-9]/gi;
  let newStr = str.toUpperCase().replaceAll(reg, "");
  if (newStr === "") {
    result = false;
  }
  if (newStr.length === 1) {
    result = true;
  }
  if (newStr.length > 1) {
    let start, end;
    let array = newStr.split("");
    let i = Math.floor(newStr.length / 2);
    if (newStr.length % 2 !== 0) {
      start = array.slice(0, i);
      end = array.slice(i + 1, newStr.length);
    } else {
      start = array.slice(0, i);
      end = array.slice(i, newStr.length);
    }
    let reversedEnd = end.reverse();
    let joinedStart = start.join("");
    let joinedReversedEnd = reversedEnd.join("");
    if (joinedStart === joinedReversedEnd) {
      result = true;
    } else {
      result = false;
    }
  }
  document.getElementById("result-fn").innerHTML = result;
}
