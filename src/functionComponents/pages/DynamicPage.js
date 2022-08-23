import React from "react"
import { useParams } from 'react-router-dom'

const DynamicPage = () => {
  const {id} = useParams();
  return (
    <div>
      <h3>Page for {id}</h3>
    </div>
  )
}
export default DynamicPage