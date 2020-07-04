const getSleepHours = day => {
  day = day.toLowerCase();
  switch(day){
    case "monday":
    return 8;
    break;
    case "tuesday":
    return 8;
    break;
    case "wednesday":
    return 8;
    break;
    case "thursday":
    return 8;
    break;
    case "friday":
    return 8;
    break;
    case "saturday":
    return 8;
    break;
    case "sunday":
    return 8;
    break;
    default:
    return "Wrong day BSDKay";
    break;
  }
}

const getActualSleepHours = () => {
  return getSleepHours("monday")+ getSleepHours("tuesday")+getSleepHours("wednesday")+getSleepHours("thursday")+getSleepHours("friday")+getSleepHours("saturday")+getSleepHours("sunday");
}

const getIdealSleepHours = () => {
  let idealHours = 5
  return idealHours*7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log("You get perfect sleep. Give me the secret for the same");
  } else if(actualSleepHours > idealSleepHours){
    console.log("It looks like you're just a piece of shit on this earth or you suffer from iron deficiency."+(actualSleepHours - idealSleepHours)+" the amount of extra sleep you get you fatso");
  } else {
    console.log("I know you working hard bruh, but try to find sleep, it'll just help, will do no harm." +(idealSleepHours - actualSleepHours)+ " this is the gap between your sleep and the ideal sleep");
  }
}

calculateSleepDebt();

// getActualSleepHours();

// getSleepHours("asd");
