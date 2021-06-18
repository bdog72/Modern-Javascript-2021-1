//
//

let gradeCalc = function (score, totalScore) {
  let percent = (score / totalScore) * 100;
  if (percent >= 90) {
    return `You got a A ${percent}%`;
  }
  if (percent >= 80) {
    return `You got a B ${percent}%`;
  }
  if (percent >= 70) {
    return `You got a C ${percent}%`;
  }
  if (percent >= 60) {
    return `You got a D ${percent}%`;
  }
  if (percent >= 0) {
    return `You got a F ${percent.toFixed()}%`;
  }
};

let result = gradeCalc(18, 20);
console.log(result);

result = gradeCalc(17, 20);
console.log(result);

result = gradeCalc(15, 20);
console.log(result);

result = gradeCalc(13, 20);
console.log(result);

result = gradeCalc(11, 20);
console.log(result);
