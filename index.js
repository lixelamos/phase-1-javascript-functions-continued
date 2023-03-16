// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("i want to bathe my dog");

const mondayWork = function (work ="go to the office"){
    return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("work from home");
let wrapAdjective = function(sad="*") {
    return function(word="special") {
      return `You are ${sad}${word}${sad}!`
    }
  }
