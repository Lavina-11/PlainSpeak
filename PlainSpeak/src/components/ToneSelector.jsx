import React from 'react'

function ToneSelector({ value, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Tone</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", padding: "0.4rem" }}
      >
        <option value="simple">Very Simple</option>
        <option value="elderly">For Elderly</option>
        <option value="child">For Children</option>
      </select>
    </div>
  )
}

export default ToneSelector
