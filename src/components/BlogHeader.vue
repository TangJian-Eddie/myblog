<template>
	<nav>
		<ul>
			<li>
				<router-link to="/home" exact>览</router-link>
				<router-link to="/add" exact>书</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name:"blog-header"
	}
</script>

<style scoped>
nav{
	position: fixed;
	right: 0;
	top: 0;
	height: 100%;
	width: 80px;
	background-color: crimson;
}
ul{
	display: flex;
	flex-direction: column;
	padding: 40% 18px 0 0;
}
li{
	list-style: none;
}
a{
	margin: 15px 0;
	padding: 6px 4px 6px 6px;
	color: #fff;
	font-family: MaoBi2;
	font-size: 30px;
	border-radius: 5px;
}
.router-link-active{
	background: rgba(255,255,255,0.8);
	color: #444;
}
</style>
