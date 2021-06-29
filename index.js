
const getDatesInRange = (initialDate, finalDate) => {
    let nextDayToPrint = initialDate;
    while(initialDate < finalDate) {
        console.log(nextDayToPrint);
        nextDayToPrint.setDate(nextDayToPrint.getDate() + 1)
    }        
}
