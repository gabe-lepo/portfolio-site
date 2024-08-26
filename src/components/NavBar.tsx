import { useLocation } from "react-router-dom"

export default function NavBar() {
   const locationPath = useLocation().pathname

   return(
      <div className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
         <div className="navbar-brand">
            <a
               className={`navbar-item ${locationPath === "/" ? "has-background-grey-dark has-text-weight-bold" : ""}`}
               href="/"
            >Home</a>
            <a
               className={`navbar-item ${locationPath === "/projects" ? "has-background-grey-dark has-text-weight-bold" : ""}`}
               href="/projects"
            >Projects</a>
            <a
               className={`navbar-item ${locationPath === "/carstuff" ? "has-background-grey-dark has-text-weight-bold" : ""}`}
               href="/carstuff"
            >Car Stuff</a>
         </div>
      </div>
   )
}
