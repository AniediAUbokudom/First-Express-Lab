const express = require('express')
const app = express()
const port = 4000

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








app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
