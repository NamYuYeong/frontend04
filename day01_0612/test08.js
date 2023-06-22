const { format } = require('data-fns');

const today = new Date();
console.log(today);

const todayFormat = format(today, 'yy-mm-dd hh:mm');
console.log(todayFormat);