// Tính số số tự nhiên có 4 chữ số mà không có chữ số 5
function countNumbersWithoutFive() {
  let count = 9; // Số cách chọn chữ số hàng nghìn
  for (let i = 1; i < 4; i++) {
      count *= 9; // Số cách chọn chữ số cho các vị trí còn lại
  }
  return count;
}

// Tính số số tự nhiên có 4 chữ số
function countTotalNumbers() {
  let count = 10; // Số cách chọn chữ số hàng nghìn
  for (let i = 1; i < 4; i++) {
      count *= 10; // Số cách chọn chữ số cho các vị trí còn lại
  }
  return count;
}
// Tính số số tự nhiên có ít nhất một chữ số 5
function countNumbersWithFive() {
  return countTotalNumbers() - countNumbersWithoutFive();
}
// Hiển thị kết quả
const resultElement = document.querySelector('p strong');
resultElement.textContent = countNumbersWithFive();  
