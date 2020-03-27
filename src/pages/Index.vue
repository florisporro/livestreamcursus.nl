<template lang="pug">
  Layout
    section.bg-cursus-red.text-white
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8")
        .flex.flex-wrap.overflow-hidden(class='md:-mx-2')
          .w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            h2 Wat?
            p Een live cursus van ongeveer 1 dag om te leren livestreamen. Van de absolute basics tot geavanceerde concepten. Speciaal toegespitst op de videomattie die het plaatjes maken echt wel onder de knie heeft, en gewoon snel wat moet weten over livestream techniek om aan de slag te kunnen.
            p Kun je er live niet bijzijn? Je kunt het allemaal later nog eens rustig terugkijken.
          .w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            h2 Kosttat?
            p Nu voor de ongeloofelijke early-bird prijs van € 50 inclusief BTW.
            p <strong>That's right</strong>, voor de helft van de daghuur van een FS5 bij Budgetcam krijg jij een dag lang livestream training van een wereldklasse streamnerd.
            p Vanaf maandag gooien we de prijs omhoog naar € 120 inclusief BTW. Early-birden loont!
        .text-center.my-4
          g-link.btn.text-cursus-red(to="/live") Nu aanmelden
    section.bg-cursus-green.text-white
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8")
        h2 Kun je íéts specifieker zijn over de inhoud?
        p We zijn nog volop bezig met het programma, maar we gaan echt zo veel mogelijk doornemen en er is ruim tijd om vragen te beantwoorden.
        p We beginnen om 11 uur 's ochtends en het programma duurt tenminste 4 uur, maar waarschijnlijk wel iets langer.
        p Kun je er niet (helemaal) live bijzijn? Je kunt het allemaal later nog eens rustig terugkijken.
        p <strong>Deze onderwerpen gaan zeker langskomen:</strong>
        .flex.flex-wrap.overflow-hidden(class='md:-mx-2')
          ul.list-inside.list-disc.w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            li Encoders
            li Software & hardware switchers
            li CDNs
            li Meerdere streams tegelijk vs. crossposten
            li Signaaltechniek
            li Presentatoren op afstand
            li Live graphics
          ul.list-inside.list-disc.w-full.overflow-hidden(class='md:my-2 md:px-2 md:w-1/2')
            li Interactiviteit met virtueel publiek
            li Betrouwbaarheid van de stream
            li Bonding
            li Re-broadcasting
            li Q&A’s
            li Paywalls
            li Private streams
    section.bg-cursus-blue.text-white.text-center
      h2 Wat kun je met deze cursus?
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8")
        .flex.flex-wrap.-mx-2.overflow-hidden(class="")
          div(class='w-full md:my-6 md:px-2 md:w-1/3')
            div(class="md:bg-white md:text-cursus-dark max-w-sm md:rounded overflow-hidden md:shadow-lg p-4")
              h3 Zelf livestreams opzetten
              p.text-left.text-sm Voor jezelf of voor een klant. En niet alleen via YouTube, Facebook of Vimeo… We leren je de techniek zodat je zelf íéder CDN kunt inzetten.
          div(class='w-full md:my-6 md:px-2 md:w-1/3')
            div(class="md:bg-white md:text-cursus-dark max-w-sm md:rounded overflow-hidden md:shadow-lg p-4")
              h3 Werken met gratis en betaalde tools
              p.text-left.text-sm Broadcasting is dure business. Maar de laatste jaren zijn er een hoop prachtige tools bijgekomen, open source en voor lage prijzen.
              p.text-left.text-sm We laten je een paar opties zien zodat je zelf aan de slag kunt.
          div(class='w-full md:my-6 md:px-2 md:w-1/3')
            div(class="md:bg-white md:text-cursus-dark max-w-sm md:rounded overflow-hidden md:shadow-lg p-4")
              h3 Virtuele evenementen hosten
              p.text-left.text-sm Naast de simpele one-way stream gaan we het hebben over interactiviteit en presentatoren op afstand. Met die tools lukt het iedereen om een volledig interactief evenement op te zetten.
    section.bg-cursus-purple.text-white.text-center
      h2 But wait there's more!
      p Om je snel op gang te helpen geven we je ook nog wat mooie tools mee.
      .text-center.my-4
        g-link.btn.text-cursus-purple(to="/live") Nu aanmelden
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        div.flex.my-4(class="md:my-16")
          g-image.flex-none.mr-10(src="~/assets/Holographics_icon.png" class="w-1/4 md:w-1/6 self-center")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 20% korting op Holographics
            p Deze software hebben we zelf ontwikkeld om makkelijker en sneller basic graphics toe te voegen aan een livestream. De gratis versie biedt al veel handige opties, maar wie meer mogelijkheden zoekt kan met deze korting aan de slag.
        div.flex.my-4(class="md:my-16")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 Bitrate calculator
            p Bereken snel hoeveel 4G data je gaat verbruiken voor een livestream met onze calculator. Of, ga je werken met een CDN waarbij je apart voor de data betaald, bereken snel je datakosten.
          g-image.flex-none.ml-10(src="~/assets/googlesheets.svg" class="w-1/4 md:w-1/6")
        div.flex.my-4(class="md:my-16")
          g-image.flex-none.mr-10(src="~/assets/cdns.svg" class="w-1/4 md:w-1/6")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 Overzicht van CDNs
            p Krijg toegang tot ons volledige interne overzicht van wereldwijde CDN providers, met de bijbehorende voor en nadelen.
        div.flex.my-4(class="md:my-16")
          div.flex-1.flex.flex-col.justify-center(class="w-full")
            h3 Productiekosten estimator
            p We hebben een mooie tool ontwikkeld om snel de prijs, kosten en marge voor een productie in te schatten. Deze interne tool geven we je ook mee, zodat je sneller een bedrijf kunt opbouwen rondom livestreaming.
          g-image.flex-none.ml-10(src="~/assets/calculator.svg" class="w-1/4 md:w-1/6")
    section.bg-cursus-yellow.text-cursus-dark.text-center
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        h2 Waarom?
        p Livestreamen is een ontzettend leuke, maar soms ook wel lastige bezigheid. Er zijn een hoop valkuilen en er komt veel techniek bij kijken. En omdat het live is, zijn er geen tweede kansen.
        p COVID-19 heeft de wereld op zijn kop gezet. Livestreaming heeft ineens een veel belangrijkere rol gekregen in onze maatschappij, en daar gaan we zo snel mogelijk veel nieuw talent bij nodig hebben.
    section.bg-cursus-pink.text-white.text-center
      .container.mx-auto.max-w-screen-md(class="py-4 md:py-8 text-left")
        h2 Wie?
        p Wij zijn <a href="https://streammyevent.com" target="_blank">Stream My Event</a>. Sinds 2011 faciliteren we professionele livestream producties in binnen en buitenland, maar we ontwikkelen ook zelf technieken en software om ons vakgebied te verbeteren. 24-uurs stream vanaf het dak van A'dam toren? Hebben we gedaan. 5-daagse livestream vanuit een rijdend zonneauto konvooi in de Australische outback? Done that. Met onze combinatie van technische en inhoudelijke ervaring weten we iedere productie weer toonaangevend te zijn.
        p De training wordt gegeven door Floris Porro, onze technisch producent.
</template>

<script>
export default {
	metaInfo: {
		title: "Dé live spoedcursus voor livestreaming. Van matties, voor matties."
	}
};
</script>
