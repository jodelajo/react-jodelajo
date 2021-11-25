import Message from "../components/message/Message"

export const portfolio = [
    {
        title: "More CSS",
        website: null,
        github: "https://github.com/jodelajo/message-in-a-lighter",
        category: {
          wordpress: false,
          react: false,
          logo: true,
          css: true,
          PHP: false
        },
        code: Message,
        description: "Nieuw logo voor nieuwe app. Alleen CSS.",
        kenmerken: null
      },
      {
        title: "Pure CSSSSSSS",
        website: "https://jodelajo.nl/",
        github: "https://github.com/jodelajo/convert-wordpress-to-react-website",
        category: {
          wordpress: false,
          react: true,
          logo: true,
          css: true,
          PHP: false
        },
        image: "/portfolio/landingpage3.png",
        description: "CSS oefening: Ik heb mijn oude landingpage in WordPress omgebouwd naar een React app en de neon-letters en de button opnieuw gemaakt, maar nu in CSS.",
        kenmerken: null
      },
      {
        title: "It bêste plakje fan Fryslân",
        website: "https://beste-plakje.nl/",
        github: "https://github.com/jodelajo/react-eindproject-frontend-development",
        category: {
          wordpress: false,
          react: true,
          logo: true,
          css: true,
          PHP: false
        },
        image: "/portfolio/beste_plakje_sm.png",
        description: "Deze webapplicatie was mijn eindopdracht voor de opleiding Frontend Developer. De app is een weer-app, die op basis van een puntensysteem bepaalt op welke locatie momenteel het weer het beste is in Friesland. Vervolgens toont de app het dichtstbijzijnde terras. Je kunt de app aanpassen door gebruik te maken van Boosters. Zo kun je extra punten geven voor 'temperatuur', 'zon' en/of 'windkracht'. De gebruiker kan direct inloggen om gebruik te kunnen maken van de app. Voor meer info, zie Github."
    // description: <><p> Deze webapplicatie was mijn eindopdracht voor de opleiding Frontend Developer.</p><p>De app is een weer-app, die op basis van een puntensysteem bepaalt op welke locatie momenteel het weer het beste is in Friesland.Vervolgens toont de app het dichtstbijzijnde terras.</p><p>Je kunt de app aanpassen door gebruik te maken van Boosters. Zo kun je extra punten geven voor 'temperatuur', 'zon' en/of 'windkracht'. De gebruiker kan direct inloggen om gebruik te kunnen maken van de app. Voor meer info, zie Github."</p></>
    ,
  
    kenmerken: null
  },
  {
    title: "React Native Favorite Meal",
    website: null,
    github: "https://github.com/jodelajo/react-native-favorite-meal-app",
    category: {
      wordpress: false,
      react: true,
      logo: false,
      css: false,
      PHP: false
    },
    image: "/portfolio/react_native_favorite_meal_app.png",
    description: "React Native app met diverse navigatie, redux, filter en favorieten",
    kenmerken: ["StackNavigation", "Redux", "filter-logic"]
  },
  {
    title: "Tent op Vlie",
    website: "https://tentopvlie.nl/",
    github: null,
    category: {
      wordpress: true,
      react: false,
      logo: true,
      css: false,
      PHP: false
    },
    image: "/portfolio/tentopvlie_sm.png",
    description: "Deze website is gemaakt om een vakantielocatie te verhuren. In dit geval een tent op Vlieland. Belangrijke voorwaarden voor de site waren: verleidelijk/sfeer, informatief, boekingssysteem. De site staat hoog in de zoekmachines met de woorden “tent te huur Vlieland”.",
    kenmerken: ["Informatief", "Boekingssysteem", "SEO-optimalisatie"]
  },
  {
    title: "React Native CoffeeMachine",
    website: null,
    github: "https://github.com/jodelajo/rn-coffee-machine",
    category: {
      wordpress: false,
      react: true,
      logo: false,
      css: false,
      PHP: false
    },
    image: "/portfolio/react_native_coffeemachine.png",
    description: "In onze fictieve koffie bar hebben wij een koffiezetapparaat staan waarmee je via NFC kan verbinden en je via de app je koffie kan samenstellen. Omdat elke koffiebar andere koffie serveert heeft het backend team een REST API opgezet waarmee je van een apparaat de koffie opties op kunt halen. Je krijgt een lijst van beschikbare stijlen (types), maten en extra's. Per stijl wordt aangegeven welke opties beschikbaar zijn voor welke stijl koffie. Dit gebeurt aan de hand van een array van ids in het type object.",
    kenmerken: ["REST API", "react-navigation 6x", "axios"]
  },
  {
    title: "PHP dynamisch CMS",
    website: null,
    github: "https://github.com/jodelajo/php-cms",
    category: {
      wordpress: false,
      react: false,
      logo: false,
      css: false,
      PHP: true
    },
    image: "/portfolio/php_cms.png",
    description: "Curcus PHP waarin je een dynamische CMS leert bouwen met MySQL en PHPMyAdmin.",
    kenmerken: ["PHP", "MySql", "MyAdmin"]
  },
  {
    title: "Vrolijke Noodzaak",
    website: "https://vrolijkenoodzaak.netlify.app/",
    github: "https://github.com/jodelajo/jet-app",
    category: {
      wordpress: false,
      react: true,
      logo: false,
      css: true,
      PHP: false
    },
    image: "/portfolio/vrolijke_noodzaak.png",
    description: "Deze coach/mediator wilde een nieuwe website met een origineel en vriendelijk uiterlijk. Voor de content management heb ik Sanity geimplementeerd. Zo kan de klant makkelijk nieuwsberichten plaatsen op haar website.",
    kenmerken: ["react", "Sanity CMS"]
  },
  {
    title: "Stichting DBF",
    website: "https://stichtingdbf.nl/",
    github: null,
    category: {
      wordpress: true,
      react: false,
      logo: false,
      css: false,
      PHP: false
    },
    image: "/portfolio/DBF_sm.png",
    description: "Van Stichting DBF kreeg ik de opdracht om een nieuwe website te maken die weinig onderhoud vergt voor hen. Zij wilden een website die vooral de functie van folder kreeg; Algemene informatie over de organisatie. Daarnaast moest het bijzondere vastgoed goed uitkomen op de website. De website biedt ook een actueel overzicht van beschikbare panden.",
    kenmerken: ["Stijlvolle folder-website", "Actueel aanbod vastgoed"]
  },
  {
    title: "React Native game",
    website: null,
    github: "https://github.com/jodelajo/react-native-second-app",
    category: {
      wordpress: false,
      react: true,
      logo: false,
      css: false,
      PHP: false
    },
    image: "/portfolio/react_native_app.png",
    description: "Klein spelletje gebouwd in react native als oefening: Gebruiker kiest getal en de app moet raden welk. Gebruiker geeft hints als 'lager' of 'hoger'. Het spelletje is over als de app het getal goed heeft geraden.",
    kenmerken: ["Geschikt voor Android en Apple", "Oefening met React Native"]
  },
  {
    title: "Jodelajo 2020",
    website: "https://jodelajo.nl/jodelajo/",
    github: null,
    category: {
      wordpress: true,
      react: false,
      logo: true,
      css: false,
      PHP: false
    },
    image: "/portfolio/jodelajo_2020_sm.png",
    description: "Mijn laatste website in wordpress gemaakt. Voor het ontwerp van deze site heb ik veel gebruik gemaakt van Photoshop en Illustrator.",
    kenmerken: ["Responsive", "Photoshop", "Illustrator"]
  },
  {
    title: "React Native Great Places",
    website: null,
    github: "https://github.com/jodelajo/react-native-great-places-app",
    category: {
      wordpress: false,
      react: true,
      logo: false,
      css: false,
      PHP: false
    },
    image: "/portfolio/react_native_great_places.png",
    description: "React Native applicatie die gebruik maakt van native features, zoals de camera, googleMaps en locatie.",
    kenmerken: [
      "Native features",
      "camera, maps, location",
      "SQlite",
      "React Navigation 5+",
      "StackNavigation",
      "Redux"
    ]
  },
  {
    title: "MCM Taller de cosas",
    website: "https://mcmtallerdecosas.es/",
    github: null,
    category: {
      wordpress: true,
      react: false,
      logo: false,
      css: false,
      PHP: false
    },
    image: "/portfolio/mcm_tallerdecosas.png",
    description: "Website met webshop-look. Voor een beginnende ondernemer heb ik gekozen voor een wordpress website. Dit vanwege de toegankelijkheid voor de gebruiker. Er is gekozen voor een website, omdat een shop best duur is. Zeker als de verkoop nog moet loskomen.",
    kenmerken: ["Responsive"]
  },
  {
    title: "Kock Volhoudbaar Advies",
    website: "https://kockvolhoudbaaradvies.nl/",
    github: null,
    category: {
      wordpress: true,
      react: false,
      logo: true,
      css: false,
      PHP: false
    },
    image: "/portfolio/kva2014.png",
    description: "Voor het adviesbureau Kock Volhoudbaar advies mocht ik de gehele css inclusief website ontwerpen. Deze website is alweer van 2014 en momenteel bouw ik aan een nieuwe, modernere site.",
    kenmerken: ["Responsive"]
  },
  {
    title: "De Haringvrouw",
    website: "https://haringvrouw.nl/",
    github: null,
    category: {
      wordpress: true,
      react: false,
      logo: true,
      css: false,
      PHP: false
    },
    image: "/portfolio/haringvrouw.png",
    description: "De Haringvrouw is een webshop. De site is Mobile First ontworpen; dat betekent dat de basis van de site in eerste instantie gemaakt is voor mobile devices. Voor deze website waren belangrijk: shop Duidelijke en herkenbare look & feel. Zeer geschikt voor kleinere beeldschermen.",
    kenmerken: ["Responsive", "Mobile-first", "Woo-Commerce"]
  }
]