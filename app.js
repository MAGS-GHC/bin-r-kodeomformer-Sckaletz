let bintoiparraypart1 = 0;
let bintoiparraypart2 = 0;
let bintoiparraypart3 = 0;
let bintoiparraypart4 = 0;

function bintoip() {
    let binarytoipvalue = document.getElementById("binarytoip").value;
    const binarytoipvaluesplit = binarytoipvalue.split(".");
    const binarytoipvaluesplitpart1 = binarytoipvaluesplit[0].split("");
    const binarytoipvaluesplitpart2 = binarytoipvaluesplit[1].split("");
    const binarytoipvaluesplitpart3 = binarytoipvaluesplit[2].split("");
    const binarytoipvaluesplitpart4 = binarytoipvaluesplit[3].split("");
    
    // Part 1
    if (parseInt(binarytoipvaluesplitpart1[0,0]) == 1) {
        bintoiparraypart1 += 128;
    } 
    if (parseInt(binarytoipvaluesplitpart1[0,1]) == 1) {
        bintoiparraypart1 += 64;
    }
    if (parseInt(binarytoipvaluesplitpart1[0,2]) == 1) {
        bintoiparraypart1 += 32;
    }
    if (parseInt(binarytoipvaluesplitpart1[0,3]) == 1) {
        bintoiparraypart1 += 16;
    }
    if (parseInt(binarytoipvaluesplitpart1[0,4]) == 1) {
        bintoiparraypart1 += 8;
    }
    if (parseInt(binarytoipvaluesplitpart1[0,5]) == 1) {
        bintoiparraypart1 += 4;
    }
    if (parseInt(binarytoipvaluesplitpart1[0,6]) == 1) {
        bintoiparraypart1 += 2;
    }
    if (parseInt(binarytoipvaluesplitpart1[0,7]) == 1) {
        bintoiparraypart1 += 1;
    }

    // Part 2
    if (parseInt(binarytoipvaluesplitpart2[0,0]) == 1) {
        bintoiparraypart2 += 128;
    } 
    if (parseInt(binarytoipvaluesplitpart2[0,1]) == 1) {
        bintoiparraypart2 += 64;
    }
    if (parseInt(binarytoipvaluesplitpart2[0,2]) == 1) {
        bintoiparraypart2 += 32;
    }
    if (parseInt(binarytoipvaluesplitpart2[0,3]) == 1) {
        bintoiparraypart2 += 16;
    }
    if (parseInt(binarytoipvaluesplitpart2[0,4]) == 1) {
        bintoiparraypart2 += 8;
    }
    if (parseInt(binarytoipvaluesplitpart2[0,5]) == 1) {
        bintoiparraypart2 += 4;
    }
    if (parseInt(binarytoipvaluesplitpart2[0,6]) == 1) {
        bintoiparraypart2 += 2;
    }
    if (parseInt(binarytoipvaluesplitpart2[0,7]) == 1) {
        bintoiparraypart2 += 1;
    }

    // Part 3
    if (parseInt(binarytoipvaluesplitpart3[0,0]) == 1) {
        bintoiparraypart3 += 128;
    } 
    if (parseInt(binarytoipvaluesplitpart3[0,1]) == 1) {
        bintoiparraypart3 += 64;
    }
    if (parseInt(binarytoipvaluesplitpart3[0,2]) == 1) {
        bintoiparraypart3 += 32;
    }
    if (parseInt(binarytoipvaluesplitpart3[0,3]) == 1) {
        bintoiparraypart3 += 16;
    }
    if (parseInt(binarytoipvaluesplitpart3[0,4]) == 1) {
        bintoiparraypart3 += 8;
    }
    if (parseInt(binarytoipvaluesplitpart3[0,5]) == 1) {
        bintoiparraypart3 += 4;
    }
    if (parseInt(binarytoipvaluesplitpart3[0,6]) == 1) {
        bintoiparraypart3 += 2;
    }
    if (parseInt(binarytoipvaluesplitpart3[0,7]) == 1) {
        bintoiparraypart3 += 1;
    }

    // Part 4
    if (parseInt(binarytoipvaluesplitpart4[0,0]) == 1) {
        bintoiparraypart4 += 128;
    } 
    if (parseInt(binarytoipvaluesplitpart4[0,1]) == 1) {
        bintoiparraypart4 += 64;
    }
    if (parseInt(binarytoipvaluesplitpart4[0,2]) == 1) {
        bintoiparraypart4 += 32;
    }
    if (parseInt(binarytoipvaluesplitpart4[0,3]) == 1) {
        bintoiparraypart4 += 16;
    }
    if (parseInt(binarytoipvaluesplitpart4[0,4]) == 1) {
        bintoiparraypart4 += 8;
    }
    if (parseInt(binarytoipvaluesplitpart4[0,5]) == 1) {
        bintoiparraypart4 += 4;
    }
    if (parseInt(binarytoipvaluesplitpart4[0,6]) == 1) {
        bintoiparraypart4 += 2;
    }
    if (parseInt(binarytoipvaluesplitpart4[0,7]) == 1) {
        bintoiparraypart4 += 1;
    }
    
    alert("The IP is: " + bintoiparraypart1 + "." + bintoiparraypart2 + "." + bintoiparraypart3 + "." + bintoiparraypart4);
    bintoiparraypart1 = 0;
    bintoiparraypart2 = 0;
    bintoiparraypart3 = 0;
    bintoiparraypart4 = 0;
}

