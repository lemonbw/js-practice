const BIRTHDAY = new Date(2003, 2, 23);
const currentDate = new Date();

function ageCalculator(birthday) {
  const diff = currentDate - birthday;
  const age = new Date(diff);
  return age.getFullYear() - 1970;
}

alert("Your age is " + ageCalculator(BIRTHDAY));
