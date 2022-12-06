// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(stats){
    const yearWithWin = stats.find((record) => record.result ==='W');
    return yearWithWin!== undefined?yearWithWin.year:undefined;
  }