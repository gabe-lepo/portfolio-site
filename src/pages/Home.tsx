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
                     <p>This is some card content</p>
                  </Card>
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
               <div className="cell">
                  <Card title="Temp card" subtitle="subtitle" imgSrc="/favicon.ico">
                     <p>card content</p>
                  </Card>   
               </div>
            </div>
         </div>
      </>
   );
};
