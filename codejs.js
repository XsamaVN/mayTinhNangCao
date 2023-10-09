function nhap(kt){
    document.getElementById('manhinh').value += kt;
}
function bang() {
    document.getElementById('manhinh').value = eval(document.getElementById('manhinh').value);
}