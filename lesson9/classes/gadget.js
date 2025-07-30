export default class Gadget {
    static getOldestGadget(gadgetsArray) {
        let oldestGadget = gadgetsArray[0];
        for (let gadget of gadgetsArray) {
            if (gadget.year < oldestGadget.year) {
                oldestGadget = gadget;
            }
        }
        return oldestGadget;
    }
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.brand}, ${this.model}, ${this.year}`;
    }
    get year() {
        return this._year;
    }

    set year(year) {
        if (year > 1999 && year <= 2025) {
            this._year = year;
        } else {
            console.log("Помилка: некоректний рік");
        }
    }
}





