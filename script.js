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
//console.log(submissions);

// 3. Declare a function named deleteSubmissionByIndex:
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
};
//deleteSubmissionByIndex(submissions, 1);
//console.log(submissions)

// 4. Declare a function named deleteSubmissionByName
function deleteSubmissionByName(array, name) {
    let matchingName = array.findIndex(array => array.name === name)
    array.splice(matchingName, 1);
};
//deleteSubmissionByName(submissions, "Jane");


// 5. Declare a function named editSubmission 
function editSubmission(array, index, score) {
    let submission = array[index]
    submission.score = score
    submission.passed = score >= 60 ? true : false;
}
//editSubmission(submissions, 0, 55);
//console.log(submissions);

// 6. Declare a function named findSubmissionByName
function findSubmissionByName(array, name) {
    console.log(array.find(x => x.name === name));
}
findSubmissionByName(submissions, "Frank");

// 7. Declare a function named findLowestScore NOT WORKING
function findLowestScore(array) {
    array.forEach()
}

// 8. Declare a function named findAverageScore
function findAverageScore(array) {
    let total = 0;
    let average;
    for (let num of array) {
      total += num.score
    } average = total / array.length
    console.log(average);
  }
  findAverageScore(submissions);

// 9. Declare a function named filterPassing
function filterPassing(array) {

}

// 10. Declare a function named filter90AndAbove
function filter90AndAbove(array) {

}