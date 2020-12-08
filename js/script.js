let MasSize = 3;
let Deep = 2;
MasSize--;
let s = 0, df = 0;
let Point = 0;
let Player1 = [[]];
let Player2 = [[]];
let arr = [];
    
function AddArrTomove(Player, a, b, Point, operation) {
    
    if (Player == 1) {
        Player1[Player1.length] = [a, b, Point, operation];
        
        //df++;
        //Player1.unshift(a + ',' + b + ',' + Point+','+operation);
        
        }
    else {
        
         Player2[Player2.length] = [a, b, Point, operation];
        
        //Player2.unshift(a + ',' + b + ',' + Point+','+operation);
    }
   // if(Player1[0].length == 0) Player1.slice(0, 1);
   // if(Player2[0].length == 0) Player2.slice(0, 1);
    Point = 0;

}
let count = -1;
function PriorToMove(P, TmpArr, a, b, o) {
    let P2;

    switch (P) {
        case 1:
            P2 = 2;
            break
        case 2:
            P2 = 1;
            break
        case 0:
            P2 = 1;
            break

    }
    //console.log('tmp',TmpArr);
    switch (TmpArr) {
        case P:
            count++;
            //if(count > MasSize) alert("WIN PLAYER:"+P);
           // console.log(count);
            break
        case P2:
            
            count = -1;
            break
        case 0:
            count++;
           // console.log(count);
            AddArrTomove(P, a, b, count, o);
            count = -1;
            //alert("yep");
            break
    }
}



function CheckVariant(a, b, Player, CheckPoint) {

}


function checkVariants(player, a, b, variants, deeps) {
    // -------------- Check col 
    //---------------- UP
   

    if (variants == 0) {
        
        if(deeps == Deep) count = -1;
        if (deeps <= 0 || a <= 0 || arr[a][b] == 0) {
            console.log( 'u',a, b, player);
            variants++;
            deeps = Deep;
           
            PriorToMove(player, arr[a][b], a, b, 0);
            a = chA; b = chB;
        }
        else {
            console.log( 'u',a, b, player);
            PriorToMove(player, arr[a][b], a, b, 0);
            return checkVariants(player, a - 1, b, variants, deeps - 1);
        }
    }
    /////----------------Down

    if (variants == 1) {
       
        if(deeps == Deep) count = -1;
    
        if (deeps <= 0 || a >= MasSize || arr[a][b] == 0) {
            console.log( 'd',a, b, player);
            variants++;
            deeps = Deep;
            PriorToMove(player, arr[a][b], a, b, 0);
            a = chA; b = chB;
        }
        else {
            console.log( 'd',a, b, player);
            PriorToMove(player, arr[a][b], a, b, 0);
            return checkVariants(player, a + 1, b, variants, deeps - 1);
        }
    }
    // -------------- Check row 
    //---------------- Left
    if (variants == 2) {
        if(deeps == Deep) count = -1;
        if (deeps <= 0 || b <= 0 || arr[a][b] == 0) {
            variants++;
            deeps = Deep;
            PriorToMove(player, arr[a][b], a, b, 1);
            a = chA; b = chB;
        }
        else {
            PriorToMove(player, arr[a][b], a, b, 1);
            return checkVariants(player, a, b - 1, variants, deeps - 1);
        }
    }
    /////----------------Right

    if (variants == 3) {
        if(deeps == Deep) count = -1;
        if (deeps <= 0 || b >= MasSize || arr[a][b] == 0) {
            variants++;
            deeps = Deep;
            PriorToMove(player, arr[a][b], a, b, 1);
            a = chA; b = chB;
        }
        else {
            PriorToMove(player, arr[a][b], a, b, 1);
            return checkVariants(player, a, b + 1, variants, deeps - 1);
        }
    }
// -------------- Check \ 
//---------------- Right

    if (variants == 4) {
    //    console.log(deeps)
      //  console.log(a,b)
        if(deeps == Deep) count = -1;
        if (deeps <= 0 || a >= MasSize || arr[a][b] == 0) {
            variants++;
            deeps = Deep;
             PriorToMove(player, arr[a][b], a, b, 2);
            a = chA; b = chB;
        }
        else {
             PriorToMove(player, arr[a][b], a, b, 2);
            return checkVariants(player, a + 1, b + 1, variants, deeps - 1);
        }
    }
    
/////----------------Left

    if (variants == 5) {
        //console.log(a, b)
        if(deeps == Deep) count = -1;
        if (deeps <= 0 || a <= 0  || arr[a][b]  == 0) {
            variants++;
            deeps = Deep;
             PriorToMove(player, arr[a][b], a, b, 2);
            a = chA; b = chB;
        }
        else {
             PriorToMove(player, arr[a][b], a, b, 2);
            return checkVariants(player, a - 1, b - 1, variants, deeps - 1);
        }
        
    }

// -------------- Check / 
//---------------- Right
    if (variants == 6 && chA + chB == MasSize) {
        if(deeps == Deep) count = -1;
        if (deeps <= 0 || b <= 0 || a >= MasSize || arr[a][b] == 0) {
            variants++;
            deeps = Deep;
            PriorToMove(player, arr[a][b], a, b, 3);
            a = chA; b = chB;
        }
        else {
            PriorToMove(player, arr[a][b], a, b, 3);
            return checkVariants(player, a + 1, b - 1, variants, deeps - 1);
        }
    }
    /////----------------Left

    if (variants == 7 && chA + chB == MasSize) {
        if(deeps == Deep) count = -1;
       
        if (deeps <= 0 || b >= MasSize || a <= 0 || arr[a][b] == 0) {
            variants++;
            deeps = Deep;
            PriorToMove(player, arr[a][b], a, b, 3);
            a = chA; b = chB;
        }
        else {
            PriorToMove(player, arr[a][b], a, b, 3);
            return checkVariants(player, a - 1, b + 1, variants, deeps - 1);
        }
    }

    return 0;
}

