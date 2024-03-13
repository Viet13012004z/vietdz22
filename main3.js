const totalBalls = 6;
const numBoxes = 3;
function countValidSplits(ballsLeft, boxIndex, currentSplit) {
  if (boxIndex === numBoxes) {
    // Đã chia hết bi cho tất cả các hộp
    if (ballsLeft === 0) {
      // Hiển thị kết quả
      const resultElement = document.getElementById("result");
      resultElement.innerHTML += currentSplit + "<br>";
      return 1;
    }
    return 0;
  }
  let numValidSplits = 0;
  for (let numBallsInBox = 0; numBallsInBox <= ballsLeft; numBallsInBox++) {
    const nextBallsLeft = ballsLeft - numBallsInBox;
    const nextSplit = currentSplit + `Hộp ${boxIndex + 1}: ${numBallsInBox} `;
    numValidSplits += countValidSplits(nextBallsLeft, boxIndex + 1, nextSplit);
  }
  return numValidSplits;
}
const numValidSplits = countValidSplits(totalBalls, 0, "");
console.log(`Số cách chia bi hợp lệ: ${numValidSplits}`);
