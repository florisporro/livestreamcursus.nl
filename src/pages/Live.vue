<template lang="pug">
  Layout
    section.bg-purple.text-white.text-center
      .container.mx-auto.max-w-screen-md(class="pt-4 md:pt-8")
          h2 Registeren & livestream
          p Hieronder zie je het venster van onze betaalpartner Cleeng (mogelijk moet je je adblocker uitzetten), daar kun je ook een kaartje kopen. Heb je al betaald? Dan kun je op deze pagina inloggen en woensdag de cursus volgen.
      iframe.mx-auto(src="https://stream-my-event.cleeng.com/embedded-event/E685301466_NL?embed=1" frameborder="0" scrolling="no" webkitAllowFullScreen allowFullScreen class="w-full max-h-screen h-screen")
</template>

<script>
export default {
  metaInfo: {
    title: "Dé live spoedcursus voor livestreaming. Van matties, voor matties."
  }
};
</script>
