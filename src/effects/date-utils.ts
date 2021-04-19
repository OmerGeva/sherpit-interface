export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  

export const ordinal = (number: number) => {
    const d = number % 10;
    const suffix =  (~~ (number % 100 / 10) === 1) ? 'th' :
           (d === 1) ? 'st' :
           (d === 2) ? 'nd' :
           (d === 3) ? 'rd' : 'th';

    return `${number}${suffix}`;
  }