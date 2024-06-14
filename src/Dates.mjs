// noinspection JSUnusedGlobalSymbols

"use strict";

export class Dates {

    static Now() {
        return (new Date());
    }

    static Today() {
        let thisDate = this.Now();

        thisDate.setHours(0);
        thisDate.setMinutes(0);
        thisDate.setSeconds(0);
        thisDate.setMilliseconds(0);

        return thisDate;
    }

    static MonthName(dateValue) {
        return dateValue.toLocaleDateString('en-US', { month: 'long' });
    }

    static MonthAbbreviation(dateValue) {
        return dateValue.toLocaleDateString('en-US', { month: 'short' });
    }

    static WeekDayName(dateValue) {
        return dateValue.toLocaleDateString('en-US', { weekday: 'long' });
    }

    static WeekDayAbbreviation(dateValue) {
        return dateValue.toLocaleDateString('en-US', { weekday: 'short' });
    }

    static AddDays(dateValue, days) {
        return new Date(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate() + days);
    }

    static AddMonths(dateValue, num) {
        return (new Date(dateValue.setMonth(dateValue.getMonth() + num)));
    }

    static ObjectFromDate(dateValue) {
        return {
            year:  dateValue.getFullYear(),
            month: dateValue.getMonth(),
            day:   dateValue.getDate(),
        }
    }

    static DateFromObject(dateObject) {
        return new Date(dateObject.year, dateObject.month, dateObject.day);
    }

    static DateFromIsoString(isoString) {

        const [year, month, day] = isoString.split('-').map(Number);

        return new Date(year, month - 1, day);
    }

    static FormatDateISO(dateValue) {

        dateValue = new Date(dateValue.getTime() - (dateValue.getTimezoneOffset() * 60000));

        return dateValue.toISOString().split('T')[0];
    }

    static IsDateObject(obj) {
        return ("year" in obj && "month" in obj && "day" in obj)
    }

    static AreSameDayDates(dateValue1, dateValue2) {
        return dateValue1.getFullYear() === dateValue2.getFullYear() &&
            dateValue1.getMonth() === dateValue2.getMonth() &&
            dateValue1.getDate() === dateValue2.getDate();
    }

    static IsToday(dateValue) {

        let today = this.Today();

        return dateValue.getFullYear() === today.getFullYear() &&
            dateValue.getMonth() === today.getMonth() &&
            dateValue.getDate() === today.getDate()
    };

    static IsInMonth(dateValue, referenceMonth) {

        return dateValue.getFullYear() === referenceMonth.getFullYear() &&
            dateValue.getMonth() === referenceMonth.getMonth()
    }

    static IsInWeek(dateValue, referenceWeek) {
        return Dates.GetWeekStartDate(dateValue).getTime() === Dates.GetWeekStartDate(referenceWeek).getTime()
    }

    static GetWeekStartDate(dateValue) {
        return Dates.AddDays(dateValue, -1 * dateValue.getDay());
    }

    static GetMonthStartDate(dateValue) {
        return new Date(dateValue.getFullYear(), dateValue.getMonth(), 1)
    }
}