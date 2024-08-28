import React from "react"
import "../css/buttonHover.css"

interface NavBarProps {
   selectedPage: "home" | "projects" | "carstuff"
   setSelectedPage: React.Dispatch<React.SetStateAction<"home" | "projects" | "carstuff">>
}

export default function NavBar({selectedPage, setSelectedPage}: NavBarProps) {
   return(
      <div className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
         <div className="navbar-brand">
            <button
               className={
                  `navbar-item hoverable
                  ${selectedPage === "home" ? "has-background-grey-dark has-text-weight-bold" : ""}`
               }
               onClick={() => setSelectedPage("home")}
            >Home</button>
            <button
               className={
                  `navbar-item hoverable
                  ${selectedPage === "projects" ? "has-background-grey-dark has-text-weight-bold" : ""}`
               }
               onClick={() => setSelectedPage("projects")}
            >Projects</button>
            <button
               className={
                  `navbar-item hoverable
                  ${selectedPage === "carstuff" ? "has-background-grey-dark has-text-weight-bold" : ""}`
               }
               onClick={() => setSelectedPage("carstuff")}
            >Car Stuff</button>
         </div>
      </div>
   )
}
