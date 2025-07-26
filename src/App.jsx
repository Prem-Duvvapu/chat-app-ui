import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
// import ThemeToggle from './components/ThemeToggle';
import useChatData from './hooks/useChatData';

const App = () => {
  const {
    currentUser,
    otherUsers,
    chats,
    activeChat,
    setActiveChatId,
    sendMessage,
  } = useChatData();

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

      <main className="flex-1 flex flex-col">
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