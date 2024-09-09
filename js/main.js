let outer = document.getElementById("outer");
let outer2 = document.getElementById("outer2");
let click = document.getElementById("button");

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
    let zin= document.getElementById("zin").value;
    let zir_s = document.getElementById("zir-s").value;
    let zir_o = document.getElementById("zir-o").value;
    let bor = document.getElementById("bor").value;
    let tita = document.getElementById("tita").value;
    let silli = document.getElementById("silli").value;
    let mulli = document.getElementById("mulli").value;
    let kao = document.getElementById("kao").value;

    let arr = [silica, quartz, po_feld, so_feld, ca_feld, ca_ca, so_ca, po_ca, alu, bar, dolo, cole, zin, zir_s, zir_o, bor, tita, silli, mulli, kao];
    let arr2 = [1720, 1720, 1200, 1150, 1550, 825, 851, 891, 2072, 1923, 1170, 1050, 1800, 2550, 2715, 850, 1870, 1550, 1810, 1500];
    
    let sum = 0;
    let sum2 = 0;
    for (let i=0; i<=20; i++) {
        if (!Number(arr[i])) {
            continue;
        } else {
            sum += Number(arr[i]) * arr2[i];
            sum2 += Number(arr[i]);
        }
    }
    if (sum2 <= 0) {
        alert ("Please make sure that you have entered number > 0 .");
        return;
    }
    let sum3 = parseInt(sum / sum2);
    return outer.innerText = `${sum3} \u00B0c`, outer2.innerText = sum2 + ' kg';
});


