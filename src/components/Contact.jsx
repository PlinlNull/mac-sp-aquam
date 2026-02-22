import React from "react";

export default function TenCuaComponent() {
  return (
    <section className="contact">
      <div className="contact_container">
        <h2 className="cmn_ttl">CONTACT</h2>
        <p className="cmn_lbl">お問い合わせ</p>
        <div className="contact_lst">
          <a className="ctbtn1" href="#" title="メールでお問い合わせはこちら">
            メールでお問い合わせはこちら
          </a>
          <a className="ctbtn2" href="#" title="お電話でお問い合わせ">
            <span className="ct_lbl">お電話でお問い合わせ</span>
            <span>
              TEL.052-910-0566
              <br />
              受付時間：9:00～18:00(土日祝日除く)
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
