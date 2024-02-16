import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
            <div style={{ height: '100vh', overflow: 'hidden' }}>
            <PrettyChatWindow
                projectId='2b5451d0-88a8-4ecb-8d7d-ee8f19a0aba4'
                username= {props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh', overflow: 'hidden' }}
                containerStyle={{ overflow: 'hidden' }}
            />
            </div>
            )
}

export default ChatsPage

