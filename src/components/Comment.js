import React from 'react'
import Card from  '@material-ui/core/Card'
import CardContent from  '@material-ui/core/CardContent'

export const Comment = ({content}) => {
  return (
    <Card variant="outlined" className="comment">
      <CardContent>
        {content}
      </CardContent>      
    </Card>
  )
}

export default Comment