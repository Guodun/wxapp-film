function getDate(){
    var time = new Date()
    var year = time.getFullYear();
    year = year < 10 ? '0' + year : year;
    var month = time.getMonth();
    month = month < 10 ? '0' + (month + 1) : (month + 1);
    var date = time.getDate();
    date = date < 10 ? '0' + date : date;
    return [year, month, date].join('-');
}

function getTime(){
    var time = new Date()
    var hours = time.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    var minutes = time.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var seconds = time.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return [hours, minutes, seconds].join(':');
}

module.exports = {
    getTime: getTime,
    getDate: getDate
};