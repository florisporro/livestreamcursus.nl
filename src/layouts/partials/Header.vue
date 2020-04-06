<template>
  <header id="header" class="header bg-dark p-4 md:p-6" role="banner">
    <div
      class="max-w-screen-md container mx-auto flex flex-col md:flex-row md:justify-between items-center text-white"
    >
      <div>
        <g-link to="/">
          <g-image src="~/assets/livestreamcursus.png" width="300" />
        </g-link>
      </div>
      <div class="text-right">
        <p class="lead">Dé live spoedcursus voor livestreaming.</p>
        <p>Perfect voor beginners én ervaren AV Professionals.</p>
      </div>
    </div>
  </header>
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
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>
