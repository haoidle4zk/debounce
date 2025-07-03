// Lấy params từ URL dưới dạng object
function getUrlParams(url) {
  const params = new URL(url).searchParams;
  return Object.fromEntries(params.entries());
}
