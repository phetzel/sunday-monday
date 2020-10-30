
const displayTime = datetime => {
    const dateTime = datetime.split('T');
    const date = dateTime[0].split('-');
    const time = dateTime[1].split(':');
    let ap = "AM"

    let hours = time[0];
    if (hours = 12) {
        ap = "PM";
    } else if (time[0] > 12) {
        hours = hours - 12;
        ap = "PM";
    } else if (time[0] = '00') {
        hours = 12;
    }

    const display = `${date[1]}/${date[2]}/${date[0]} ${hours}:${time[1]} ${ap}`;
    return display;
}


export default {
    displayTime
}