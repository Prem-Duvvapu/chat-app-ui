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
    <div>
      <aside>
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
      <main>
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