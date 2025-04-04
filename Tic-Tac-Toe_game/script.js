let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#restart");
let msg = document.querySelector("#msg");
let user0 = true;
let count = 0;

const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const winCheck = () => {
  for (let pattern of patterns) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 !== "" && p1 === p2 && p2 === p3) {
      boxes.forEach((box) => {
        box.disabled = true;
      });
      msg.innerText = `🎉 Player ${p1} wins!`;
      return true;
    }
  }
  return false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (user0) {
      box.innerText = "O";
      user0 = false;
    } else {
      box.innerText = "X";
      user0 = true;
    }
    box.disabled = true;
    if (!winCheck() && count === 9) {
      msg.innerText = "🤝 Game was a Draw!";
    }
  });
});

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  user0 = true;
  msg.innerText = "";
  count = 0;
});
