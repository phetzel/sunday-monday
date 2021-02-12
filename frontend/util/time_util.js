
// const displayTime = datetime => {
//     const dateTime = datetime.split('T');
//     const date = dateTime[0].split('-');
//     const time = dateTime[1].split(':');
//     let ap = "AM"

//     let hours = time[0];
//     if (hours = 12) {
//         ap = "PM";
//     } else if (time[0] > 12) {
//         hours = hours - 12;
//         ap = "PM";
//     } else if (time[0] = '00') {
//         hours = 12;
//     }

//     const display = `${date[1]}/${date[2]}/${date[0]} ${hours}:${time[1]} ${ap}`;
//     return display;
// }

const months = {
    '01': 'JAN',
    '02': 'FEB',
    '03': 'MAR',
    '04': 'APR',
    '05': 'MAY',
    '06': 'JUN',
    '07': 'JUL',
    '08': 'AUG',
    '09': 'SEP',
    '10': 'OCT',
    '11': 'NOV',
    '12': 'DEC',
}

const displayEventIndex = datetime => {
    const eventDatetime = datetime.split("T");
    const eventDate = eventDatetime[0].split("-");
    console.log(eventDate);

    let dateObj = {};
    dateObj['year'] = eventDate[0];
    dateObj['month'] = months[eventDate[1]];
    dateObj['day'] = eventDate[2];
    
    return dateObj;
}


export default {
    displayEventIndex
}