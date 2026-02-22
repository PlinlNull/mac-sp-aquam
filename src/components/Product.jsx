import React from "react";
import product1 from "../assets/images/product1.png";

export default function TenCuaComponent() {
  return (
    <section className="cmn_section product">
      <div className="container product_container">
        <h2 className="cmn_ttl">PRODUCT</h2>
        <p className="cmn_lbl">商品紹介</p>
        <div className="product_box">
          <div className="product_thumb">
            <img
              src={product1}
              alt="エアドリップウォーター AQ-20XR"
              title="エアドリップウォーター AQ-20XR"
            />
          </div>
          <div className="product_info">
            <div className="product_ttl">エアドリップウォーター AQ-20XR</div>
            <dl className="product_des">
              <dt>製水量</dt>
              <dd>22 L/日　 *気温27℃ 湿度60％時</dd>
              <dt>サイズ</dt>
              <dd>W455 × D333 × H923</dd>
              <dt>重 量</dt>
              <dd>45kg </dd>
              <dt>水 温</dt>
              <dd>4～10℃</dd>
              <dt>定格入力</dt>
              <dd>100V / 単相</dd>
              <dt>定格消費電力</dt>
              <dd>35W</dd>
              <dt>- 省エネ時</dt>
              <dd>520W(50Hz)</dd>
              <dt>製水時</dt>
              <dd>640W(60Hz)</dd>
              <dt>タンク容量</dt>
              <dd>7L</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
