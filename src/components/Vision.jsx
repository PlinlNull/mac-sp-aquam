import React from "react";

export default function TenCuaComponent() {
  return (
    <section className="cmn_section vison">
      <h2 className="cmn_ttl">VISON</h2>
      <p className="cmn_lbl">私たちのビジョン</p>
      <div className="vison_wrap">
        <div className="vison_container">
          <div className="cmn_des">
            <p>
              私たちは、空気中の水分を利用して飲料水を生成する技術を通じ、
              <br />
              誰もが安心して水を確保できる社会の実現を目指しています。
            </p>
            <p>
              日本は地震や豪雨などの自然災害が多く、
              <br />
              ひとたびインフラが途絶えれば、飲料水の確保は深刻な課題となります。
              <br />
              水の不足は衛生環境の悪化や健康リスクを招き、
              <br />
              被災地の復旧や生活再建にも大きな影響を及ぼします。
            </p>
            <p>
              また、世界的な人口増加に伴い、水資源の需要は急速に拡大しています。
              <br />
              将来的には、飲料水の確保そのものが社会課題になると予測されています。
            </p>
            <p>
              私たちは
              <span className="des_style">
                「必要な水を、その場で生み出す」
              </span>
              という発想を広げ、
              <br />
              持続可能で強靭な社会づくりに貢献していきます。
            </p>
          </div>
          <div class="vison_thumb">
            <img
              class="w-100"
              src="./images/vison-sign.png"
              alt="water from air"
              title="water from air"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
