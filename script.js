//ex -1 Reverse string

function reverseString(str) {
    var listOfChar = str.split('');
    var reverseList = listOfChar.reverse();
    var reverseStr = reverseList.join('');
    return reverseStr;
}
//console.log(reverseString("hello"))

//ex-2 Write a js to check pallindrome function
function isPalindrome(str) {
    var reverse = reverseString(str);
    return str === reverse;
}

//ex-3 Write a function that converts number to string;

function convertDateToStr(date) {
    var dateStr = { day: ' ', month: ' ', year: ' ' };
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month, toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}

// var date = {
//     day: 5,
//     month: 9,
//     year: 2020
// }

//console.log(convertDateToStr(date));

//ex-4 Write a js function that takes a date and retuns all variations of its

function getAllDateFormate(date) {
    var dateStr = convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// var date = {
//     day: 5,
//     month: 9,
//     year: 2020
// }

// console.log(getAllDateFormats(date))

//ex-05 write a function to check palindrome for all date formats

function checkPalindromeForAllDateFormate(date) {
    var listOfPalindromes = getAllDateFormate(date);

    var flag = false;
    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}
// var date = {
//     day: 5,
//     month: 9,
//     year: 2020
// }

// console.log(checkPlaindromeForAllDateFormate(date));

//ex-06 Find the next pallindrome date , also how many days are in between
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } if (year % 100 === 0) {
        return false
    } if (year % 4 === 0) {
        return true;
    }
    return false;
}


function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    } if (month > 12) {
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    }
}

// var date = {
//     day: 5,
//     month: 9,
//     year: 2020
// }
// // console.log(checkPalindromeForAllDateFormate(date));
// console.log(getNextDate(date));

var dateInputRef = document.querySelector('#input-date');
var showBtn = document.querySelector('#submit-btn');
var resultref = document.querySelector('#output');

showBtn.addEventListener('click', clickHandler);

function clickHandler() {
    var bdayStr = dateInputRef.value;

    if (bdayStr !== ' ') {
        var listOfDate = bdayStr.split('-');
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        };

        var isValid = checkPalindromeForAllDateFormate(date);
        if (isValid) {
            resultref.innerText = 'yay! your birthday is pallindrome'
        } else {
            resultref.innerText = 'your bithday is not pallindrome'
        }
    }
}


