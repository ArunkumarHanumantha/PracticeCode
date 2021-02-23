//reduce

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    },
    {
      id: 120,
      name: "Mithun",
      years: 45,
    }
  ];
  
  var totalYears = pilots.reduce((acc, cValue) => acc + cValue.years,10);
  
  console.log(totalYears);
  
  //map 
  var sum = 0;
  var totalYearsMap = pilots.map(function(value, index, pilots){
      return sum += value.years;
  })
  console.log(sum);
  
  //find which pilot is the most experienced one
  
  var mostExpPilot = pilots.reduce(function(old, cur, index){
      return (old.years || 0) > cur.years ? old : cur;
  })
  console.log(mostExpPilot)

  // is array contains any pilots whose years more than 35
  // some
  var pilotYears = pilots.some((pilot) => pilot.years > 35);
  console.log(pilotYears);

  //find 
  var find = pilots.find((pilot) => pilot.years > 15);
  console.log(find);