// import Card from "../components/Card";
import PageHero from "../components/PageHero";
import Resume from "../components/Resume";

export default function Home() {
   return(
      <>
         <PageHero title="Home" subtitle="Resume and info about me" classes="is-link"/>
         <div className="section">
            <Resume />
         </div>
      </>
   );
};
