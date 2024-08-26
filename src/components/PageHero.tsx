interface HeroProps {
   title: string
   subtitle: string
   classes?: string
}

export default function PageHero(props: HeroProps) {
   return(
      <section className={`hero ${props.classes}`}>
         <div className="hero-body">
            <p className="title has-text-weight-bold">{props.title}</p>
            <p className="subtitle has-text-weight-light">{props.subtitle}</p>
         </div>
      </section>
   )
}