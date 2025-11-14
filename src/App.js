import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavMenu from './components/NavMenu';


function App() {
return (
 <div>
    <NavMenu/>
    <div class='container'>
        <br></br>
        <h1 class='h3 display-3 text-center' style={{fontFamily:"sans-serif"}}>
            Az én hobbim: alkalmazások készítése
        </h1>
        <div class='text-center'  style={{width: "100%" }}>
                 <img style={{width:'50%'}} src={require("../src/assets/MainPage.jpg")} alt='Profile image goes here'/>
            
        </div>
        <br></br>
        <h2 style={{fontFamily:"sans-serif"}}>
            Érdeklődésem kezdete
        </h2>
             <p class="text-justify h4" style={{fontFamily:"sans-serif"}} >
                Már középiskolás korom óta fejlesztek alkalmazásokat. Az évek során rengeteg fajta alkalmazás készítésével foglalkoztam. A konzolosok és terminálosoktól kezdve a mobilos alkalmazásokon át egészen az asztali alkalmazásokig. 
            </p>
        <br></br>
        <h2  style={{fontFamily:"sans-serif"}}>
            Az alkalmazások témái
        </h2>
        <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
            Fejlesztés közben igen sok témát adoptáltam az alkalmazásaimhoz. Foglalkoztam játékok tervezésével, hobbi és sorozat nyílvántartó programmal, webáruházzal, de még árunyílvántartó programmal is.
        </p>
        <br></br>
        <h2  style={{fontFamily:"sans-serif"}}>
            Tapasztalat a fejlesztői eszközökkel
        </h2>
        <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
            Sosem ragadtam le egy fejlesztői eszköznél, már az alkalmazások sokrétűsége megkövetelte, hogy több programozási nyelvet, fejlesztőkörnyezetet, vagy akár operációs rendszert használjak. De még, ha egy fejlesztői környezettel meg is tudtam oldani egy alkalmazás összebarkácsolását, akkor is megpróbáltam ugyanazt összerakni egy másikkal, csak hogy lássam melyikkel milyen egyszerű, vagy nehéz.
        </p>
        <br></br>
        <h2 style={{fontFamily:"sans-serif"}}>
            Mennyire legyen segítőkész egy fejlesztőeszköz?
        </h2>
        <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
            Tapasztalatom szerint az a legjobb, ha egy fejlesztőkörnyezet a nagyobb feladatokat ellátja a fejlesztő helyett, viszont addig nem mennék el, hogy a blokk alapú programozási nyelvek, olyan nagyon szuperek lennének. A limitációjuk miatt valamikor egyszer úgy is át kell váltani szöveges alapú nyelvekre.
        </p>
        <br></br>
        <h2 style={{fontFamily:"sans-serif"}}>
            Jelenlegi projektem:
        </h2>
        <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
            Mostanában egy matematika oktatást segítő weboldalt készítek. Ennek részletei az alábbi linken található:
            </p>
        <a href='/details'>
            Részletek
        </a>
        <br></br>
    </div>
 </div>
    );
}

export default App;
