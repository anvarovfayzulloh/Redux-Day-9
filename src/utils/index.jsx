import { Suspense } from "react"

const SuspenseComponent = ({children}) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
        {children}
    </Suspense>
  )
}

export { SuspenseComponent }

import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading type={"bars"} color={"black"} height={"100px"} width={"100px"} />
);
 
export { Loading };