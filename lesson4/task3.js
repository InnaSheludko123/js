let dayNumber = Math.floor(Math.random() *7)+1;

switch (dayNumber){
    case 1:
        console.log(`${dayNumber} - It's Monday!`);
        break;
    case 2:
        console.log(`${dayNumber} - It's Tuesday!`);
        break;
    case 3:
        console.log(`${dayNumber} - It's Wednesday!`);
        break;
    case 4:
        console.log(`${dayNumber} - It's Thursday!`);
        break;
    case 5:
        console.log(`${dayNumber} - It's Friday!`);
        break;  
    case 6:
        console.log(`${dayNumber} - It's Saturday!`);
        break; 
    case 7:
        console.log(`${dayNumber} - It's Sunday!`);
        break;  
    default:
        console.log("Incorrect value");                   
} 