<template>
	<div class="ui card" v-if="user">
		<div class="image">
			<img :src="user.avatar_url">
		</div>
		<div class="content">
			<a :href="`https://github.com/${username}`" class="header">{{user.name}}</a>
			<div class="meta">
				<span class="date">Joined in {{user.created_at.getFullYear()}}</span>
			</div>
			<div class="description">
				{{user.bio}}
			</div>
		</div>
		<div class="extra content">
			<a :href="`https://github.com/${username}?tab=followers`">
				<i class="user icon"></i>
				{{user.followers}} Friends
			</a>
		</div>
	</div>
	<div class="ui card" v-else>
		<div class="image">
			<img src="@/assets/e404.jpg">
		</div>
		<div class="content">
			Пользователь не найден
		</div>
	</div>
</template>

<script>
	import http from "@/http-common";
	export default {
		name: 'GithubUserCard',
		props: {
			username: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				user: null
			}
		},
		methods:{
			getUser(){
				http
					.get(`/users/${this.username}`)
					.then(response => {
						this.user = response.data;
						this.user.created_at = new Date(response.data.created_at);
					})
					.catch(e => { 
						console.log(e);
					});
			}
		},
		async created(){
			this.getUser();
		}
	}
</script>