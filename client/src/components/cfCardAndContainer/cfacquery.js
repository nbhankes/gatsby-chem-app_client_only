import React from "react"
import { useQuery } from "@apollo/client"
import { GET_CFACTOR } from "../../apiCalls/queries"
//import { DELETE_CFACTOR, REVERSE_CFACTOR } from "../../apiCalls/mutations"

import { BiShuffle, BiTrash } from "react-icons/bi"
import "./cfCard.css"

import CFCardDrag from "./cfCardDrag"

function CFacQuery() {
  const { loading, error, data } = useQuery(GET_CFACTOR)

  //const [deleteCFactor] = useMutation(DELETE_CFACTOR, {
  //  refetchQueries: [{ query: GET_CFACTOR }],
  //})

  //?onClick for delete mutation
  //onClick={() => {
  //  deleteCFactor({
  //    variables: { id: cfactor.id },
  //  })
  //}}

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

  //const [reverseCFactor] = useMutation(REVERSE_CFACTOR, {
  //  refetchQueries: [{ query: GET_CFACTOR }],
  //})

  //!REverse mutation onClick html
  //onClick={() => {
  //  reverseCFactor({
  //    variables: { id: cfactor.id },
  //  })
  //}}

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
