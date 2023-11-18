<template>
	<h1>GitHub Profiles</h1>
	<github-user-card v-for="(username, index) in usernames" :key="index" :username="username"/>
</template>

<script>
	import GithubUserCard from '@/components/GithubUserCard.vue';
	export default {
		name: 'App',
		components: {
			GithubUserCard
		},
		data(){
			return {
				usernames: [
					"DmitryHaos",
					"AlexGyver",
					"d404y",
					"akryum",
					"danielkellyio",
					"hootlex",
					"akryum",
					"x"
				]
			}
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
