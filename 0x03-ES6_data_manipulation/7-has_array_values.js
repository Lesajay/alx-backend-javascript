function hasValuesFromArray(set, array) {
  const checkA = array.every((item) => set.has(item));
  return checkA;
}

export default hasValuesFromArray;
