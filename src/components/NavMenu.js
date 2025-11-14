export function NavMenu() {

  return (
    <div>
      <div class="navbar navbar-expand-lg bg-light container-fluid">
         <div class="nav-item active h-10" style={{width:"95%"}}>
          <p></p>
        </div>
           <div class='text-center'>
            <a class="btn info w-100" href='/' style={{fontFamily:"sans-serif", width:"80%"}}>Kezdőlap</a>
          </div>
          <div class='text-center'>
            <a class="btn info w-100" href='/pictures' style={{fontFamily:"sans-serif", width:"80%"}}>Képek</a>
          </div>
          <div class='text-center'>
            <a class="btn info w-100" href='/videos' style={{fontFamily:"sans-serif", width:"80%"}}>Videók</a>
          </div>
           <div class='text-center'>
            <a class="btn info w-100" href='/details' style={{fontFamily:"sans-serif", width:"80%"}}>Részletek</a>
          </div>
          <div class='text-center'>
            <a class="btn info w-100" href='/references' style={{fontFamily:"sans-serif", width:"80%"}}>Referenciák</a>
          </div>
      </div>
    </div>
  );
}

export default NavMenu;