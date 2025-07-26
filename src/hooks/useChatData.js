import { useState } from "react";
import mockUsers from "../data/mockUsers";
import mockChats from "../data/mockChats";

const useChatData = () => {
    const currentUser = mockUsers.find(user => user.id === "u1");
    const [chats, setChats] = useState(mockChats);
    const [activeChatId, setActiveChatId] = useState(chats[0].id);

    // List of other users
    const otherUsers = mockUsers.filter(user => user.id !== currentUser.id);

    // Get active chat object
    const activeChat = mockChats.find(chat => chat.id === activeChatId);

    //Utility to send message
    function sendMessage(text) {
        if (!activeChatId || !text.trim())
            return;

        console.log(chats);
        console.log(activeChatId);

        setChats(prevChats =>
            prevChats.map(chat =>
                chat.id === activeChatId ? {
                    ...chat,
                    messages:[
                        ...chat.messages,
                        {
                            id: `m${chat.messages.length + 1}`,
                            senderId: currentUser.id,
                            text,
                            timestamp: new Date().toISOString(),
                        }
                    ],
                } : chat
            )
        )
    }

    return {
        currentUser,
        otherUsers,
        chats,
        activeChat,
        setActiveChatId,
        sendMessage,
    };
}

export default useChatData;