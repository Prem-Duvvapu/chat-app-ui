const ChatHeader = ({ chatUser }) => {
    // Map status to a color
    const statusColor = {
        online: 'bg-green-500',
        away: 'bg-yellow-400',
        offline: 'bg-gray-400',
    }[chatUser.status] || 'bg-gray-300';

    return (
        <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <img
                src={chatUser.avatar}
                alt="chatUser avatar"
                className="w-11 h-11 rounded-full border-[2.5px] border-blue-400 shadow-sm"
            />

            <div>
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {chatUser.username}
                </div>
                <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full mr-1 ${statusColor}`}></span>
                    <span
                        className={`text-xs ${
                        chatUser.status === "online"
                        ? "text-green-600 dark:text-green-400"
                        : "text-gray-500"
                        }`}
                    >
                        {chatUser.status === "online" ? "Online" : "Last seen..."}
                </span>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
