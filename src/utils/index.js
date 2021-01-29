export const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

export const insertItemArr = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
];