export const makeSeq = len => {
  return new Array(len)
    .fill(1)
    .map((_, id, arr) => {
      const minarray = arr.slice(id);
      const value = minarray.reduce((acc, curr) => acc + curr);
      return value;
    })
    .reverse();
};

export const randomIntFromInterval = (
  min,
  max // min and max included
) => Math.floor(Math.random() * (max - min + 1) + min);
