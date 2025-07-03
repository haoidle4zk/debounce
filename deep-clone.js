// Deep clone một object (sao chép sâu)
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
