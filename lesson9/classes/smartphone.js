import Gadget from "./gadget.js";

export default class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    getInfo() {
        console.log(`${this.brand}, ${this.model}, ${this.year}, ${this.operatingSystem}`);
    }
    get operatingSystem() {
        return this._operatingSystem;
    }
    set operatingSystem(operatingSystem) {
        if (operatingSystem === 'IOS' || operatingSystem === 'Android' || operatingSystem === 'HarmonyOS') {
            this._operatingSystem = operatingSystem;
        }
        else {
            console.log("Помилка: недоступна операційна система");
        }

    }

}