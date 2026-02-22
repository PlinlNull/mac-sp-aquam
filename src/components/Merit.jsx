import React from "react";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";


export default function TenCuaComponent() {
  return (
    <section className="cmn_section merit">
      <div className="container">
        <h2 className="cmn_ttl">Merit</h2>
        <p className="cmn_lbl">メリット</p>
        <div className="cmn_des merit_ttl text-center">
          水道直結型浄水器はコストが安く使用量に制限がないが、水道工事が必須で断水時は使用出来ません。
          <br />
          一方、空気製水機は水道工事不要で停電・断水時にも電気さえあれば給水可能です。
          <br />
          災害時も平常時も使えるフェーズフリーな給水システムで持続可能な水供給を実現します。
        </div>
        <div className="merit_content">
          <div className="merit_lst">
            <div className="merit_item">
              <div className="merit_nav">&nbsp;</div>
              <div className="merit_info">
                <div className="merit_col">
                  <div className="merit_box">
                    <div className="merit_box_slbl">
                      従来型ウォーターサーバー
                    </div>
                    <div className="merit_box_review">
                      <div className="merit_box_thumb">
                        <img
                          src={product3}
                          alt="従来型ウォーターサーバー"
                          title="従来型ウォーターサーバー"
                        />
                      </div>
                      <div className="merit_box_txt">
                        水ボトルの配送・交換・保管使用後のプラスチックゴミ配送によるCO2排出
                      </div>
                    </div>
                  </div>
                </div>
                <div className="merit_col">
                  <div className="merit_box">
                    <div className="merit_box_slbl merit_txt_style">
                      Air Drip Water
                    </div>
                    <div className="merit_box_review">
                      <div className="merit_box_thumb">
                        <img
                          src={product4}
                          alt="Air Drip Water"
                          title="Air Drip Water"
                        />
                      </div>
                      <div className="merit_box_txt">
                        交換不要で常に新鮮な水を生成プラスチック廃棄物ゼロ配送による環境負担なし
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="merit_lst">
            <div className="merit_item">
              <div className="merit_nav">水源</div>
              <div className="merit_info">
                <div className="merit_col">ボトル水</div>
                <div className="merit_col merit_txt_style">空気中の水蒸気</div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">コスト</div>
              <div className="merit_info">
                <div className="merit_col">水購入費+レンタル費+電気代</div>
                <div className="merit_col merit_txt_style">
                  電気代+フィルター（消耗品）
                </div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">供給安定性</div>
              <div className="merit_info">
                <div className="merit_col">配送や水源に依存</div>
                <div className="merit_col merit_txt_style">
                  湿度・温度に依存
                </div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">ボトル受取</div>
              <div className="merit_info">
                <div className="merit_col">必要</div>
                <div className="merit_col merit_txt_style">不要</div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">ボトル設置</div>
              <div className="merit_info">
                <div className="merit_col">必要</div>
                <div className="merit_col merit_txt_style">不要</div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">ゴミ</div>
              <div className="merit_info">
                <div className="merit_col">空きボトル</div>
                <div className="merit_col merit_txt_style">無し</div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">災害対応</div>
              <div className="merit_info">
                <div className="merit_col">共有困難</div>
                <div className="merit_col merit_txt_style">電源のみでOK</div>
              </div>
            </div>
            <div className="merit_item">
              <div className="merit_nav">環境負荷</div>
              <div className="merit_info">
                <div className="merit_col">ボトル輸送・破棄に課題</div>
                <div className="merit_col merit_txt_style">
                  プラ削除・電力消費
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
