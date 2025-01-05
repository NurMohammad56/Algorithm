function arrayReplace(inputArray, elementToReplace, subtractionElem) {
  inputArray.forEach((item, i) => {
    if (item === elementToReplace) {
      inputArray[i] = subtractionElem;
    }
  });
  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);
