<template>
	<div id="show-blogs">
		<blog-header></blog-header>
		<h1>博客总览</h1>
		<div contenteditable="true" class="search"  @input="search = $event.target.innerText"></div>
		<div v-for="blog in filteredBlogs" class="single-blog">
			<router-link :to="'/blog/'+blog.id">
				<h2>{{blog.title}}</h2>
				<article>{{blog.content | snippet}}</article>
			</router-link>
		</div>
	</div>
</template>

<script>
import BlogHeader from '../../components/BlogHeader.vue'
export default{
	name: 'show-blogs',
	components:{
		BlogHeader
	},
	data(){
		return{
			blogs:[],
			search:""
		}
	},
	created(){
		this.$http.get("https://my-blog-e57d8.firebaseio.com/posts.json")
		.then(function(data){
			// console.log(data.json());
			// this.blogs = data.body.slice(0,10);
			return data.json()
			// console.log(this.blogs);
		})
		.then(function(data){
			var blogsArray = [];
			for(let key in data){
				// console.log(key);
				// console.log(data[key]);
				data[key].id = key;
				blogsArray.push(data[key]);
			}
			this.blogs = blogsArray.slice(0,6);
		})
	},
	computed:{
		filteredBlogs: function(){
			return this.blogs.filter((blog) =>{
				return blog.title.match(this.search);
			})
		}
	},
	filters:{
		"snippet": function(value){
			return value.slice(0,80)+"...";
		}
	}
}
</script>

<style scoped>
#show-blogs{
	position: absolute;
	right: 80px;
	max-height: 100%;
	margin-right: 20px;
	margin-top: 18px;
}
h1,h2{
	font-family: MaoBi2;
	font-weight: 400;
	margin-top: 10px;
}
.single-blog{
	padding: 20px;
	background: #eee;
	border: 1px dotted #aaa;
}
#show-blogs a{
	color: #444;
	text-decoration: none;
}
.search{
	width: 30px;
	height: 200px;
	font-size: 18px;
	border: 1px solid #CCCCCC;
	margin-left: 10px;
	margin-top: 10px;
	padding: 8px 3px 0 0;
}
article{
	font-family: MaoBi1;
}
</style>
