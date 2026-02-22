import React from "react";

export default function TenCuaComponent() {
  return (
   <section className="cmn_section point">
		<div className="container">
			<h2 className="cmn_ttl">POINT</h2>
			<p className="cmn_lbl">エアドリップウォーターの強み</p>
			<div className="point_box">
				<div className="point cmn_des text-center">「MADE IN JAPAN」水の美味しさ、安心安全を高品質に保つ特許技術、<br/>フェーズフリーな災害対策、水資源不足に対するSDGsソリューションの技術革新</div>
				<div className="point_post">
					<div className="point_item">
						<div className="point_icon"><div className="point_icon_box"><img src="images/icon-point1.png" alt="美味しさ" width="79" title="美味しさ"/></div></div>
						<div className="point_info">
							<div className="point_info_box">
								<h2 className="point_sttl">美味しさ</h2>
								<div className="point_des">活性炭とUFフィルターを通過後、国産天然鉱石フィルターで必須ミネラルを添加し、日本人が美味しいと感じる水の生成を実現</div>
							</div>
						</div>
					</div>
					<div className="point_item">
						<div className="point_icon"><div className="point_icon_box"><img src="images/icon-point2.png" alt="特許技術" width="101" title="特許技術"/></div></div>
						<div className="point_info">
							<div className="point_info_box">
								<h2 className="point_sttl">特許技術*</h2>
								<div className="point_des">独自特許を取得した循環クリーンシステムと衛生保持機能により、長期間の貯蔵でも高品質を保ち、他社製品のように水質不安に陥ることなく安心して利用可能</div>
							</div>
							<div className="point_des">*独自特許取得：特許第7525218号</div>
						</div>
					</div>
					<div className="point_item">
						<div className="point_icon"><div className="point_icon_box"><img src="images/icon-point3.png" alt="フェーズフリーな災害対策" width="92" title="フェーズフリーな災害対策"/></div></div>
						<div className="point_info">
							<div className="point_info_box">
								<h2 className="point_sttl">フェーズフリーな災害対策</h2>
								<div className="point_des">スタイリッシュな外観と機能性を備えた当社商品は、日常使いがそのまま防災対策に繋がることから、複数の大手デベロッパーから引き合い有り</div>
							</div>
						</div>
					</div>
					<div className="point_item">
						<div className="point_icon"><div className="point_icon_box"><img src="images/icon-point4.png" alt="SDGsな技術革新" width="110" title="SDGsな技術革新"/></div></div>
						<div className="point_info">
							<div className="point_info_box">
								<h2 className="point_sttl">SDGsな技術革新</h2>
								<div className="point_des">電気があれば、水源を必要としない製水技術であり、BCPやカーボンニュートラルの観点から大手企業からの引き合い有り</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}
