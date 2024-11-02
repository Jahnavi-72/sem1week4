function greet(languagecode){
    let greeting;
    switch(languagecode){
        case 'en':{
            console.log("Hello");
            break;}
        case 'fr':{
            console.log("Bomjour");
            break;}
        case 'es':{
            console.log("Hola");
            break;}
        case 'de':{
            console.log("hallo");
            break;}
        case 'ge':{
            console.log("Hallo");
            break;}
}
}
greet('en');
greet('es');
greet('de');
greet('ge');
greet('fr');