let iptobinvaluesplit = [];
let iptobinarraypart1 = '';
let iptobinarraypart2 = '';
let iptobinarraypart3 = '';
let iptobinarraypart4 = '';

function iptobin() {
    let iptobinvalue = document.getElementById("iptobinary").value;
    let iptobinvaluesplit = iptobinvalue.split(".");
    let iptobinvaluesplitpart1 = parseInt(iptobinvaluesplit[0]);
    let iptobinvaluesplitpart2 = parseInt(iptobinvaluesplit[1]);
    let iptobinvaluesplitpart3 = parseInt(iptobinvaluesplit[2]);
    let iptobinvaluesplitpart4 = parseInt(iptobinvaluesplit[3]);
    
    // Part 1
    if (parseInt(iptobinvaluesplitpart1) >= 128){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 128;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 64){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 64;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 32){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 32;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 16){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 16;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 8){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 8;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 4){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 4;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 2){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 2;
    } else {
        iptobinarraypart1 += '0';
    }
    if (parseInt(iptobinvaluesplitpart1) >= 1){
        iptobinarraypart1 += '1';
        iptobinvaluesplitpart1 -= 4;
    } else {
        iptobinarraypart1 += '0';
    }

    // Part 2
    if (parseInt(iptobinvaluesplitpart2) >= 128){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 128;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 64){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 64;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 32){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 32;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 16){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 16;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 8){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 8;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 4){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 4;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 2){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 2;
    } else {
        iptobinarraypart2 += '0';
    }
    if (parseInt(iptobinvaluesplitpart2) >= 1){
        iptobinarraypart2 += '1';
        iptobinvaluesplitpart2 -= 4;
    } else {
        iptobinarraypart2 += '0';
    }

    // Part 3
    if (parseInt(iptobinvaluesplitpart3) >= 128){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 128;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 64){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 64;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 32){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 32;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 16){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 16;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 8){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 8;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 4){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 4;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 2){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 2;
    } else {
        iptobinarraypart3 += '0';
    }
    if (parseInt(iptobinvaluesplitpart3) >= 1){
        iptobinarraypart3 += '1';
        iptobinvaluesplitpart3 -= 4;
    } else {
        iptobinarraypart3 += '0';
    }

    // Part 4
    if (parseInt(iptobinvaluesplitpart4) >= 128){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 128;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 64){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 64;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 32){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 32;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 16){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 16;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 8){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 8;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 4){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 4;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 2){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 2;
    } else {
        iptobinarraypart4 += '0';
    }
    if (parseInt(iptobinvaluesplitpart4) >= 1){
        iptobinarraypart4 += '1';
        iptobinvaluesplitpart4 -= 4;
    } else {
        iptobinarraypart4 += '0';
    }

    alert("The Binary is: " + (iptobinarraypart1 + "." + iptobinarraypart2 + "." + iptobinarraypart3 + "." + iptobinarraypart4));
    iptobinarraypart1 = '';
    iptobinarraypart2 = '';
    iptobinarraypart3 = '';
    iptobinarraypart4 = '';
}