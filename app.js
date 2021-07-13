const answer = require('./answer.json');
const question = require('./question.json');

const comp_answer = [];

question.forEach(q => {
    answer.map(answer => {
        if(q.QuestionID == answer.QuestionID) {
            if(answer.Flag === true) 
            {
                comp_answer.push({
                    QuesNo: q.QusNo,
                    Question: q.Question,
                    answer: answer.OptionDetails,
                    option: answer.OptionNo
                });
            }
        }
    });
});

console.log('****************************************************************')
console.log(comp_answer);
console.log(comp_answer.length);