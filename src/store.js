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
          "PosterPath":  './src/assets/img/1.jpg',
        },
        {
          "titolo": "Shining",
          "data_di_uscita": "23 maggio 1980",
          "views": 38000000,
          "durata": 144,
          "PosterPath":  './src/assets/img/2.jpg',
        },
        {
          "titolo": "Il sesto senso",
          "data_di_uscita": "2 agosto 1999",
          "views": 32000000,
          "durata": 107,
          "PosterPath":  './src/assets/img/3.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 28000000,
          "durata": 109,
          "PosterPath":  './src/assets/img/4.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 28000000,
          "durata": 109,
          "PosterPath":  './src/assets/img/5.jpg',
        },
        {
          "titolo": "Psycho",
          "data_di_uscita": "16 settembre 1960",
          "views": 28000000,
          "durata": 109,
          "PosterPath":  './src/assets/img/6.jpg',
        },
      
      ]
})