let chA, chB;

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
            chA = a; chB = b;
            checkVariants(1, a, b, 0, Deep);
        }
        if (arr[a][b] == '2') {
            chA = a; chB = b;
            checkVariants(2, a, b, 0, Deep);
        }
        if (arr[a][b] == '0' && c == 1) {
            //            console.log('P11 = ', a,b);
            editGrid(a, b, 1, 0);
            c = 0;

        }


        return checkArr(a, b - 1);

    }

}
//checkArr(2, 0, 0);
//console.log(Player1)
/// --------Create HTML grid and matrix arr
function CreateGrid() {
    let XODiv = document.querySelector('.XO');

    for (let i = 0; i <= MasSize; i++) {
        let RowDiv = document.querySelector('.XO');
        let div = document.createElement('div');
        div.className = "Rows" + i + ' format';
        RowDiv.append(div);
        arr[i] = [];


        for (let i2 = 0; i2 <= MasSize; i2++) {
            let RowDiv = document.querySelector('.Rows' + i);
            let div = document.createElement('div');

            switch(i){
                case 0:
                    if(i2 == 0) div.className = "Tab borderTop borderL";
                    else if(i2 == MasSize) div.className = "Tab borderTop borderR";
                    else div.className = "Tab borderTop";
                    break
                case MasSize:
                    if(i2 == MasSize) div.className = "Tab borderBot borderR";
                    else if(i2 == 0) div.className = "Tab borderBot borderL";
                    else div.className = "Tab borderBot";
                    break
                default:
                    if(i2 == MasSize) div.className = "Tab borderR";
                    else if(i2 == 0) div.className = "Tab  borderL";
                    else div.className = "Tab ";
            }
           

            div.id = +i + ',' + i2;
            RowDiv.append(div);
            arr[i][i2] = 0;
        }
    }
}

CreateGrid();



function editGrid(a, b, c, c1) {
    arr[a][b] = c;
    let XODiv = document.getElementById(a + ',' + b);
    XODiv.textContent = c1;
}
function verifyPlayersMove(player, p, o){
    let tmpP = [[]], tmpP2 = [[]];
    
    if(player.length != 0){
        for(let i = 1; i <= player.length -1  ; i++){
            if(o == 1 || o == 2 ){
                if(tmpP[0].length == 0) tmpP[0] = player[i];
                if(tmpP[0][2] < player[i][2]) tmpP[0] = player[i];
               // console.log('tmp',tmpP[0])
            }
            else{
                for(let j = i + 1; j <= player.length - 1 ; j++){
                    
                    if(player[i].join('') == player[j].join('')) tmpP[0] = player[j];
                }
                
            }
        }
    }
    console.log('pl',p, tmpP[0][2]);
    if(o == 1) return tmpP[0][2];
    if(o == 2) {
        editGrid(tmpP[0][0], tmpP[0][1], 1, 0);
    return tmpP;
    }
    if(tmpP[0].length != 0) AddArrTomove(p, tmpP[0][0], tmpP[0][1], tmpP[0][2]++, tmpP[0][3]);
    
    //return ;
    
}

function MoveAI() {
    //console.log("o",Player1);
    verifyPlayersMove(Player1, 1, 0);
    verifyPlayersMove(Player2, 2, 0);
console.log("==",verifyPlayersMove(Player2, 2, 1), verifyPlayersMove(Player1, 1, 1));
if(verifyPlayersMove(Player1, 1, 1) == undefined){
    if(arr[MasSize / 2][MasSize / 2] == 0) editGrid(MasSize / 2, MasSize / 2, 1, 0);
    else verifyPlayersMove(Player2, 2, 2);
}   
    if(verifyPlayersMove(Player2, 2, 1) == verifyPlayersMove(Player1, 1, 1)){
        verifyPlayersMove(Player1, 1, 2);
   }

    if(verifyPlayersMove(Player2, 2, 1) > verifyPlayersMove(Player1, 1, 1)){
         verifyPlayersMove(Player2, 2, 2);
    }
  
}
function MovePlayer(id) {
    let a = 123, b = 123;
    id.split(',').map(simbol => { a == 123 ? a = simbol : b = simbol })
    editGrid(a, b, 2, 'X');
    checkArr(MasSize, MasSize, 0);
    console.log('p1-', Player1);
    console.log('p2-', Player2);
    console.log('arr-', arr);
    MoveAI();
    Player1 = [[]];
    Player2 = [[]];

}

const ClickByid = document.querySelectorAll('.Tab')
Array.from(ClickByid).forEach(el => {
    el.addEventListener('click', function (event) {

        MovePlayer(event.target.id);
        //console.log(Object.keys(ResultStr.value))
    })
})

