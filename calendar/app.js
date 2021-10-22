// dark mode add
document.querySelector(
    ".calendar__footer__toggle__dark__mode__switch"
).onclick = () => {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
};

// check leap year
is__leap__years = (years) => {
    return (
        (years % 4 === 0 && years % 100 !== 0 && years % 400 !== 0) ||
        (years % 4 === 0 && years % 100 === 0 && years % 400 === 0)
    );
};
get__feb__dayes = (year) => {
    return is__leap__years(year) ? 29 : 28;
};

// select the calendar 
let calendar = document.querySelector(".calendar");

const month__names = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// month show event add 
let month__picker = document.querySelector("#month-picker");
month__picker.onclick = () => {
    month__list.classList.add("show");
};

// generate calendar
generate__calendar = (month, year) => {
    // select the calendar days div 
    let calendar__dayes = document.querySelector(".calendar__body__days");
    // calender div under all doing blanck 
    calendar__dayes.innerHTML = ''

    // calender month selected
    let calendar__header__year = document.querySelector(
        ".calendar__header__year__picker__year"
    );

    // calendar all month dayes 
    let days__of__month = [
        31,
        get__feb__dayes(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    let current__date = new Date();

    // checking the month and years
    if (!month) month = current__date.getMonth()
    if (!year) year = current__date.getFullYear()

    // month div push the month name 
    month__picker.innerHTML = month__names[month];
    // year div push the year number 
    calendar__header__year.innerHTML = year;

    // this is take the year month date  and give the day 
    let first__day = new Date(year, month, 1)


    for (let i = 0; i <= days__of__month[month] + first__day.getDay() - 1; i++) {
        let day = document.createElement("div");
        if (i >= first__day.getDay()) {
            day.classList.add("calendar__day__hover");
            day.innerHTML = i - first__day.getDay() + 1;
            day.innerHTML += `<span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>`;
            if (
                i - first__day.getDay() + 1 === current__date.getDate() &&
                year === current__date.getFullYear() &&
                month === current__date.getMonth()
            ) {
                day.classList.add("current__date");
            }
        }
        calendar__dayes.appendChild(day);
    }
};

let month__list = calendar.querySelector(".month__list");
month__names.forEach((e, index) => {
    let month = document.createElement("div");
    month.innerHTML = `<div>${e}</div>`;
    month.querySelector('div').onclick = () => {
        month__list.classList.remove("show");
        current__month.value = index === 0 ? "0" : "1"
        console.log(current__month.value = index === 0 ? "0" : index);
        generate__calendar(current__month.value, current__year.value);
    };
    month__list.appendChild(month);
});

document.querySelector('#pev_year').onclick = () => {
    --current__year.value
    generate__calendar(current__month.value, current__year.value)
}

document.querySelector('#next_year').onclick = () => {
    ++current__year.value
    generate__calendar(current__month.value, current__year.value)
}

let current__date = new Date();

let current__month = { value: current__date.getMonth() };
let current__year = { value: current__date.getFullYear() };

generate__calendar(current__month.value, current__year.value);