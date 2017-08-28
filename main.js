// sleep debt calculator

const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 8;
  }
};

const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  console.log('You are geting '); // STEP EIGHT!!!!
};

if (actualSleepHours === idealSleepHours) {
  console.log('You are getting exactly the right amount of sleep');

if (actualSleepHours < idealSleepHours) {
  console.log('You are not getting enough sleep!'));
}

if (actualSleepHours > idealSleepHours) {
  console.log("You are getting plenty of sleep. Good Job.");
}
