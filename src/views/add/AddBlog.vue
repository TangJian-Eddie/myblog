<!-- https://my-blog-e57d8.firebaseio.com/ -->
<template>	
  <div class="add-blog">
		<blog-header></blog-header>
		
		<blog-content :blog="blog" :submitted="submitted">
			<h2 slot="header">添加博客</h2>
			<div slot="title" class="title" contenteditable="true" @input="blog.title = $event.target.innerText"></div>
			<div slot="content" class="content" contenteditable="true"  @input="blog.content = $event.target.innerText"></div>
			<button slot="post" @click.prevent="post">添加博客</button>
		</blog-content>
	
		<blog-preview :blog="blog" :submitted="submitted">
			<h3 slot="success">您的博客已经发布成功了！</h3>
		</blog-preview>
	</div>
</template>

<script>
import BlogPreview from '../../components/BlogPreview.vue'
import BlogHeader from '../../components/BlogHeader.vue'
import BlogContent from '../../components/BlogContent.vue'

export default {
	//https://jsonplaceholder.typicode.com/
  name: 'add-blog',
	components:{
		BlogPreview,BlogHeader,BlogContent
	},
  data () {
    return {
      blog:{
		  title:"",
		  content:"",
		  author:""
	  },
	  submitted: false
    }
  },
  methods:{
	  post:function(){
		  this.$http.post("https://my-blog-e57d8.firebaseio.com/posts.json",this.blog)
		  .then(function(data){
			  console.log(data);
			  this.submitted = true;
		  },function(err){});
	  }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.add-blog{
	position: absolute;
	right: 80px;
	max-height: 100%;
	margin: 20px;
	font-family: MaoBi1;
	font-size: 25px;
}
h2{
	font-family: MaoBi2;
	font-weight: 400;
}
label{
	display: block;
	margin: 0 5px 0 5px;
}
.title{
	width: 25px;
	height: 680px;
	border: 1px solid #c4c4c4;
	font-size: 18px;
	padding: 8px 2px;
	margin: 0;
}
.content{
	height: 680px;
	width: 700px;
	border: 1px solid #c4c4c4;
}
.author{
	display: inline-block;
}
input{
	margin-right: 6px;
}
button{
	display: block;
	margin: 20px 0;
	width: 45px;
	background: crimson;
	color: #fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
}
</style>
