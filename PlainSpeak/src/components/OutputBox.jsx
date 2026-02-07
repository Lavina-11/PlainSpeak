import React from 'react'

function OutputBox({ output }) {
  return (
    <div>
      <label>Simplified Output</label>
      <div
        style={{
          minHeight: "100px",
          border: "1px solid #ccc",
          padding: "0.5rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        {output || "Output will appear here..."}
      </div>
    </div>
  )
}

export default OutputBox
