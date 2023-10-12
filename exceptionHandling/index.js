function getDay(d) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    if (d < 8) {
        for (let i = 1; i < days.length; i++) {
            if(i===d){
                return days[i-1];
            }
        }
    } else {
        throw "Invalid Input";
    }
}

try {
    let dayNum = Number(prompt('Enter The Day Number : '));
    let day  =  getDay(dayNum);
    console.log(day)
} catch (err) {
    console.log(err);
}
