export default function NavBar() {
   return(
      <div className="navbar" role="navigation" aria-label="main navigation">
         <div className="navbar-brand">
            <a className="navbar-item title" href="/">Home</a>
         </div>

         <div className="navbar-menu">
            <div className="navbar-start">
               <a className="navbar-item" href="/projects">Projects</a>
               <a className="navbar-item" href="/carstuff">Car Stuff</a>
            </div>
         </div>
      </div>
   )
}
