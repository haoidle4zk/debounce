// Trả về promise delay theo mili giây
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
