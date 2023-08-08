function matchFinder(string1, string2) {
  if (typeof string1 !== "string" && string2 !== "string") {
    return "please enter strings.";
  } else if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

const ans = matchFinder('John Doe','ohn');
console.log(ans);
