const express = require('express')
const app = express()
const port = 4000

//magic 8 ball responses
const ballResponses= [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
  ];
  

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger')
  });

  //greeting route with param
  app.get('/greeting/:name', (req, res) => {
    let expression1= "How are you, "
    let expression2= "?"
    res.send(expression1 + req.params.name + expression2);
})

//tip calculator router
app.get('/tip/:total/:percentage', (req, res) => {
	res.send(
		`${calculateTip(req.params.total, req.params.percentage)}`
	);
});
function calculateTip(total, percentage) {
	return total * (percentage / 100);
};

//Magic ball
app.get('/magic/:question', (req, res) => {
	res.send(
		`<p>${req.params.question}</p> <p>${
			ballResponses[randomNumber(ballResponses.length)]
		}</p>`
	);
});
function randomNumber(max) {
	return Math.floor(Math.random() * max);
}

















app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
