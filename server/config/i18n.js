const i8next=require('i8next');
const Backend=require('i18next-fs-backend');
const LanguageDetector=require('i8next-http-middleware').LanguageDetector;

i18next
   .use(Backend)
   .use(LanguageDetector)
   .init({
    backend:{
        loadPath:'./locales/{{lng}}/{{ns}}.json',

    },
    fallbacklag:'en'
    preload:['en','fr','es'];
    detection:{
        order:{'querystring','cookie','header'};
        caches:['cookie'],
    }
   });

   module.exports=i8next;
   

