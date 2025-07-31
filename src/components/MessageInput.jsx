import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function MessageInput({ sendMessage }) {
    const [value, setValue] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const onEmojiClick = (emojiData) => {
        setValue(prev => prev + emojiData.emoji);
    };

    const handleSend = e => {
        e.preventDefault();
        if (!value.trim())
            return;

        sendMessage(value);
        setValue('');
        setShowEmojiPicker(false);
    };

    return (
        <form onSubmit={handleSend} className="p-4 bg-white border-t flex">
            <button
                type="button"
                onClick={() => setShowEmojiPicker(v => !v)}
                className="mr-2 text-2xl"
                aria-label="Toggle Emoji Picker"
            >
                😊
            </button>
            {showEmojiPicker && (
                <div className="absolute bottom-14 left-0 z-10">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
            )}

            <input 
                className="flex-1 p-2 border rounded focus:outline-none focus:ring"
                placeholder="Type a message..."
                value={value}
                onChange={e => setValue(e.target.value)}
            />

            <button
                type="submit"
                className="ml-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Send
            </button>
        </form>
    )
}

export default MessageInput;