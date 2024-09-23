import { krakenHelpers as h } from 'krakenhelpers'


export const consoleHelpers = {

    print:print,
    printScreen: printScreen,
    printScreenAll: printScreenAll
}



function print() {
    return this.printScreen();
}

function printScreen() {
    console.log("----------------------------------");
    console.log(this.properties.length);
    console.log("thing:", this.record_type, this.record_id);
    this.properties.map((property) => {
        property.printScreen("    ");
    });
}

function printScreenAll() {
    console.log("----------------------------------");
    console.log(this.properties.length);
    console.log("thing:", this.record_type, this.record_id);
    this.properties.map((property) => {
        property.printScreenAll("    ");
    });
}