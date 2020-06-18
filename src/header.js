import React from "react";

function Header() {
  return (
    <div className="Header">
      <header
        className="App-header"
        style={{
          backgroundColor: "green",
          width: "75%",
          margin: "2% auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ padding: "1%" }}>Since 1865</h1>
      </header>
    </div>
  );
}

export default Header;
