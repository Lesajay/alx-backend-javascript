function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const reducer = (acc, items) => acc + items.id;

  const sumIds = students.reduce(reducer, 0);

  return sumIds;
}

export default getStudentIdsSum;
