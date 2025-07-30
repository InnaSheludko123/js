import Gadget from "./gadget.js";
import Smartphone from "./smartphone.js";

const appleWatch = new Gadget('Apple', 'S12', 2000);
const iPhone = new Smartphone(`Apple`, '16ProMax', 2023, 'IOS');
const airPods = new Gadget('Apple', 'Pro 2', 2020);
const Samsung = new Smartphone('Samsung', 'S16', 2015, 'Android');

//appleWatch.getInfo();
//iPhone.getInfo();
//airPods.getInfo();
//Samsung.getInfo();


//console.log(appleWatch.year);
//console.log(Samsung.operatingSystem);
const gadgets = [appleWatch, airPods, Samsung, iPhone];
Gadget.getOldestGadget(gadgets);
console.log(Gadget.getOldestGadget(gadgets));




