
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

    let dateObj = {};
    dateObj['year'] = eventDate[0];
    dateObj['month'] = months[eventDate[1]];
    dateObj['day'] = eventDate[2];
    
    return dateObj;
}

const displayTime = datetime => {
    const longTime = datetime.split("T")[1].split(':');
    let hour;

    if (longTime[0] > 0 && longTime[0] <= 12) {
        hour = "" + longTime[0];
    } else if (longTime[0] > 12) {
        hour = "" + (longTime[0] - 12);
    } else if (longTime[0] === 0) {
        hour = "12"
    }

    let ap = (longTime[0] >= 12) ? " P.M." : " A.M.";

    return hour + ":" + longTime[1] + ap;
}

const displayDate = datetime => {
    const eventDatetime = datetime.split("T");
    const eventDate = eventDatetime[0].split("-");
    
    return months[eventDate[1]] + " " + eventDate[2] + " " + eventDate[0];
}

export default {
    displayEventIndex,
    displayDate,
    displayTime
}