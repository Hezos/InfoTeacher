import NavMenu from "./NavMenu";

export function References(){
    return(
        <div>
            <NavMenu></NavMenu>
            <br></br>
            <div class='container'>
                <h1 class='h3 display-3 text-center' style={{fontFamily:"sans-serif"}}>
                    Referenciák
                </h1>
                <br></br>
                <div class='text-center'>
                     <a class='text-center' href="https://react.dev/"> https://react.dev/ </a>
                    <br></br>
                    <br></br>
                    <a href="https://getbootstrap.com/"> https://getbootstrap.com/ </a>
                    <br></br>
                    <br></br>
                    <a href="https://www.w3schools.com/"> https://www.w3schools.com/ </a>
                    <br></br>
                    <br></br>
                    <a href="https://www.instagram.com/geometricexplanation/"> https://www.instagram.com/geometricexplanation/</a>
                </div>
                
            </div>
        </div>
    );
}

export default References;