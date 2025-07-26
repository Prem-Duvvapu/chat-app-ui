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
        <form onSubmit={handleSend} className="">
            <input 
                className=""
                placeholder="Type a message..."
                value={value}
                onClhange={e => setValue(e.target.value)}
            />
            <button
                type="submit"
                className=""
            >
                Send
            </button>
        </form>
    )
}

export default MessageInput;