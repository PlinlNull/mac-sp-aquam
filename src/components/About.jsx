import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about_container">
        <div className="about_des text-center">
          水を買う必要も重たいボトルを交換する必要もありません。
          <br />
          コンセントをさすだけであなたの暮らしが劇的に変化します。
          <br />
          水は『買う』時代から『つくる』時代へ。
        </div>
      </div>
      <div className="about_bg">
        <img
          className="w-100"
          src="./images/background2.jpg"
          alt="POINT"
          title="POINT"
        />
      </div>
    </section>
  );
}
