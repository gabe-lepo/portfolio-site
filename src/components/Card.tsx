interface CardProps {
   imgSrc?: string
   title: string
   subtitle?: string
   children?: React.ReactNode
}

export default function Card(props: CardProps) {
   return(
      <div className="card">
         <div className="card-content">
            <div className="media">
               <div className="media-left">
                  <figure className="image is-64x64">
                     <img
                        src={props.imgSrc}
                        alt="Missing source"
                     />
                  </figure>
               </div>
               <div className="media-content">
                  <p className="title is-4">{props.title}</p>
                  <p className="subtitle is-6">{props.subtitle}</p>
               </div>
            </div>
            <hr />
            <div className="content">
               {props.children}
            </div>
         </div>
      </div>
   )
}