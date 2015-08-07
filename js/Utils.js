export default {
  present(obj) {
    return obj && Object.keys(obj).length > 0;
  },

  empty(obj) {
    return !obj || Object.keys(obj).length == 0;
  },

  isPrimitive(obj) {
  return !( (obj instanceof File ) || (obj instanceof Array) || (obj instanceof Object));
  }
}
