var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'licht knopje';
document.body.appendChild(btn);

// schijf hier tussen je code
var x = 0;
btn.onclick = lightaan
function lightaan(){
if (x == 0) {
    console.log("licht staat aan");
    document.body.style.backgroundColor = "yellow";
    btn.innerHTML = 'licht knopje staat aan';
    x = 1
} else {
    console.log("licht staat uit");
    document.body.style.backgroundColor = "black";
    btn.innerHTML = 'licht knopje staat uit';
    x = 0
}

}
// schijf hier tussen je code