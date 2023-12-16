function saturdayFun (activity = "roller-skate") {
    console.log (`This Saturday, I want to ....!`);
    const saturdayFun = `This Saturday, I want to ${activity}!`
    return saturdayFun
}
function mondayWork (activity = "go to the office") {
    console.log (`This Monday, I will....`);
    const mondayWork = `This Monday, I will ${activity}.`
    return mondayWork
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
