import Card from "../components/Card";
import PageHero from "../components/PageHero";

export default function Home() {
   return(
      <>
         <PageHero title="Home" subtitle="Resume and info about me" classes="is-link"/>
         <div className="section">
            <div className="grid is-col-min-15 is-gap-1">
               <div className="cell">
                  <Card title="Gabriel Lepoutre" subtitle="A subtitle!" imgSrc="/favicon.ico">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </p>
                  </Card>
               </div>
            </div>
         </div>
      </>
   );
};
