function dayInMonth(month,year) {


    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            return noOfDay = 31
            break;

        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            return noOfDay = 30;
            break;

        case 2:
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400) == 0)
               return noOfDay = 29;
            else
                return noOfDay = 28;
            break;

        default:
            return "Invalid number of Month"
            break;
    }
}
console.log(dayInMonth(2,2021));