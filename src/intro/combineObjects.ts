/**
 * Combines the key/value pairs from two objects into one
 * NOTE: Assumes no duplicate keys
 * @param obj1
 * @param obj2
 */
export default function combineObjects(obj1: Object, obj2: Object) {
  return { ...obj1, ...obj2 };
}
