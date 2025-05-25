'use client';
import React, { useState } from "react";

export default function ChatbotPage() {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { sender: "You", text: input }]);
        setInput("");
        // 這裡可以加入機器人回覆的邏輯
    };

    return (
        <div style={{ maxWidth: 480, margin: "40px auto", border: "1px solid #ddd", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
            <h2 style={{ textAlign: "center", padding: "24px 0 12px 0", margin: 0 }}>Welcome to our chatbot</h2>
            <div style={{ height: 320, overflowY: "auto", padding: 16, background: "#fafafa", borderRadius: 8 }}>
                {messages.length === 0 && (
                    <div style={{ color: "#aaa", textAlign: "center", marginTop: 100 }}>Say hello to start chatting!</div>
                )}
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ margin: "8px 0", textAlign: msg.sender === "You" ? "right" : "left" }}>
                        <span
                            style={{
                                display: "inline-block",
                                background: msg.sender === "You" ? "#d1e7dd" : "#e2e3e5",
                                color: "#333",
                                borderRadius: 16,
                                padding: "8px 16px",
                                maxWidth: "70%",
                                wordBreak: "break-word",
                            }}
                        >
                            <strong>{msg.sender}:</strong> {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", borderTop: "1px solid #eee", padding: 12 }}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                />
                <button
                    onClick={handleSend}
                    style={{
                        marginLeft: 8,
                        padding: "8px 16px",
                        borderRadius: 4,
                        border: "none",
                        background: "#007bff",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}