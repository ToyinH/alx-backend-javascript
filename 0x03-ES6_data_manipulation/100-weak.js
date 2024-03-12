// 100-weak.js
const queryCounts = new WeakMap();

export const weakMap = queryCounts;

export function queryAPI(endpoint) {
  const count = queryCounts.get(endpoint) || 0;
  queryCounts.set(endpoint, count + 1);

  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
