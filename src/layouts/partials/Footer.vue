<template lang="pug">
  .footer-wrapper
    footer#footer.footer.bg-lazuli(role='contentinfo')
      .footer-inner.container.m-auto.max-w-screen-md.justify-between.items-center.py-10(class='md:flex')
        p.text-sm.text-white Een project van
          g-image(src="~/assets/streammyevent.png" width="250")
        ul.flex.justify-center
          li.mr-4(v-for='element in $static.metadata.social' :key='element.link')
            a.block.text-white(:href='element.link' class='hover:text-red' :aria-label='element.icon' target='_blank')
              svg.block(fill='currentColor' role='img' aria-hidden='true' width='18' height='18')
                use(xmlns:xlink='http://www.w3.org/1999/xlink' :xlink:href='socialIcon(element)')
</template>

<script>
export default {
	methods: {
		socialIcon(element) {
			return `/icons.svg#icon-${element.icon}`;
		}
	}
};
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>
