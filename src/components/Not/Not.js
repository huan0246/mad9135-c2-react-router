import React from "react";
import './not.css'

export default function Not(props) {
  return (
    <>
    { props.userData.length !== 0 && (
    <div class="errorPage">
      <div className="errorCode">404</div>
      <div className="errorMessage">The page is not found</div>
    </div>
    )}
    </>
  )
}
