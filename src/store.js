import { reactive } from "vue";

export const store = reactive({

    searchText: "",
    loading: false,
    moviePlaylist : [
        {
          "titolo": "L'Esorcista",
          "data_di_uscita": "26 dicembre 1973",
          "views": 450,
          "durata": 122,
          "category" : 'Top Rating',
          "PosterPath":  './src/assets/img/1.jpg',
          "Genres" : 'Drama, Action Release'
        },
        {
          "titolo": "Shining",
          "data_di_uscita": "23 maggio 1980",
          "views": 380,
          "durata": 144,
          "category" : 'Latest Movie',
          "PosterPath":  './src/assets/img/5-1.jpg',
        },
        {
          "titolo": "Il sesto senso",
          "data_di_uscita": "2 agosto 1999",
          "views": 320,
          "durata": 107,
          "category" : 'Coming Soon',
          "PosterPath":  './src/assets/img/3.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 280,
          "durata": 109,
          "category" : 'TV Series',
          "PosterPath":  './src/assets/img/4.jpg',
        },
        {
          "titolo": "Sinister",
          "data_di_uscita": "16 settembre 1960",
          "views": 280,
          "durata": 109,
          "category" : 'Top Rating',
          "PosterPath":  './src/assets/img/3 (1).jpg',
        },
        {
          "titolo": "Non aprite quella porta",
          "data_di_uscita": "16 settembre 1960",
          "views": 280,
          "durata": 109,
          "category" : 'Latest Movie',
          "PosterPath":  './src/assets/img/2.jpg',
        },
      
      ],
      newsArray : [
        {
          title : 'Actor The Concept Movie High Concept Theory See The Post',
          imagePath : './src/assets/img/blog.jpg',
          date : 'April 14, 2020'
        },
        {
          title : 'Consequat Nam Lectus Nibh Aucibus It Has Turpis',
          imagePath : './src/assets/img/blog2.jpg',
          date : 'April 14, 2020'
        },
        {
          title : 'Nam Lectus Nibh Consequat     Aucibus Turpis it Has',
          imagePath : './src/assets/img/blog3.jpg',
          date : 'April 14, 2020'
        },
        {
          title : 'Bring Me The Head Of Alfredo Garcia Best Movie In',
          imagePath : './src/assets/img/blog4-570x570.jpg',
          date : 'April 14, 2020'
        },
        {
          title : 'Pump Action Interaction English Action Movie (2020)',
          imagePath : './src/assets/img/blog5-570x570.jpg',
          date : 'April 14, 2020'
        },
      ],
      socialIconArray : [
                
        {
            iconPath : './src/assets/img/social/facebook-f.svg',
            
        },
        {
            iconPath : './src/assets/img/social/twitter.svg',
         
        },
        {
            iconPath : './src/assets/img/social/linkedin-in.svg',
           
        },
        {
            iconPath : './src/assets/img/social/instagram.svg',
           
        },
        {
            iconPath : './src/assets/img/social/google-plus-g.svg',
          
        },

        
        ]
})