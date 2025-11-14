import NavMenu from "./NavMenu";

export function Videos(){
    return(
        <div>
            <NavMenu></NavMenu>
            <br></br>
            <p class='h3 display-3 text-center' style={{fontFamily:"sans-serif"}}>
                Nem csak képeket, hanem videókat is készítek egyes koncepciókról.
            </p>
            <br></br>
            <p class="text-start h4" style={{fontFamily:"sans-serif"}}>
                Ezen videóknak a célja, hogy a koncepció minél rövidebb idő alatt elsajátítható legyen, ezért is igyekeztem a hosszukat levágni 1 perc alá az időtartamot tekintve. Itt van néhány példa:
            </p>
            <br></br>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width:'2%'}}></div>
                <div>
                    <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                        Összeadás:
                    </h2>
                    <div class='text-center'>
                        <video style={{width:'100%', height:'100%'}} controls>
                            <source src={require("../assets/Addition.mp4")} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div style={{width:'2%'}}></div>
                <div>
                    <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                        Kivonás:
                    </h2>
                    <div class='text-center'>
                        <video style={{width:'100%', height:'100%'}} controls>
                            <source src={require("../assets/Subtraction.mp4")} type="video/mp4" />
                        </video>
                        </div>
                </div>
                <div style={{width:'2%'}}></div>
                <div>
                     <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                        Szorzás:
                    </h2>
                    <div class='text-center'>
                        <video style={{width:'100%', height:'100%'}} controls>
                            <source src={require("../assets/Multiplication.mp4")} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div style={{width:'2%'}}></div>
                <div>
                    <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                        Osztás:
                    </h2>
                    <div class='text-center'>
                        <video style={{width:'100%', height:'100%'}} controls>
                            <source src={require("../assets/Division.mp4")} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div style={{width:'2%'}}></div>
                <div>
                    <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                        Hatványozás:
                    </h2>
                    <div class='text-center'>
                        <video style={{width:'100%', height:'100%'}} controls>
                            <source src={require("../assets/Exponentiation.mp4")} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div style={{width:'2%'}}></div>
                <div>
                    <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                        Változók:
                    </h2>
                    <div class='text-center'>
                        <video style={{width:'100%', height:'100%'}} controls>
                            <source src={require("../assets/Variables.mp4")} type="video/mp4" />
                        </video>
                    </div>        
                </div>
                <div style={{width:'2%'}}></div>
                <div>
                <h2 class="text-center" style={{fontFamily:"sans-serif"}}>
                    Egyenletrendezés:
                </h2>
                <div class='text-center'>
                    <video style={{width:'100%', height:'90%'}} controls>
                        <source src={require("../assets/Equations.mp4")} type="video/mp4" />
                    </video>
                </div>
                    </div>
                <div style={{width:'2%'}}></div>
                </div>    
        </div>
    );
}

export default Videos;