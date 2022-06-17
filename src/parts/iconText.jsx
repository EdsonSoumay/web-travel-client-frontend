import React from 'react'
import Button from 'elements/Button'
import { useHistory } from 'react-router-dom'


export default function IconText() {
 const history = useHistory();

  return (
        <Button className="brand-text-icon" href = "" type ="link" 
        // onClick = {history.push(`/`)}
        >
            Stay<span className="text-gray-900">cation.</span>
        </Button>
    )
}
