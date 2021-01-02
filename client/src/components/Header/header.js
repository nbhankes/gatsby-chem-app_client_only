import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaEllipsisV } from "react-icons/fa"
import "./header.css"

function Header({ siteTitle }) {
  function settingsAlert() {
    alert(
      "Settings is where you will adjust your user settings, permissions, security, and billing information."
    )
  }

  return (
    <header className="header-banner">
      <Link className="header-content" to="/">
        {siteTitle}
      </Link>
      <div
        className="setting-button"
        onClick={settingsAlert}
        onKeyDown={settingsAlert}
        role="button"
        tabindex="0"
      >
        <FaEllipsisV className="settings-icon" />
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
