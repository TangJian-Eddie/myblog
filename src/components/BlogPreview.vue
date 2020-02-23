<template>
	<div id="preview">
		<div v-if="submitted">
			<slot name="success"></slot>
		</div>
		<hr />
		<h3>博客总览</h3>
		<p><span>博客标题：</span>{{blog.title}}</p>
		<p><span>博客内容：</span></p>
		<p>{{blog.content}}</p>
		<p><span>作者：</span>{{blog.author}}</p>
	</div>
	
</template>

<script>

export default{
	name: 'blog-preview',
	props:{
		blog: Object,
		submitted: Boolean
	}
}
</script>

<style>
#preview{
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 0 20px;
}
span{
	font-weight: 600;
}
</style>
