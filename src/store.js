import { reactive } from "vue";

export const store = reactive({

    searchText: "",
    loading: false,
    moviePlaylist : [
        {
          "titolo": "L'Esorcista",
          "data_di_uscita": "26 dicembre 1973",
          "views": 45000000,
          "durata": 122,
          "category" : 'Top Rating',
          "PosterPath":  './src/assets/img/1.jpg',
        },
        {
          "titolo": "Shining",
          "data_di_uscita": "23 maggio 1980",
          "views": 38000000,
          "durata": 144,
          "category" : 'Latest Movie',
          "PosterPath":  './src/assets/img/2.jpg',
        },
        {
          "titolo": "Il sesto senso",
          "data_di_uscita": "2 agosto 1999",
          "views": 32000000,
          "durata": 107,
          "category" : 'Coming Soon',
          "PosterPath":  './src/assets/img/3.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 28000000,
          "durata": 109,
          "category" : 'TV Series',
          "PosterPath":  './src/assets/img/4.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 28000000,
          "durata": 109,
          "category" : 'Top Rating',
          "PosterPath":  './src/assets/img/5.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 28000000,
          "durata": 109,
          "category" : 'Latest Movie',
          "PosterPath":  './src/assets/img/6.jpg',
        },
      
      ],
      newsArray : [
        {
          title : 'Actor The Concept Movie High Concept Theory See The Post',
          imagePath : './src/assets/img/blog.jpg'
        },
        {
          title : 'Consequat Nam Lectus Nibh Aucibus It Has Turpis',
          imagePath : './src/assets/img/blog2.jpg'
        },
        {
          title : 'Nam Lectus Nibh Consequat     Aucibus Turpis it Has',
          imagePath : './src/assets/img/blog3.jpg'
        },
        {
          title : 'Bring Me The Head Of Alfredo Garcia Best Movie In',
          imagePath : './src/assets/img/blog4-570x570.jpg'
        },
        {
          title : 'Pump Action Interaction English Action Movie (2020)',
          imagePath : './src/assets/img/blog5-570x570.jpg'
        },
      ],
      socialIconArray : [
                
        {
            iconPath : './src/assets/img/social/facebook-f.svg',
            testo : 'ciao'
        },
        {
            iconPath : './src/assets/img/social/twitter.svg',
            testo : 'ciao'
        },
        {
            iconPath : './src/assets/img/social/linkedin-in.svg',
            testo : 'ciao'
        },
        {
            iconPath : './src/assets/img/social/instagram.svg',
            testo : 'ciao'
        },
        {
            iconPath : './src/assets/img/social/google-plus-g.svg',
            testo : 'ciao'
        },

        
        ]
})