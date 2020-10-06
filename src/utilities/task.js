import { v4 as uuidv4 } from 'uuid';

const dateForHabitTracker = new Date()

// name of the month to be placed in the Task Object - in polish
let monthForHabit = '';
switch (dateForHabitTracker.getMonth()) {
    case 0:
        monthForHabit = 'styczeń';
        break;
    case 1:
        monthForHabit = 'luty';
        break;
    case 2:
        monthForHabit = 'marzec';
        break;
    case 3:
        monthForHabit = 'kwiecień';
        break;
    case 4:
        monthForHabit = 'maj';
        break;
    case 5:
        monthForHabit = 'czerwiec';
        break;
    case 6:
        monthForHabit = 'lipiec';
        break;
    case 7:
        monthForHabit = 'sierpień';
        break;
    case 8:
        monthForHabit = 'wrzesień';
        break;
    case 9:
        monthForHabit = 'październik';
        break;
    case 10:
        monthForHabit = 'listopad';
        break;
    default:
        monthForHabit = 'grudzień';
}

// creating ARRAY to calendar creation:
const firstDay = (new Date(`${dateForHabitTracker.getFullYear()}-${dateForHabitTracker.getMonth() + 1}-01`)).getDay() - 1;
// starting date: 0: PON, 1: Wt, 2: Śr, 3: Czw, 4: Pia, 5: Sob, 6: Nie

const daysInMonth = (new Date(dateForHabitTracker.getFullYear(), dateForHabitTracker.getMonth() + 1, 0)).getDate();
let arrayHelp = [];

for (let i = 0; i < 42; i++) {
    arrayHelp[i] = 0;
}

for (let i = firstDay; i < (daysInMonth + firstDay); i++) {
    arrayHelp[i] = 1;
}

export class Task {
    title = '';
    date = dateForHabitTracker;
    month = monthForHabit;
    year = dateForHabitTracker.getFullYear();
    startingDay = firstDay;
    days = daysInMonth;
    status = 'active';
    price = '';
    daysArray = arrayHelp;
    key = uuidv4();
}

// 0 - day not applicable
// 1 - day to be included in calendar
// 2 - habit not done in a past day
// 3 - habit DONE!
// 4 - habit to be excluded in the habit tracking!