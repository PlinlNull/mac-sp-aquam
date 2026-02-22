import React from "react";

export default function TenCuaComponent() {
  return (
    <section className="banner">
      <div className="banner_container">
        <div className="banner_thumb">
          <img
            src="./images/banner-feature.png"
            alt="Air Drip Water"
            title="Air Drip Water"
          />
        </div>
        <div className="banner_info">
          <h2 className="banner_ttl">Air Drip Water</h2>
          <div className="banner_des">
            エアドリップウォーターは空気から飲料水を作る空気製水機です
          </div>
        </div>
      </div>
      <div className="banner_background">
        <img
          className="w-100"
          src="./images/banner.jpg"
          alt="Air Drip Water"
          title="Air Drip Water"
        />
      </div>
    </section>
  );
}
