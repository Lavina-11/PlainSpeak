import React from 'react'

function LanguageSelector({ value, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Language</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", padding: "0.4rem" }}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
      </select>
    </div>
  )
}

export default LanguageSelector
