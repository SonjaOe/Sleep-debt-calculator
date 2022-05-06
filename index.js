const getSleepHours = day => {
  switch (day) {
    case 'monday' :
    return 5.5;
    break;
    case 'tuesday' :
    return 5;
    break;
    case 'wednesday' :
    return 6;
    break;
    case 'thursday' :
    return 8;
    break;
    case 'friday' :
    return 4;
    break;
    case 'saturday' :
    return 4;
    break;
    case 'sunday' :
    return 8;
    break;
  }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  } //Voisi kirjoittaa myös concise-muodossa ilman {} ja return-sanaa
  
  
  const getIdealSleepHours = () => {
    let idealHours = 7
    return idealHours * 7
  }
  
  console.log(getIdealSleepHours())
  console.log(getActualSleepHours())
  
  