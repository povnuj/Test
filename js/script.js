let MasSize = 3;
let Deep = 2;
MasSize--;
let s = 0;
let Point = 0;
let Player1 = [];
let Player2 = [];
let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
function AddArrTomove(Player, a, b, Point) {
    if (Player == 1) {
        Player1.unshift(a + ',' + b + ',' + Point);
    }
    else {
        Player2.unshift(a + ',' + b + ',' + Point);
    }
    Point = 0;
}
function PriorToMove(P, TmpArr, a, b) {
    let P2;

    /*    if (P == 1) {
            P2 = 2;
        }
        else {
            P2 = 1;
        }*/
    switch (P) {
        case 1:
            P2 = 2;
            break
        case 2:
            P2 = 1;
            break
        case 0:
            //   P2 = 1;
            break

    }
    switch (TmpArr) {
        case P:
            s--;
            Point++;
            break
        case P2:
            Point = 0;
            break
        case 0:
            AddArrTomove(P, a, b, Point);
            Point = 0;
            break
    }
    //   console.log(a, b,'s =',s, 'P =', Point);

}

function CheckVariant(a, b, Player, CheckPoint) {

    ///Check ROW 

    s = 0; Point = 0;
    for (let i = b; i <= MasSize; i++) {
        PriorToMove(Player, arr[a][i], a, i);
        s++;

        if (s == CheckPoint) {
            i = MasSize;
        }
        //console.log('s = ',s, CheckPoint);
    }

    s = 0; Point = 0;
    for (let i2 = b; i2 >= 0; i2--) {
        PriorToMove(Player, arr[a][i2], a, i2);
        s++;

        if (s == CheckPoint) {
            i2 = 0;
        }
    }

    ///// check Column

    s = 0; Point = 0;
    for (let i = a; i <= MasSize; i++) {
        PriorToMove(Player, arr[i][b], i, b);
        s++;

        if (s == CheckPoint) {
            i = MasSize;
        }
    }

    s = 0; Point = 0;
    for (let i2 = a; i2 >= 0; i2--) {
        PriorToMove(Player, arr[i2][b], i2, b);
        s++;

        if (s == CheckPoint) {
            i2 = 0;
        }
    }

    // -------------check x1

    if (a == b) {
        s = 0; Point = 0;
        for (let i = a; i <= MasSize; i++) {
            PriorToMove(Player, arr[i][i], i, i);
            s++;

            if (s == CheckPoint) {
                i = MasSize;
            }
        }


        s = 0; Point = 0;
        for (let i = a; i >= 1; i--) {
            PriorToMove(Player, arr[i][i], i, i);
            s++;
            //console.log(i);
            if (s == CheckPoint) {
                i = MasSize;
            }
        }
    }
    ////---------------------Check x2

    let is = MasSize;
    for (let i = 0; i <= MasSize; i++) {
        if (a == i && b == is) {
            let i3 = b; s = 0; Point = 0;
            for (let i2 = a; i2 <= MasSize; i2++) {
                PriorToMove(Player, arr[i2][i3], i2, i3);
                s++;
                i3--;
                //console.log(i2);
                if (s == CheckPoint) {
                    i2 = MasSize;
                }

            }

            i3 = b; s = 0; Point = 0;
            for (let i2 = a; i2 >= 0; i2--) {
                PriorToMove(Player, arr[i2][i3], i2, i3);
                s++;
                i3++;
                //console.log(i2);
                if (s == CheckPoint) {
                    i2 = MasSize;
                }

            }


        }
        is--;
    }

}



function checkArr(a, b, c) {

    if (a == -1) {
        return a;
        // console.log('a = ', a);
    }

    if (b == -1) {
        return checkArr(a - 1, b = MasSize);
        //console.log('a = ', a);
    }
    else {

        if (arr[a][b] == '1') {
            //console.log(a, b);
            CheckVariant(a, b, 1, Deep);
        }
        if (arr[a][b] == '2') {
            //console.log(a, b);
            CheckVariant(a, b, 2, Deep);
        }
        if (arr[a][b] == '0' && c == 1) {
            console.log('P11 = ', a,b);
            EditGrid(a, b, 1, 0);
            
        }
        return checkArr(a, b - 1);

    }

}

function CreateGrid() {
    let XODiv = document.querySelector('.XO');

    for (let i = 0; i <= MasSize; i++) {
        let RowDiv = document.querySelector('.XO');
        let div = document.createElement('div');
        div.className = "Rows" + i + ' format';
        RowDiv.append(div);


        for (let i2 = 0; i2 <= MasSize; i2++) {
            let RowDiv = document.querySelector('.Rows' + i);
            let div = document.createElement('div');
            div.className = "Tab";
            div.id = +i + ',' + i2;
            div.innerHTML = "-";
            RowDiv.append(div);
        }
    }
}

CreateGrid();
function EditGrid(a, b, c, c1) {
    arr[a][b] = c;
    let XODiv = document.getElementById(a + ',' + b);
    XODiv.textContent = c1;
}

function MoveAI() {
    let TmpArr = [], TmpArr2 = [], TmpArr3 = [];

    for (let i = 0; i <= Player1.length - 1; i++) {
        TmpArr = Player1[i].split(',');

        if (TmpArr2.length == 0) TmpArr2 = TmpArr;
        if (TmpArr[2] > TmpArr2[2]) TmpArr2 = TmpArr;
    }
    for (let i = 0; i <= Player2.length - 1; i++) {
        TmpArr = Player2[i].split(',');

        if (TmpArr3.length == 0) TmpArr3 = TmpArr;
        if (TmpArr[2] > TmpArr3[2]) TmpArr3 = TmpArr;
    }
 
    if (TmpArr2[2] < TmpArr3[2]) {
        EditGrid(TmpArr3[0], TmpArr3[1], 1, 0);
    }
 
    if(Player1.length == 0){
        if (arr[MasSize / 2][MasSize / 2] == 0) {
            EditGrid(MasSize / 2, MasSize / 2, 1, 0);
            console.log(TmpArr2);
        }
        else {
            checkArr(MasSize, MasSize, 1);
        }
}
 //   Player1.length = 0;
 //   Player2.length = 0;
    // console.log(arr);
}

function MovePlayer(id) {
    let a = 123, b = 123;
    id.split(',').map(simbol => { a == 123 ? a = simbol : b = simbol })
    EditGrid(a, b, 2, 'X');
    checkArr(MasSize, MasSize, 0);
    MoveAI();
    console.log('p1-', Player1);
    console.log('p2-', Player2);
  
}

const ClickByid = document.querySelectorAll('.Tab')
Array.from(ClickByid).forEach(el => {
    el.addEventListener('click', function (event) {

        MovePlayer(event.target.id);
        //console.log(Object.keys(ResultStr.value))
    })
})

