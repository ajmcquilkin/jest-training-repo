/**
 * Combines the values from two arrays into one new array
 * @param arr1
 * @param arr2
 */
export default function combineArrays(arr1: Array<any>, arr2: Array<any>) {
  return [...arr1, ...arr2];
}
