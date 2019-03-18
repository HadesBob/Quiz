import axios from 'axios';

const url = 'api/questions/';

class QuestionService{
	
	static getQuestions() {
		
		return new Promise(async (resolve, reject) => {
			try{
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(quest => ({
						...quest,
						createdAt: new Date(quest.createdAt)
					})
				));
				}
				catch(err){
					reject(err);
				}
			
		});
		
	}
	
	
	static insertQuestion(data) {
		return axios.post(url, {
			data
			
		});
		
	}
	
	
	
	
}

export default QuestionService;