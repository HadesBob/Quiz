<template>

	<div class="conta">
		<div>
			<form v-on:submit.prevent>
			<input type="text" v-model="text">
			<button @click="createPost" type="submit">ADD POST</button>
		</form>
		</div>
		
		<div class="post"
			v-for="(post, index) in posts"
			v-bind:item="post"
			v-bind:index="index"
			v-bind:key="post._id"
			v-on:dblclick="deletePost(post._id)"
			>
			{{post.text}}
	
		
		</div>
	</div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data() {
	return {
		posts:[],
		error: '',
		text: ''
	
	}
	
  },
  
  async created() {
	try{
		this.posts = await PostService.getPosts();
		
	}catch(err){
		this.error = err.message;
	}
  },
  methods: {
	async createPost() {
		await PostService.insertPost(this.text);
		this.posts = await PostService.getPosts();
	},
	async deletePost(id) {
		await PostService.deletePost(id);
		this.posts = await PostService.getPosts();
	}
	
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
