// hooks/useChat.js
import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user's message
      setMessages([...messages, { id: Date.now(), role: 'user', content: input }]);
      setInput('');

      // Fetch AI response
      const aiResponse = await fetch('/api/ask-ai', {
        method: 'POST',
        body: JSON.stringify({ message: input }),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json());

      // Add AI's response
      setMessages([...messages, { id: Date.now(), role: 'user', content: input }, { id: Date.now() + 1, role: 'ai', content: aiResponse.reply }]);
    }
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    setInput,
  };
}
