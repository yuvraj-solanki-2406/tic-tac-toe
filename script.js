const boxes = document.querySelectorAll(".box")
const winning_con = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let val = true;
let winner_msg = document.querySelector(".message")
let reset_btn = document.querySelector(".reset_btn")
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (val) {
            box.innerHTML = "O"
            val = false;
        } else {
            box.innerHTML = "X";
            val = true;
        }
        box.disabled = true;
        count++;

        let winner = checkWinner()
        if(count == 9 && !winner) {
            drawMatch()
        } else if(winner) {
            showWinner(winner)
        }
    })
});

const showWinner = (winner) => {
    winner_msg.classList.remove('hide')
    winner_msg.innerText = `Winner is ${winner}`
    console.log(`Winner is ${winner}`)
    boxes.forEach((box) => {
        box.disabled = true
    });
};

const drawMatch = () => {
    winner_msg.classList.remove('hide')
    winner_msg.innerText = `Match Drawn`
    boxes.forEach((box) => {
        box.disabled = true
    });
}

const checkWinner = () => {
    for (let i of winning_con) {
        let val1 = boxes[i[0]].innerText
        let val2 = boxes[i[1]].innerText
        let val3 = boxes[i[2]].innerText

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                return val1;
            }
        }
    }
}

reset_btn.addEventListener("click", () => {
    window.location.reload()
})