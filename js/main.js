let outer = document.getElementById("outer");
let outer2 = document.getElementById("outer2");
let click = document.getElementById("click");

click.addEventListener( "click", function() { 
    // Get the value of the input field and store it in a variable called 'inputValue'

    let silica = document.getElementById("silica").value;
    let quartz = document.getElementById("quartz").value;
    let po_feld = document.getElementById("po-feld").value;
    let so_feld = document.getElementById("so-feld").value;
    let ca_feld = document.getElementById("ca-feld").value;
    let ca_ca = document.getElementById("ca-ca").value;
    let so_ca = document.getElementById("so-ca").value;
    let po_ca = document.getElementById("po-ca").value;
    let alu = document.getElementById("alu").value;
    let bar = document.getElementById("bar").value;
    let dolo = document.getElementById("dolo").value;
    let cole = document.getElementById("cole").value;
    let zin = document.getElementById("zin").value;
    let zir = document.getElementById("zir").value;
    let bor = document.getElementById("bor").value;
    let tita = document.getElementById("tita").value;
    let silli = document.getElementById("silli").value;
    let mulli = document.getElementById("mulli").value;
    let kao = document.getElementById("kao").value;

    let arr = [silica, quartz, po_feld, so_feld, ca_feld, ca_ca, so_ca, po_ca, alu, bar, dolo, cole, zin, zir, bor, tita, silli, mulli, kao];
    let arr2 = [1710, 1710, 1300, 1300, 1500, 1300, 1300, 1300, 2000, 1360, 850, 2000, 1975, 1855, 850, 1750, 1550, 1810, 1500];
    
    let sum = 0;
    let sum2 = 0;
    for (let i=0; i<17; i++) {
        if (!Number(arr[i])) {
            continue;
        } else {
            sum += Number(arr[i]) * arr2[i];
            sum2 += Number(arr[i]);
        }
    }
    if (sum2 <= 0) {
        alert ("Please make sure that you have entered number > 0 .");
        return outer.innerText = 0 + ' c', outer2.innerText = 0 + ' kg';;
    }
    return outer.innerText = parseInt(sum / sum2) + ' c', outer2.innerText = sum2 + ' kg';
});



