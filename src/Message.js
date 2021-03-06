import React from 'react'
import './Message.css'
import { Card, Typography, CardContent } from '@material-ui/core'
function Message({username, message}) {
    const isUser = username == message.username
    return (
    <div className={`message ${isUser && " message__user"}` }>
        <p>{message.username}</p>
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
            <CardContent>
                <Typography color="white" variant="h5" component="h2">
                    <p className="messages">{message.message}</p>
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}

export default Message
