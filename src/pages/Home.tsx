import Card from "../components/Card";
import PageHero from "../components/PageHero";

export default function Home() {
   return(
      <>
         <PageHero title="Home" subtitle="Resume and info about me" classes="is-link"/>
         <Card title="Gabriel Lepoutre" subtitle="A subtitle!" imgSrc="/favicon.ico">
            <p>This is some card content</p>
         </Card>
      </>
   );
};
