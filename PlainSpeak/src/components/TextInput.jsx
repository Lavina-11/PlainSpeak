import React from 'react'

function TextInput({ value, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Official Text</label>
      <textarea
        rows="6"
        placeholder="Paste official or formal text here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", padding: "0.5rem" }}
      />
    </div>
  )
}

export default TextInput
