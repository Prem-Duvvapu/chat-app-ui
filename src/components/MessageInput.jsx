import { useState } from "react";

function MessageInput({ sendMessage }) {
    const [value, setValue] = useState('');

    const handleSend = e => {
        e.preventDefault();
        if (!value.trim())
            return;

        sendMessage(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSend} className="p-4 bg-white border-t flex">
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