import NavMenu from "./NavMenu";

export function Details(){
    return(
        <div>
            <NavMenu></NavMenu>
            <div class="container">
                <br></br>
                <h1 class='h3 display-3 text-center' style={{fontFamily:"sans-serif"}}>
                    Jelenlegi projektem részletei
                </h1>
                <br></br>
                <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
                    Mindig is úgy gondoltam, hogy matematikát szemléltetni egyszerübb ábrákkal és rajzokkal. A régebbi időkben is a legtöbb feladatot és levezetést is először geometriai módszerekkel és felvázolással oldották meg. Ha csak szöveget írnánk végig, akkor hamar unalmas lenne a diákoknak, persze egy minimális szöveg szükséges, ahhoz hogy a gondolatmenetet és a koncepciót felvezessük. Ezért gondoltam, hogy inkább egy olyan megközelítést használok ami több képen és rajzon keresztül próbál ösztönzőbb lenni a matematika tanuláshoz.
                </p>
                <h2 style={{fontFamily:"sans-serif"}}>
                    Mit nem tartok helyénvalónak a matematika oktatásban:
                </h2>
                <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
                    Iskolás koromban még én magam is unalmasnak tartottam olvasni a tankönyveket. Utólag visszanézve, hogyan és milyen módon van felosztva a tananyag a könyvekben felépítésüket tekintve szerintem nem a leg átláthatóbb. Persze nem várható el, hogy minden a leges legmélységekig el legyen magyarázva a kör területének számítását csak középiskolás koromban 12.-ben mutatták meg, hogy hogyan is jön ki r<sup>2</sup><span>&times;</span> &#960;. Ha nem néznék bele az egyetemi jegyzeteimbe én sem tudnám levezetni a számítást. Viszont azt nem tartom helyénvalóan, hogy a tananyag úgy van megszervezve, hogy a területszámítás, ahol a négyzetméterről beszélnek hamarabb van mint a hatványozás. Szerintem nem reális az, hogy nem ismertetjük a koncepciót, mielőtt használnánk. Itt megjegyezném, hogy a kör területe kivétel, mert a képlet használata lehetséges, anélkül, hogy levezessük a számítását.
                </p>
                <h2 style={{fontFamily:"sans-serif"}}>
                    Milyen elképzeléseim vannak a változtatásra:
                </h2>
                <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
                    Én törekedtem egy másik struktúrát felállítani, ami az egymásra épülő témakörök között nem hagy ilyen mélyedéseket. Az oldal üdvözlő lapján egy táblázat található, ami a meghatározott témaköröket, mint egy faként próbálja feltüntetni. Nem mondom, hogy tökéletes, de szerintem a vizuális szemláltetést érintve megállja a helyét.
                </p>
                <h2 style={{fontFamily:"sans-serif"}}>
                    Milyen egyszerűnek gondoltam a megvalósítást:
                </h2>
                <p class="text-justify h4" style={{fontFamily:"sans-serif"}}>
                    A projekt lassabb ütemben halad, mint terveztem, mivel én is a szövegekből és a gyakorlatból értettem meg a matematikát ezért néha nekem is nehéz olyan ábrákat felrajzolnom, hogy érdekes és informátív maradjon egyszerre. Mindenesetre kitartok az elvem mellett, hogy oktatást lehet szórakoztatóan és élvezetesen is végezni.
                </p>
            </div>
        </div>
    )
}

export default Details;