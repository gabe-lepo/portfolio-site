interface HeroProps {
   title: string;
   subtitle: string;
   classes?: string;
}

export default function PageHero({title, subtitle, classes}: HeroProps) {
   return(
      <section className={`hero ${classes}`}>
         <div className="hero-body">
            <p className="title has-text-weight-bold">{title}</p>
            <p className="subtitle has-text-weight-light">{subtitle}</p>
         </div>
      </section>
   )
}