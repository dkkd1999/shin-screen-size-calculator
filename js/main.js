hRatio = document.getElementById("hRatio").value;
wRatio = document.getElementById("wRatio").value;

selectRatio = document.getElementById("selectRatio");

hMm = document.getElementById("hMm");
hInch = document.getElementById("hInch");
wMm = document.getElementById("wMm");
wInch = document.getElementById("wInch");
dMm = document.getElementById("dMm");
dInch = document.getElementById("dInch");

dpi = document.getElementById("dpi");
function hInchCalc() {
    if (hInch.value == "") {
        return;
    }
    hMm.value = hInch.value * 25.4;

    hCalc();
}
function hMmCalc() {
    if (hMm.value == "") {
        return;
    }
    hInch.value = hMm.value / 25.4;

    hCalc();
}

function wInchCalc() {
    if (wInch.value == "") {
        return;
    }
    wMm.value = wInch.value * 25.4;

    wCalc();
}
function wMmCalc() {
    if (wMm.value == "") {
        return;
    }
    wInch.value = wMm.value / 25.4;

    wCalc();
}

function dInchCalc() {
    if (dInch.value == "") {
        return;
    }
    dMm.value = dInch.value * 25.4;

    dCalc();
}
function dMmCalc() {
    if (dMm.value == "") {
        return;
    }
    dInch.value = dMm.value / 25.4;

    dCalc();
}

function hCalc() {
    dRatio = Math.pow(hRatio * hRatio + wRatio * wRatio, 0.5);
    height = hMm.value;
    width = height / hRatio * wRatio;
    diagonal = width / wRatio * dRatio;

    wMm.value = width;
    wInch.value = width / 25.4;
    dMm.value = diagonal;
    dInch.value = diagonal / 25.4;

    printDPI();
}
function wCalc() {
    dRatio = Math.pow(hRatio * hRatio + wRatio * wRatio, 0.5);
    width = wMm.value;
    height = width / wRatio * hRatio;
    diagonal = width / wRatio * dRatio;

    hMm.value = height;
    hInch.value = height / 25.4;
    dMm.value = diagonal;
    dInch.value = diagonal / 25.4;

    printDPI();
}
function dCalc() {
    dRatio = Math.pow(hRatio * hRatio + wRatio * wRatio, 0.5);
    diagonal = dMm.value;
    height = diagonal / dRatio * hRatio;
    width = diagonal / dRatio * wRatio;

    hMm.value = height;
    hInch.value = height / 25.4;
    wMm.value = width;
    wInch.value = width / 25.4;

    printDPI();
}

function arbitraryRatio() {
    hRatio = document.getElementById("hRatio").value;
    wRatio = document.getElementById("wRatio").value;

    dInchCalc();
}

function printChange() {
    n = selectRatio.selectedIndex;
    hRatio = selectRatio[n].attributes['h'].value;
    document.getElementById("hRatio").value = hRatio;
    wRatio = selectRatio[n].attributes['w'].value;
    document.getElementById("wRatio").value = wRatio;

    dInchCalc();
}
function printDPI() {
    dpi.innerHTML = (hRatio / (height / 25.4)) + "dpi" + "<br>" + (height / hRatio) + "mm";
}