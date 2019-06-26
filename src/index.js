import React from "react";
import ReactDOM from "react-dom";

// 1. Create first React element.
// Use React.createElement()

// 2. Get reference to DOM mounting point.
// Use document.getElementById() or document.querySelector()

// 3. Render element into DOM mountain point.
// Use ReactDOM.render()
function Header() {
  return (
    <React.Fragment>
      <h1>The Starry Theater</h1>
      <p className="subheading">
        The best <strong>drive-in theather</strong> around the block.
      </p>
    </React.Fragment>
  );
}

function Homepage() {
  return <Header />;
}
const renderTarget = document.getElementById("app");
ReactDOM.render(<Homepage />, renderTarget);
