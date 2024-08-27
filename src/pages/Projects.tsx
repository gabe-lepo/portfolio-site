import PageHero from "../components/PageHero";
import Parallax from "../components/Parallax";

export default function Projects() {
   return(
      <>
         <PageHero title="Projects" subtitle="Some personal projects" classes="is-link" />
         <Parallax minHeight={500} imgSrc="/background-space.jpg" />
         <PageHero title="Projects" subtitle="Some personal projects" classes="is-link" />
         <Parallax minHeight={100} imgSrc="/background-space.jpg" />
         <PageHero title="Projects" subtitle="Some personal projects" classes="is-link" />
         <Parallax minHeight={800} imgSrc="/background-space.jpg" />
         <PageHero title="Projects" subtitle="Some personal projects" classes="is-link" />
      </>
   );
};
