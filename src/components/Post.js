import React, { useState } from 'react'
import { Button, Card, CardContent, CardActions, Accordion } from '@material-ui/core'

import Comment from './Comment'

const Post = ({ content, comments, getComments }) => {
  const [open, setOpen] = useState(false)
  return (
    <Card variant="outlined" style={{ margin: '10px' }}>
      <CardContent>
        {content}
      </CardContent>

      <CardActions>
        <Button onClick={() => setOpen(!open)}>
          Comments
        </Button>

      </CardActions>
    </Card>
  )
}

export default Post