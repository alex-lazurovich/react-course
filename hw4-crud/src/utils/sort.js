const sortNumbers = (key) => (a, b) => a[key] - b[key];
const sortStrings = (key) => (a, b) => {
  const nameA = a[key].toUpperCase();
  const nameB = b[[key]].toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
const sortDates = (key) => (a, b) => new Date(a[key]) - new Date(b[key]);

export { sortDates, sortNumbers, sortStrings };
