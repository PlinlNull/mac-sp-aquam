import React from "react";
import mechanism from "../assets/images/mechanism.jpg";
export default function TenCuaComponent() {
  return (
    <section className="cmn_section mechanism">
      <div className="container">
        <h2 className="cmn_ttl">MECHANISM</h2>
        <p className="cmn_lbl">空気から水を作る仕組み</p>
        <div className="mechanism_box">
          <div className="mechanism_thumb">
            <img
              className="w-100"
              src={mechanism}
              alt="MECHANISM"
              title="MECHANISM"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
