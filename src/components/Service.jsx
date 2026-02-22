import React from "react";

export default function Service() {
  return (
    <section className="service">
      <div className="container">
        <h2 className="cmn_bttl">Air Drip Water AQ-20XR</h2>
        <div className="service_box">
          <div className="service_ttl">エアドリップウォーターの特徴</div>
          <div className="service_lst">
            <div className="service_item">
              <div className="service_item_lbl">省エネモード</div>
              <div className="service_item_txt">
                タンクが満タンになると自動的に省エネモードに切り替わります。
              </div>
            </div>
            <div className="service_item">
              <div className="service_item_lbl">電子制御システム</div>
              <div className="service_item_txt">
                内部の部品及び水温や貯水レベルを常に管理・制御し故障や漏水等、異常があった場合に警告します。
              </div>
            </div>
            <div className="service_item">
              <div className="service_item_lbl">循環クリーンシステム</div>
              <div className="service_item_txt">
                特許を取得した循環クリーンシステムで衛生保持し、長期間使用しても水質を安全に保ちます
              </div>
            </div>
          </div>
          <div className="service_ttl">製水量</div>
          <div className="service_about">
            <div className="service_about_chart">
              <img src="./images/chart.png" alt="製水量" title="製水量" />
            </div>
            <div className="service_about_info">
              <p>
                AQ-20XRは除湿・空気清浄しながら1日最大約22Lの飲料水を空気から製水することができます。
                <br />
                ＊気温と湿度が低い時期は製水能力が低下します。
                <br />
                ＊最低製水基準は気温10℃かつ湿度35%です
                <br />
                ＊気温15℃以下、または湿度40%以下の場合、
                <br />
                内部機構保護のため製水を止めることがあります
              </p>
              {/* Lưu ý phần này: Phải bọc ký tự < > để không bị lỗi JSX */}
              <div className="service_about_slbl">{"<目安の製水量>"}</div>
              <p>
                下記の条件下で24時間稼働した場合）
                <br />
                湿度60%、気温27度の条件下で、約20L
                <br />
                湿度50%、気温23度の条件下で、約10L
                <br />
                湿度40%、気温20度の条件下で、約６L
                <br />
              </p>
            </div>
          </div>
          <div className="service_ttl">コストメリット</div>
          <div className="service_cost">
            <div className="service_cost_thumb">
              <img
                src="./images/icon-coin.png"
                alt="コストメリット"
                title="コストメリット"
              />
            </div>
            <div className="service_cost_info">
              <p>
                AQ -20XR のランニングコストは
                <br />
                電気料金… 約1,095円/月(22L 換算）
                <br />
                フィルター交換代…18,000円/年 ※1年に1回交換目安
              </p>
              <p>
                １L 当たり製水コスト＝約17円/L
                <br />
                （製水時電気代のみ換算：季節や機器の稼働率によって変動）
              </p>
              <p className="service_cost_note">
                ※算出根拠〈22L 製水時〉100V0.52KW×24h×30円/KW=374円→17円/L
                <br />
                〈待機時〉35w×24h×29日=24KW 電気代：(12.5KW+24KW)×30円/KW=1095円
              </p>
            </div>
          </div>
        </div>
        <h2 className="cmn_bttl">Air Drip Water AQ-20X</h2>
        <div className="product_box product_box_style">
          <div className="product_thumb">
            <img
              src="./images/product2.png"
              alt="エアドリップウォーター AQ-20X"
              title="エアドリップウォーター AQ-20X"
            />
          </div>
          <div className="product_info">
            <div className="product_ttl">エアドリップウォーター AQ-20X</div>
            <dl className="product_des">
              <dt>製水量</dt>
              <dd>22 L/日　 *気温27℃ 湿度60％時</dd>
              <dt>サイズ</dt>
              <dd>W485 × D390 × H1035（H1355）</dd>
              <dt>重 量</dt>
              <dd>70kg </dd>
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
            <div className="product_note">
              AQ-20Xは、生活空間に調和する木工パネル仕上げの空気製水機です。家電でありながら家具の様な佇まいで住宅やオフィスのインテリアに取り入れやすいデザイン
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
