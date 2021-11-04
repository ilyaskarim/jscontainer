export const arrayMove = (array: Array<any>, from: number, to: number) => {
  const fromItem = array[from];
  const toItem = array[to];

  array[to] = fromItem;
  array[from] = toItem;

  return array;
};
