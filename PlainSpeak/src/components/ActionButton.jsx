import React from 'react'

function ActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.6rem",
        width: "100%",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
    >
      Simplify
    </button>
  )
}

export default ActionButton
