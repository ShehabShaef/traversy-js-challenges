function titleCase(str) {
    // split the string to array so it will be easy to edit
    const arrTitle = str.split(" ");
    // new array that save the new uppercased title
    const newTitle = [];
    // rotate over the array change every word of the title
   for (let i = 0; i < arrTitle.length; i++){
       // first uppercase the letter
       const uppercase = arrTitle[i][0].toUpperCase();
       // replace the lower letter with uppercased one
       const newUpper = arrTitle[i].replace(arrTitle[i][0], uppercase);
       // push the new uppercased title to the array
       newTitle.push(newUpper);
   }
    //return the new uppercased title
    return newTitle.join(" ");
}

module.exports = titleCase;
