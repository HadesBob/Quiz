<template>

	
		<div>
			<form v-on:submit.prevent>
			<label>pytanie</label>
			<input type="text" v-model="newQuestion.text">
			<label>odp1</label>
			<input type="text" v-model="newQuestion.first">
			<label>odp2</label>
			<input type="text" v-model="newQuestion.second">
			<label>odp3</label>
			<input type="text" v-model="newQuestion.third">
			<label>prawidłowa</label>
			<input type="text" v-model="newQuestion.correct">
			<label>Kategoria</label>
			<input type="text" v-model="newQuestion.category">
			<button @click="createQuestion" type="submit">ADD Question</button>
		</form>
		<div>afhoadfhoa oaioaijsfoj</div>
		<div>afhoadfhoa oaioaijsfoj</div><div>afhoadfhoa oaIGUIGIUjsfoj</div><div>afhoaOIJO
		<div v-for="q in questions" v-bind:key="q._id">
			<p>{{q.text}}</p>
			<p>{{q.first}}</p>
			<p>{{q.second}}</p>
			<p>{{q.third}}</p>
			<p>{{q.correct}}</p>
			<p>{{q.category}}</p>
		
		</div>
	</div>
</template>

<script>
import QuestionService from '../QuestionService';
export default {
  name: 'QuestionComponent',
  data() {
	return {
		questions:[],
		error: '',
		newQuestion: {
			text: '',
			first: '',
			second: '',
			third: '',
			correct: '',
			category: '',
		}
	}
	
  },
  
  async created() {
	try{
		this.questions = await QuestionService.getQuestions();
		
	}catch(err){
		this.error = err.message;
	}
  },
  methods: {
	async createQuestion() {
		await QuestionService.insertQuestion(this.newQuestion);
		this.questions = await QuestionService.getQuestions();
	}
	
	
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
