<template>
	<div id="content">
	<slot name="header"></slot>
	<form v-if="!submitted">
		<label>博客标题</label>
		<slot name="title"></slot>
		<!-- <div class="title" contenteditable="true" :value="blog.title" @blur="blog.title = $event.target.innerText">{{blog.title}}</div> -->
		<label>博客内容</label>
		<slot name="content"></slot>
		<!-- <div class="content" contenteditable="true" :value="blog.content" @blur="blog.content = $event.target.innerText">{{blog.content}}</div> -->
		<label class="author">作者</label>
		<input type="radio" value="大臭屁" v-model="blog.author"/>
		<label class="author">大臭屁</label>
		<input type="radio" value="小臭屁" v-model="blog.author"/>
		<label class="author">大臭屁</label>
		<slot name="post"></slot>
		<!-- <button @click.prevent="post">添加博客</button> -->
	</form>
	</div>
</template>

<script>
export default{
	name: "blog-content",
	props: {
		blog: Object,
		submitted: Boolean
	},
}
</script>

<style>
.author{
	display: inline-block;
}
input{
	margin-right: 6px;
}
</style>
