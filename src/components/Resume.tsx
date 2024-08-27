// Credit to react-pdf for most of this
// https://www.npmjs.com/package/react-pdf
// https://github.com/wojtekmaj/react-pdf/blob/main/sample/create-react-app-5/src/Sample.tsx

import { useState, useCallback } from "react"
import { useResizeObserver } from "@wojtekmaj/react-hooks"
import { Document, Page, pdfjs } from "react-pdf"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import type { PDFDocumentProxy } from 'pdfjs-dist'

const resizeObserverOptions = {}
const maxWidth = 1000

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
   'pdfjs-dist/build/pdf.worker.min.mjs',
   import.meta.url,
).toString()

export default function Resume() {
   const [numPages, setNumPages] = useState<number>();
   const [currentPage, setCurrentPage] = useState<number>(1)
   const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
   const [containerWidth, setContainerWidth] = useState<number>()

   const onResize = useCallback<ResizeObserverCallback>((entries) => {
      const [entry] = entries

      if (entry) {
         setContainerWidth(entry.contentRect.width)
      }
   }, []);

   useResizeObserver(containerRef, resizeObserverOptions, onResize)

   function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
      setNumPages(nextNumPages)
   }

   function previousPage() {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
   }
   function nextPage() {
      setCurrentPage(prevPage => Math.min(prevPage + 1, numPages || prevPage))
   }

   return(
      <div className="" ref={setContainerRef}>
         <div className="box has-text-centered">
            <button className="button is-primary" onClick={previousPage} disabled={currentPage <= 1}>
               {"<"}
            </button>
            <span className="">
               Page {currentPage} of {numPages}
            </span>
            <button className="button is-primary" onClick={nextPage} disabled={currentPage >= (numPages || 0)}>
               {">"}
            </button>
         </div>
         <Document file={'/resume.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
               pageNumber={currentPage}
               width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
            />
         </Document>
      </div>
   )
}