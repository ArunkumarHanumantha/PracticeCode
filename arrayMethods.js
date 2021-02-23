var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
     {
      id: 12,
      name: "Arunkumar",
      pilotingScore: 81,
      shootingScore: 95,
      isForceUser: false,
    },
     {
      id: 16,
      name: "mithun",
      pilotingScore: 121,
      shootingScore: 335,
      isForceUser: false,
    },
  ];
  
  //Our objective: get the total score of force users only, us filter, map, reduce methods of array. 
  // get the force users total score of shotting and pilotingScore 
  
  var totalScore = personnel
                  .filter((cValue) => !cValue.isForceUser)
                  .map((curValue)  => parseInt(curValue.shootingScore) + parseInt(curValue.pilotingScore))
                  .reduce((acc, currentValue, index) => parseInt(acc) + parseInt(currentValue), 0);
  
  console.log(totalScore);
  
  //use only reduce to get the same result
  var totalSameResultByReduce = personnel.reduce(function(acc, curValue, index, actualArr){
      return acc += !curValue.isForceUser ? curValue.shootingScore + curValue.pilotingScore : 0;
  }, 0)
  
  console.log(totalSameResultByReduce);