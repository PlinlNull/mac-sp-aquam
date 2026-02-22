import React from "react";

export default function TenCuaComponent() {
  return (
    <footer>
      <div className="footer_container">
        <div className="ftrow">
          <div className="ftlogo">
            <div className="ftlogo_item">
              <img src="./images/logo.png" alt="MAC SP" title="MAC SP" />
            </div>
          </div>
          <div className="ftinfo">
            <p>株式会社MAC SP</p>
            <p>本社：愛知県名古屋市北区金城町2丁目25-2</p>
            <p>TEL：052-910-0566(平日9:00～18:00)</p>
            <p>東京支店：東京都新宿区津久戸町3-11 TH1ビル飯田橋8F</p>
            <p>
              TEL：
              <a href="tel:0355798803" title="03-5579-8803">
                03-5579-8803
              </a>
              (平日9:00～18:00)
            </p>
            <p>
              コーポレートサイト：
              <a href="https://mac-sp.net/" title="mac-sp.net">
                https://mac-sp.net/
              </a>
            </p>
          </div>
        </div>
        <div className="copyright">
          Copyright © MAC SP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
