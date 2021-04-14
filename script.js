// ***** JAVASCRIPT LAB 3 *****

// 1. Declare a variable named submissions that is initialized to an array with the following objects:
let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
];

// 2. Declare a function named addSubmission:
function addSubmission(array, newName, newScore, newDate) {
    array.push({
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false
    });
}
addSubmission(submissions, "Frank", 54, "2020-05-21");
addSubmission(submissions, "Tom", 70, "2020-06-21");
console.log(submissions);

// 3. Declare a function named deleteSubmissionByIndex:
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 1);
console.log(submissions)

// 4. Declare a function named deleteSubmissionByName
function deleteSubmissionByName(array, name) {
    let matchingNameIndex = array.findIndex(submission => submission.name === name)
    array.splice(matchingNameIndex, 1);
};
deleteSubmissionByName(submissions, "Jane");
console.log(submissions)


// 5. Declare a function named editSubmission 
function editSubmission(array, index, score) {
    let submission = array[index];
    submission.score = score;
    submission.passed = score >= 60 ? true : false;
}
editSubmission(submissions, 3, 55);
editSubmission(submissions, 0, 55);
console.log(submissions);

// 6. Declare a function named findSubmissionByName
function findSubmissionByName(array, name) {
    console.log(array.find(submission => submission.name === name));
}
findSubmissionByName(submissions, "Jack");
findSubmissionByName(submissions, "Frank");

// 7. Declare a function named findLowestScore
function findLowestScore(array) {
    let lowestScore = array[0];
    array.forEach(x => {
        if (x.score < lowestScore)
        lowestScore = x.score
    });
    console.log(lowestScore);
}
findLowestScore(submissions);

// 8. Declare a function named findAverageScore
function findAverageScore(array) {
    let total = 0;
    let average;
    for (let submission of array) {
      total += submission.score;
    } 
    average = total / array.length
    return average;
  }
  console.log(findAverageScore(submissions));

// 9. Declare a function named filterPassing
function filterPassing(array) {
    return array.filter(array => array.score >= 60);
 }
 console.log(filterPassing(submissions));

// 10. Declare a function named filter90AndAbove
function filter90AndAbove(array) {
    return array.filter(x => x.score >= 90);
    console.log(aOrHigher)
}
console.log(filter90AndAbove(submissions));

// *** EXTENDED CHALLENGES ***
function createRange(start, end) {
    let count = 0;
      for (i = start; i <= end; i++) {
          count = i;
          console.log(count)
      } 
  }
  createRange(4, 10);

  // Second Extended challenge
  let arrayEx = ['a', 'b', 'a', 'c', 'a', 'b']
function countElements(array) {
  let object = {};
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  for (let num of array) {
    if (num === 'a') {
      aCount += 1;
      object.a = aCount;
    } else if (num === 'b') {
      bCount += 1;
      object.b = bCount
    } else if (num === 'c') {
      cCount += 1;
      object.c = cCount;
    }
  } return object;
  }

console.log(countElements(arrayEx));


