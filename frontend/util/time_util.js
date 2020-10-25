const displayTime = datetime => {
    console.log(datetime);
    const dateTime = datetime.split('T');
    const date = dateTime[0].split('-');
    const time = dateTime[1].split(':');

    const display = `${date[1]}/${date[2]}/${date[0]} ${time[0]}:${time[1]}`;
    return display;
}


export default {
    displayTime
}