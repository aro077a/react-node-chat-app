import React from 'react'
import { Message } from 'components'

import './Home.scss'

const Home = () => (
    <section className='home'>
        <Message
            avatar='https://pickaface.net/gallery/avatar/20151205_194059_2696_Chat.png'
            text="Hello friend , how are u ?"
            date='Mon Sep 23 2019 23:30:00' />

        <Message
            avatar='https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
            text="Hello , I'm fine u ?"
            date='Mon Sep 23 2019 23:59:00'
            isMe={true}
            isReaded={true}
        />
    </section>
);


export default Home