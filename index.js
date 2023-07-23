// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (activity = "go to the office") {

    return `This Monday, I will ${activity}.`;
}


const array = (function (thingToAdd) {
    const base = 3;
    return [
        function () {
            return base + thingToAdd;
        },
        function () {
            return base;
        },
    ];
})(2,);
console.log(array[0]());
console.log(array[1]());
function wrapAdjective(b = "*") {
    return function (a = "special") {
        return `You are ${b}${a}${b}!`;
    }
}

