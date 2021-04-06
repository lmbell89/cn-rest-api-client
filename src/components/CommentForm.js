import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const CommentForm = () => {
  const [text, setText] = useState("")

  return (
    <Box className="commentForm">
      <TextField
        multiline
        className="commentInput"
        value={text}
        label="Add A Comment"
        rows={0}
        onChange={(e) => setText(e.target.value)}
      />

      <Button 
        variant="contained" 
        color="primary" 
      >
        Save
      </Button>
    </Box>
  )
}

export default CommentForm