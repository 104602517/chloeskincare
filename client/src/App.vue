<template>
	<div id="app">
		<NavHeader></NavHeader>
		<transition name="fade" mode="out-in" appear>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import LandingPage from './components/LandingPage.vue'
	import NavHeader from './components/NavHeader.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			LandingPage,
			NavHeader
		}
	}
</script>

<style lang="scss">
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 0.9s linear;
	}

	.fade-leave-active {
		opacity: 0;
		transition: opacity 0.9s;
	}

	body {
		background: lighten(rgb(215,196,187),1%);
	}
</style>
