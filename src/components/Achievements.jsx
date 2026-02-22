import React from "react";
import archivement from "../assets/images/archivement.jpg";

export default function TenCuaComponent() {
  return (
    <section className="achievements">
      <div className="container">
        <div className="achievements_content">
          <h2 className="cmn_ttl">ACHIEVEMENTS</h2>
          <p className="cmn_lbl">製造元のAQUAMの実績</p>
          <div className="cmn_des merit_ttl text-center">
            2024年1月12,13日に能登半島地震の復興支援として断水被害が継続している七尾市の
            <br />
            ボランティアセンターに空気製水機AQ-200を搭載したキッチンカーを設置。
            <br />
            現地ではボランティアの方々による毎日のセントラルキッチンでの炊き出し調理水として活用。
          </div>
          <div className="achievements_des merit_txt_style text-center">
            電気さえ復旧すれば飲料水をその場で製水できるため、
            <br />
            BCP（事業継続計画）の観点からも有効
          </div>
          <div className="achievements_thumb">
            <img
              className="w-100"
              src={archivement}
              alt="ACHIEVEMENTS"
              title="ACHIEVEMENTS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
