<template lang="pug">
  Layout
    section.bg-red.text-white
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8")
        .flex.flex-wrap.overflow-hidden(class='md:-mx-2')
          .w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            h2 Wat?
            p Een live cursus van ongeveer 1 dag om te leren livestreamen. Van de absolute basics tot geavanceerde concepten. Speciaal toegespitst op de AV Professional die het plaatjes maken echt wel onder de knie heeft, en gewoon snel wat moet weten over livestream techniek om aan de slag te kunnen.
            p Kun je er live niet bijzijn? Je kunt het allemaal later nog eens rustig terugkijken.
          .w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            h2 Kosttat?
            p Nu voor 120 euro!
            p <strong>That's right</strong>, voor de daghuur van een FS5 bij Budgetcam krijg jij 7 uur lang livestream training van een wereldklasse streamnerd.
        .text-center.my-4
          g-link.btn.text-red(to="/#livestream") Nu aanmelden
    section.bg-purple.text-white.text-center
      .container.mx-auto.max-w-screen-md(class="pt-4 md:pt-8")
        h2 Registeren
        p Hieronder zie je het venster van onze betaalpartner Cleeng (mogelijk moet je je adblocker uitzetten), daar kun je ook een kaartje kopen. Heb je al betaald? Dan kun je op deze pagina inloggen en de cursus volgen.
      iframe#livestream.mx-auto(src="https://cleeng.com/embed/A410716947_NL?dimWidth=640&dimHeight=490" frameborder="0" scrolling="no" webkitAllowFullScreen allowFullScreen class="w-1/2" height="600")
    section.bg-green.text-white
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8")
        h2 Kun je íéts specifieker zijn over de inhoud?
        p Jazeker! De training kost je ongeveer 1 dag. Het helpt om een kladblokje bij de hand te houden en zelf wat aantekeningen te maken.
        p <strong>Deze onderwerpen komen aan bod:</strong>
        .flex.flex-wrap.overflow-hidden(class='md:-mx-2')
          ul.list-inside.list-disc.w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            li Encoders
            li Software & hardware switchers
            li CDNs
            li Meerdere streams tegelijk vs. crossposten
            li Signaaltechniek
            li Presentatoren op afstand
            li Live graphics
            li Rekenen met bitrates
          ul.list-inside.list-disc.w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            li Interactiviteit met virtueel publiek
            li Stabiliteit van de stream
            li Bonding
            li Re-broadcasting
            li Q&A’s
            li Paywalls
            li Private streams
            li Begroten van een productie
    section.bg-blue.text-white.text-center
      h2 Wat kun je met deze cursus?
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8")
        .flex.flex-wrap.-mx-2.overflow-hidden(class="")
          div(class='w-full md:my-6 md:px-2 md:w-1/3')
            div(class="md:bg-white md:text-dark max-w-sm md:rounded overflow-hidden md:shadow-lg p-4")
              h3 Zelf livestreams opzetten
              p.text-left.text-sm Voor jezelf of voor een klant. En niet alleen via YouTube, Facebook of Vimeo… We leren je de techniek zodat je zelf íéder CDN kunt inzetten.
          div(class='w-full md:my-6 md:px-2 md:w-1/3')
            div(class="md:bg-white md:text-dark max-w-sm md:rounded overflow-hidden md:shadow-lg p-4")
              h3 Werken met gratis en betaalde tools
              p.text-left.text-sm Broadcasting is dure business. Maar de laatste jaren zijn er een hoop prachtige tools bijgekomen, open source en voor lage prijzen.
              p.text-left.text-sm We laten je een paar opties zien zodat je zelf aan de slag kunt.
          div(class='w-full md:my-6 md:px-2 md:w-1/3')
            div(class="md:bg-white md:text-dark max-w-sm md:rounded overflow-hidden md:shadow-lg p-4")
              h3 Virtuele evenementen hosten
              p.text-left.text-sm Naast de simpele one-way stream gaan we het hebben over interactiviteit en presentatoren op afstand. Met die tools lukt het iedereen om een volledig interactief evenement op te zetten.
    section.bg-orange.text-white.text-center
      h2 Toch eerst de basics nog een keer?
      p Het eerste stukje basiscursus hebben we maandagmiddag live gedaan op de <a href="https://www.facebook.com/groups/videomattie/" target="_blank">Facebook groep Videomatties</a>, kijk het hier terug:
      .flex.justify-center.my-8
        iframe(src="https://player.vimeo.com/video/402235299" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen)
    section.bg-purple.text-white.text-center
      h2 But wait there's more!
      p Om je snel op gang te helpen geven we je ook nog wat mooie tools mee.
      .text-center.my-4
        g-link.btn.text-purple(to="/#livestream") Nu aanmelden
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        div.flex.my-4(class="md:my-16")
          g-image.flex-none.mr-10(src="~/assets/Holographics_icon.png" class="w-1/4 md:w-1/6 self-center")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 20% korting op Holographics
            p Deze software hebben we zelf ontwikkeld om makkelijker en sneller basic graphics toe te voegen aan een livestream. De gratis versie biedt al veel handige opties, maar wie meer mogelijkheden zoekt kan met deze korting aan de slag.
        div.flex.my-4(class="md:my-16")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 15% korting op huuropdrachten via Wedio
            p Wij verhuren onze spullen ook via Wedio, dus via dit platform kun je ook bij ons spullen huren.
          g-image.flex-none.ml-10(src="~/assets/wedio.svg" class="w-1/4 md:w-1/6 self-center")
        div.flex.my-4(class="md:my-16")
          g-image.flex-none.mr-10(src="~/assets/googlesheets.svg" class="w-1/4 md:w-1/6")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 Bitrate calculator
            p Bereken snel hoeveel 4G data je gaat verbruiken voor een livestream met onze calculator. Of, ga je werken met een CDN waarbij je apart voor de data betaald, bereken snel je datakosten.
        div.flex.my-4(class="md:my-16")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 Overzicht van CDNs
            p Krijg toegang tot ons volledige interne overzicht van wereldwijde CDN providers, met de bijbehorende voor en nadelen.
          g-image.flex-none.ml-10(src="~/assets/cdns.svg" class="w-1/4 md:w-1/6")
        div.flex.my-4(class="md:my-16")
          g-image.flex-none.mr-10(src="~/assets/calculator.svg" class="w-1/4 md:w-1/6")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 Productiekosten estimator
            p We hebben een mooie tool ontwikkeld om snel de prijs, kosten en marge voor een productie in te schatten. Deze interne tool geven we je ook mee, zodat je sneller een bedrijf kunt opbouwen rondom livestreaming.
    section.bg-yellow.text-dark.text-center
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        h2 Waarom?
        p Livestreamen is een ontzettend leuke, maar soms ook wel lastige bezigheid. Er zijn een hoop valkuilen en er komt veel techniek bij kijken. En omdat het live is, zijn er geen tweede kansen.
        p COVID-19 heeft de wereld op zijn kop gezet. Livestreaming heeft ineens een veel belangrijkere rol gekregen in onze maatschappij, en daar gaan we zo snel mogelijk veel nieuw talent bij nodig hebben.
    section.bg-pink.text-white.text-center
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        h2 Wie?
        p Wij zijn <a href="https://streammyevent.com/" target="_blank">Stream My Event</a>, een hecht team van vaste en freelance kanjers. Sinds 2011 faciliteren we professionele livestream producties in binnen en buitenland, maar we ontwikkelen ook zelf technieken en software om ons vakgebied te verbeteren. 24-uurs stream vanaf het dak van A'dam toren? Hebben we gedaan. 5-daagse livestream vanuit een rijdend zonneauto konvooi in de Australische outback? Done that. Met onze combinatie van technische en inhoudelijke ervaring weten we iedere productie weer toonaangevend te zijn.
        p De training wordt gegeven door Floris Porro, onze technisch producent.
    section.bg-white.text-white.text-center
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        h2.text-pink Veelgestelde vragen
        p.text-dark.lead Waar geven jullie de cursus?
        p.text-dark In een ruimte met meer dan 100 personen aanwezig. Nee grapje. Gewoon hier op deze site, met een livestream.
        .text-center.my-4
          g-link.btn.bg-pink.text-white(to="/#livestream" class="hover:border-pink hover:text-pink") Hier namelijk, druk dan
        p.text-dark.lead.mt-8 Moet ik heel veel dure spullen hebben om hieraan mee te doen?
        p.text-dark Nee. We gaan vooral heel veel uitleggen, maar we gaan ook laten zien hoe je aan de slag kunt met gratis (open source) software.
        p.text-dark.lead.mt-8 Ben je niet bang dat je hierdoor klanten verliest?
        p.text-dark We hopen natuurlijk net als iedereen dat deze crisis snel weer voorbij gaat, en alles weer bij het oude is. Maar tegelijkertijd denken we dat de wereld zich goed verslikt heeft en nu wat minder fris gaat drinken. Snap je?
        p.text-dark Nee zonder gein, kennis delen kan volgens ons nooit kwaad. Ook niet in een kleine markt als Nederland, daar moeten we het juist van elkaar hebben. Nu de wereld ontdekt heeft dat livestreaming een goed en broodnodig alternatief is op de fysieke bijeenkomst zouden wij het juist heel zwaar gaan krijgen als we over alles geheimzinnig gaan zitten doen.
        p.text-dark.lead.mt-8 Ik weet eigenlijk niet of dit wel iets voor mij is.
        p.text-dark <a href="https://vimeo.com/402235299" target="_blank" class="text-pink hover:text-pink">Kijk dan even op Vimeo de 30-minuten basistraining terug</a>, dat geeft een goed idee van wat te verwachten.
        p.text-dark.lead.mt-8 Is het livestream, live-stream, live stream of webcast?
        p.text-dark Ja.
        p.text-dark.lead.mt-8 Ga je het ook hebben over ...?
        p.text-dark Check bovenaan deze pagina even de lijst met onderwerpen. Mis je nog iets? Tweet even naar Floris: <a href="https://twitter.com/florisporro" class="text-pink hover:text-pink">@florisporro</a>. Je mag ook tweeten met gifjes van honden die gekke dingen doen.
</template>

<script>
export default {};
</script>

<style>
</style>
</template>

<script>
export default {
  metaInfo: {
    title: "Dé live spoedcursus voor livestreaming. Van matties, voor matties."
  }
};
</script>
