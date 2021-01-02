import React from "react"
import { useQuery } from "@apollo/client"
import { GET_CFACTOR } from "../../apiCalls/queries"

import { BiShuffle, BiTrash } from "react-icons/bi"
import "./cfCard.css"

import CFCardDrag from "./cfCardDrag"

function CFacQuery() {
  const { loading, error, data } = useQuery(GET_CFACTOR)

  function deleteAlert() {
    alert(
      "🛑🛑🛑 You do not have permission to delete this conversion factor.  - Management"
    )
  }

  function reverseAlert() {
    alert(
      "Please visit again to see if this functionality has been added.  - Management"
    )
  }

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <>
      <div className="cfactor-list-container-label">My Conversion Factors</div>

      <div className="individual-cfactor-container">
        {data.getCFactors.map(cfactor => (
          <CFCardDrag
            key={cfactor.id}
            dataItem={cfactor}
            dropEffect="link"
            id={cfactor.id}
          >
            <div className="cf-label-card">{cfactor.cfLabel}</div>
            <div className="cfactor-grid-container">
              <div className="num-card">{cfactor.num}</div>
              <div className="num-E-card">e</div>
              <div className="num-exp-card">{cfactor.numExp}</div>
              <div className="num-unit-card">{cfactor.numUnit}</div>
              <div className="num-comp-card">{cfactor.numComp}</div>
              <div className="division-card"></div>
              <div className="denom-card">{cfactor.denom}</div>
              <div className="denom-E-card">e</div>
              <div className="denom-exp-card">{cfactor.denomExp}</div>
              <div className="denom-unit-card">{cfactor.denomUnit}</div>
              <div className="denom-comp-card">{cfactor.denomComp}</div>
            </div>
            <div className="cfactor-button-container">
              <button
                className="cfactor-card-button delete-button"
                onClick={deleteAlert}
              >
                <BiTrash />
              </button>

              <button className="cfactor-card-button" onClick={reverseAlert}>
                <BiShuffle />
              </button>
            </div>
          </CFCardDrag>
        ))}
      </div>
    </>
  )
}

export default CFacQuery
