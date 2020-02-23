<template>
	<div id="single-blog">
		<blog-header></blog-header>
		<h1>{{blog.title}}</h1>
		<article v-html="blog.content"></article>
		<p>作者：{{blog.author}}</p>
		<div><router-link :to="'/edit/'+id">编辑</router-link></div>
	</div>
</template>

<script>
import BlogHeader from '../../components/BlogHeader.vue'

export default{
	name:"single-blog",
	components:{
		BlogHeader
	},
	data(){
		return{
			id:this.$route.params.id,
			blog:{}
		}
	},
	created(){
		this.$http.get('https://my-blog-e57d8.firebaseio.com/posts/'+this.id+'.json')
		.then(function(data){
			// console.log(data);
			return data.json();
			// this.blog = data.body;
		})
		.then(function(data){
			this.blog = data;
		})
	}
}
</script>

<style scoped>
#single-blog{
	position: absolute;
	right: 70px;
	padding: 20px;
	background: #eee;
	border: 1px dotted #aaa;
}
h1{
	font-family: MaoBi2;
}
article,p,a{
	font-family: MaoBi1;
	line-height: 30px;
}
p{
	text-align: end;
}
a{
	text-decoration: none;
	color: black;
	float: right;
}
</style>
