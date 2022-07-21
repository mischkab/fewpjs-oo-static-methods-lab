class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^a-z0-9-' ]/gi, "");
  };

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = [];
    let arrayOfWords = string.split(" ");
    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        newString.push( this.capitalize(arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          newString.push(arrayOfWords[n])
        } else {
          newString.push(this.capitalize(arrayOfWords[n]))
        }
      }
    }

    return newString.join(" ");
  }
}