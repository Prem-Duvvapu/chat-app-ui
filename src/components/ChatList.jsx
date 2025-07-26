function ChatList({ chats, users, activeChat, setActiveChatId }) {
    return (
        <div>
            <h2>Chats</h2>
            <ul>
                {
                    chats.map(chat => {
                        const otherId = chat.participants.find(id => id != "u1");
                        const chatUser = users.find(u => u.id === otherId);

                        return (
                            <li
                                key={chat.id}
                                // className={}
                                onClick={() => setActiveChatId(chat.id)}
                            >
                                <img src={chatUser.avatar} alt={chatUser.username}  className=""/>
                                <span>{chatUser.username}</span>
                                <span
                                    className=""
                                >
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default ChatList;