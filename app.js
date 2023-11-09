const binaryNumbers = [128, 64, 32, 16, 8, 4, 2, 1];

// Funktion til at beregne IP ud fra binært tal
function bintoip() {
    let binaryToIP = 0; // IP værdi mens den kører gennem loopet, som gemmes som en int
    let binaryToIPArray = []; // Samling af endelige IP dele efter de bliver beregnet ovenfor
    let binaryToIPValue = document.getElementById("binarytoip").value; // Værdien fra input feltet
    let validBinary = /^[01.]+$/.test(binaryToIPValue); // Input værdien tjekkes for lovlige tal
    const binaryToIPValueSplit = binaryToIPValue.split("."); // Det binære tal deles op, hvor der er punktummer.
    if (validBinary) {
        for (part in binaryToIPValueSplit) { // Hver del af den binære kode loopes nu igennem (eks. 11000100)
            let binaryArrayPart = binaryToIPValueSplit[part]; 
            for (index in binaryArrayPart) { // Hvert tal i delen loopes nu igennem (eks. 1)
                if (Number(binaryArrayPart[index]) === 1) { // Hvis tallet er 1....
                    binaryToIP += binaryNumbers[index]; // ....tillægges værdien for samme index i vores binaryNumbers (eks. 128 for første tal)
                }
            }
            binaryToIPArray.push(binaryToIP); // Her pushes den endelige værdi for den binære talgruppe til vores array
            binaryToIP = 0; // Der resettes og næste talgruppe køres igennem
        }
        alert(`The IP for the binary value:\n${binaryToIPValue}\nis:\n${binaryToIPArray[0]}.${binaryToIPArray[1]}.${binaryToIPArray[2]}.${binaryToIPArray[3]}`); // Alert med endelig IP
    } else {
        alert("Use only numbers 0-1 and '.'"); // Fejl hvis det binære tal eks. indeholder 2, 3 osv.
    }
    document.getElementById("binarytoip").value = ""; // Clear input feltet
}

// Funktion til at beregne binær talgruppe ud fra IP
function iptobin() {
    let ipToBinary = ""; // Binær talgruppe mens den kører gennem loopet, som gemmes som en string
    let ipToBinaryArray = []; // Samling af endelige binære talgrupper efter de er blevet samlet ovenfor
    let ipToBinaryValue = document.getElementById("iptobinary").value; // Værdien fra input feltet
    let validIP = /^[0123456789.]+$/.test(ipToBinaryValue); // Input værdien tjekkes for lovlige tal
    const ipToBinaryValueSplit = ipToBinaryValue.split("."); // IP deles op, hvor der er punktummer
    if (validIP) {
        for (part in ipToBinaryValueSplit) { // Hver del af IP'en loopes nu igennem (eks. 192)
            let currentNumber = Number(ipToBinaryValueSplit[part]); // Tallet konverteres til en int
            for (i in binaryNumbers) { 
                if (currentNumber >= binaryNumbers[i]) { // Tallet tjekkes i henhold til binaryNumbers (eks. 128)
                    currentNumber -= binaryNumbers[i]; // Tallet trækkes fra
                    ipToBinary += "1"; // Hvis tallet var stort nok til at kunne fratrækkes tallet fra binaryNumbers tildeles en string 1
                } else {
                    ipToBinary += "0"; // Ellers tildeles string 0
                }
            }
            ipToBinaryArray.push(ipToBinary); // Her pushes den endelige binære værdi for IP tallet til vores array
            ipToBinary = ""; // Der resettes og næste tal i IP'en køres igennem
        }
        alert(`The Binary number for the IP:\n${ipToBinaryValue}\nis:\n${ipToBinaryArray[0]}.${ipToBinaryArray[1]}.${ipToBinaryArray[2]}.${ipToBinaryArray[3]}`); // Alert med endelige binære talgruppe
    } else {
        alert("Use only numbers 0-9 and '.'"); // Fejl hvis IP'en indeholder eksempelvis bogstaver
    }
    document.getElementById("iptobinary").value = ""; // Clear input feltet
}