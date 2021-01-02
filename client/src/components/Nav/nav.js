import React from "react"

import "./nav.css"

export default function nav() {
  function showHideForm() {
    var x = document.getElementById("form-component")
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  function labBookAlert() {
    alert(
      "Your Lab Book is where your calculations, experiment notes, project files, manuscript drafts, and group chats are stored. Please come back later to see if this feature has been added."
    )
  }

  return (
    <div className="nav-banner">
      <div
        className="nav-button"
        onClick={showHideForm}
        onKeyDown={showHideForm}
        role="button"
        tabindex="0"
      >
        {" "}
        Add Conversion Factor
      </div>
      <div
        className="nav-button"
        onClick={labBookAlert}
        onKeyDown={labBookAlert}
        role="button"
        tabindex="0"
      >
        Lab Book
      </div>
    </div>
  )
}
