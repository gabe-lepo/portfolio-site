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
      <div className="card">
         <div className="card-content">
            <div className="media">
               <div className="media-left">
                  <figure className="image is-64x64">
                     <img src="/favicon.ico" alt="Missing icon" />
                  </figure>
               </div>
               <div className="media-content">
                  <p className="title is-4">Resume</p>
                  <p className="subtitle is-6">My old, long-form resume</p>
               </div>
            </div>
            <hr />
            <div className="content" ref={setContainerRef}>
               <Document file={'/resume.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                     pageNumber={currentPage}
                     width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                  />
               </Document>
            </div>
         </div>
         <div className="card-footer has-background-warning has-text-dark has-text-weight-bold">
            <div className="card-footer-item">
               <button className="button is-dark-grey" onClick={previousPage} disabled={currentPage <= 1}>
                  {"<"}
               </button>
            </div>
            <div className="card-footer-item">
               Page {currentPage} of {numPages}
            </div>
            <div className="card-footer-item">
               <button className="button is-dark-grey" onClick={nextPage} disabled={currentPage >= (numPages || 0)}>
                  {">"}
               </button>
            </div>
         </div>
      </div>
   )
}