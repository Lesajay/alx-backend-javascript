export default function createIteratorObject(report) {
  const iteratorObjx = [];
  for (const employees of Object.values(report.allEmployees)) {
    iteratorObjx.push(...employees);
  }
  return iteratorObjx;
}
