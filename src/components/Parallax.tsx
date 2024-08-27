import "../css/parallax.css"

interface Props {
   minHeight: number
   imgSrc: string
}

export default function Parallax({minHeight, imgSrc}: Props) {
   return (
      <div
         className="parallax"
         style={{
            minHeight: minHeight,
            backgroundImage: `url(${imgSrc})`
         }}
      ></div>
   )
}