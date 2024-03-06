const expenses = {
  '2023-01': {
    '01': {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    '09': {
      food: [11.9],
      fuel: [190.22],
    },
  },
  '2023-03': {
    '07': {
      food: [20, 11.9, 30.2, 11.9],
    },
    '04': {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  '2023-04': {},
};

function getFirstSunday(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  return firstDay.getDay() === 0 ? 1 : 8 - firstDay.getDay();
}

function getMedian(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  console.log(sorted);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

function getMedianOfFirstWeekExpenses(expenses) {
  let allExpenses = [];
  for (const yearMonth in expenses) {
    const [year, month] = yearMonth.split('-').map(Number);
    const firstSunday = getFirstSunday(year, month);

    for (const day in expenses[yearMonth]) {
      if (Number(day) <= firstSunday) {
        const dayExpenses = expenses[yearMonth][day];
        for (const category in dayExpenses) {
          allExpenses = allExpenses.concat(dayExpenses[category]);
        }
      }
    }
  }

  return getMedian(allExpenses);
}

console.log(getMedianOfFirstWeekExpenses(expenses));
