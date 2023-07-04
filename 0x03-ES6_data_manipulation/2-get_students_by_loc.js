function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const result = students.filter((items) => items.location === city);

  return result;
}

export default getStudentsByLocation;
