import {Route,Routes} from  "react-router-dom"

import React from 'react'
import Dashboard from "../Components/Dashboard/Dashboard"

function AllRoute() {
  return (
    <div>
        <Routes>
<Route path="/" element={<Dashboard />} />

        </Routes>

    </div>
  )
}

export default AllRoute