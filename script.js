let a = [];
let size = 8;
let totalSolution = [];
let change;
let speedSolve = 500

let checkResult = (x2,y2) => {
    for(let i = 1; i < x2 ;i++)
        if(a[i] == y2 || Math.abs(i-x2) == Math.abs(a[i] - y2) )
            return false;
    return true;
}
 
let Xuat = (size) => {
    let tempResult = [];
    for(let i = 1; i <= size; i++){
        tempResult.push(`${a[i]}${i}`)
    }
    totalSolution.push(tempResult);
}
 
let Try = (i, size) => {
    for(let j = 1; j <= size ; j++){
        if(checkResult(i,j)){
            a[i] = j;
            if(i === size ) {
              Xuat(size);
            }
            Try(i+1,size);
        }
    }
}

let cleanChessBoard = () => {
    for(let x = 1; x <= 8; x++){
        for(let y =1; y <= 8; y++){
            document.getElementById(`${x}${y}`).style.display = "none";
        }
    }
}

let changePositonQueen = () => {
    let checkEnd = 0;

    clearInterval(change)

    change = setInterval(() => {
        cleanChessBoard();

        let presentResult = totalSolution[checkEnd];
        for(let index = 0; index < presentResult.length; index++){
            let coordinate = presentResult[index];
            document.getElementById(`${coordinate[0]}${coordinate[1]}`).style.display = "block";
        }
        checkEnd++;
        console.log(checkEnd)

        if(checkEnd === totalSolution.length){
            clearInterval(change);
        }

    }, speedSolve)
}

let changeContentButton = () => {
    document.getElementById("speed").innerHTML = document.getElementById("myRange").value;
    speedSolve = parseInt(document.getElementById("myRange").value);
    changePositonQueen()
}

window.onload = () => {
    document.getElementById("speed").innerHTML = document.getElementById("myRange").value
    Try(1,size);
}
