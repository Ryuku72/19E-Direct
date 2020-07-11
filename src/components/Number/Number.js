import React from "react";

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

function Number(props) {
return (
    <>
    <span>${numberWithCommas(props.value)}</span>
    </>
)
}

export default Number;