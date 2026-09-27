export const students = [
  { name: "Ali", grades: [80, 90] },
  { name: "Sara", grades: [60, 70] },
];
  export default function getNames() { return students.map(s => s.name); }
