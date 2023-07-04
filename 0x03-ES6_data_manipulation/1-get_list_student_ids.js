function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const ids = students.map((items) => items.id);

  return ids;
}

export default getListStudentIds;
