<template>
	<div>
		<a class="visually-hidden" href="#main">Skip to content</a>

		<div
			id="wrapper"
			class="wrapper pb-16 md:pb-0 flex flex-col relative min-h-screen"
		>
			<HeaderPartial />

			<main id="main">
				<slot />
			</main>

			<FooterPartial />
		</div>

		<ClientOnly>
			<ResponsiveNav />
		</ClientOnly>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import ResponsiveNav from "~/layouts/partials/ResponsiveNav.vue";

export default {
	components: {
		HeaderPartial,
		FooterPartial,
		ResponsiveNav
	}
};
</script>
