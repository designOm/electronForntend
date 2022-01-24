import React from "react";
import { Link } from "react-router-dom";

export function Landing() {
  return (<div>
      <h1>Landing</h1>
      <Link  to="/authentication" >Authentication</Link>
  </div>)
}
