function homeawayLoop(range, multiples, words) {
  
    for (let i = range[0]; i <= range[1]; i++) {
      if (i % multiples[0] === 0 && i % multiples[1] === 0) console.log(words[0] + words[1]); //this makes it print both words if remainder is 0
      else if (i % multiples[0] === 0) console.log(words[0]); //prints first first if first option remainder is 0
      else if (i % multiples[1] === 0) console.log(words[1]); //same as above but for 2nd option 
      else console.log(i);
    }     
  } 
  homeawayLoop([15, 90], [2, 5], ["Batty", "Beacon"]);