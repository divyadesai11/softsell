'use client';
import { useState } from "react";

export default function ChatWidget({ darkMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { sender: "you", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { sender: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-xl shadow-xl w-80 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-lg font-semibold mb-2">💬 Ask SoftSell</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "you" ? "text-right" : "text-left"}>
            <p className="text-sm"><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        className="border px-2 py-1 w-full rounded"
        placeholder="Type a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} className="mt-2 w-full bg-blue-600 text-white py-1 rounded">
        Send
      </button>
    </div>
  );
}
