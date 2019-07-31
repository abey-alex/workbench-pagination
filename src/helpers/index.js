/**
 * Generate random number
 *
 * @param {*} max
 */
export const randomNumber = max => Math.floor(Math.random() * max) + 1;

/**
 * Generate random string
 *
 * @param {*} length
 */
export const randomString = length => {
  let str = "";
  while (str.length < length)
    str += Math.random()
      .toString(36)
      .substr(2, length);
  return str.substr(0, length);
};

export const MAX_ITEMS = 2000;
export const MIN_ITEMS = 25;

/**
 * Load more items
 *
 * @param {*} param0
 */
export const loadMoreItems = ({ startIndex, data, setData }) => {
  // if we exceeded scroll limit of 2000 rows, ignore
  if (data.length > MAX_ITEMS) return null;

  return new Promise(resolve =>
    setTimeout(() => {
      // Modify data rather than appending
      for (let index = startIndex; index <= startIndex + MIN_ITEMS; index++) {
        data[index] = {
          id: index + 1,
          first_name: randomString(8),
          last_name: randomString(15),
          count: randomNumber(10000)
        };
      }

      setData(data);
      resolve();
    }, 10)
  );
};
