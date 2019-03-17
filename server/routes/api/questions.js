const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

async function loadQuestions(){
	const client = await mongodb.MongoClient.connect('mongodb+srv://lukas123:lukas123@cluster0-tnmst.mongodb.net/test?retryWrites=true', {useNewUrlParser:true});
	
	return client.db("test").collection("questions");
}


router.get('/', async (req, res) => {
	const questions = await loadQuestions();
	res.send( await questions.find({}).toArray());
});


router.post('/', async(req, res) => {
	const questions = await loadQuestions();
	await questions.insertOne({
		text: req.body.data.text,
		first: req.body.data.first,
		second: req.body.data.second,
		third: req.body.data.third,
		correct: req.body.data.correct,
		category: req.body.data.category,
		createdAt: new Date()
	});
	res.status(201).send();
});


module.exports = router;