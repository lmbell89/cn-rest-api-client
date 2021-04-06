import React, { useState } from 'react'
import Card from  '@material-ui/core/Card'
import CardActions from  '@material-ui/core/CardActions'
import CardContent from  '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'

import Comment from './Comment'
import CommentForm from './CommentForm'

const Post = ({ content, comments }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card variant="outlined" style={{ margin: '10px' }}>
      <CardContent>
        {content}
      </CardContent>

      <CardActions>

        <IconButton
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChatBubbleIcon/>
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentForm />
          {comments.map(comment => <Comment content={comment.content} />)}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Post