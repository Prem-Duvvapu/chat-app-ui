import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
// import ThemeToggle from './components/ThemeToggle';
import useChatData from './hooks/useChatData';
import ChatHeader from './components/ChatHeader';

//Utility function to get the "other" user object from chat participants
function getChatPartner(activeChat, users, currentUser) {
  if (!activeChat)
    return null;

  const otherId = activeChat.participants.find(uid => uid !== currentUser.id);
  return users.find(u => u.id === otherId);
}

const App = () => {
  const {
    currentUser,
    otherUsers,
    chats,
    activeChat,
    setActiveChatId,
    sendMessage,
  } = useChatData();

  const chatPartner = getChatPartner(activeChat, [...otherUsers, currentUser], currentUser);

  return (
    <div className="min-h-scrren bg-gray-100 flex">
      <aside className="w-64 bg-white border-r">
        <div>
          {/* <ThemeToggle /> */}
          <ChatList
            chats={chats}
            users={otherUsers}
            activeChat={activeChat}
            setActiveChatId={setActiveChatId}
          />
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen">
        <ChatHeader chatUser={chatPartner} />

        <ChatWindow
          activeChat={activeChat}
          currentUser={currentUser}
        />

        <MessageInput
          sendMessage={sendMessage}
        />
      </main>
    </div>
  );
}

export default App;