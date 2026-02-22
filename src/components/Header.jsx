import React, { useState } from 'react';

export default function Header() {
  // Trạng thái isNavOpen thay thế cho việc check class 'active' bằng jQuery
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Hàm chuyển đổi trạng thái (Đóng thành Mở, Mở thành Đóng)
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header>
      <div className="header_container">
        <h1 className="header_ttl"><span>MAC SP</span>AQUAM 正規代理店</h1>
        
        {/* Nút Hamburger. Sự kiện onClick thay thế cho $(document).on('click', '.navigation'...) */}
        <div 
          className={`navigation ${isNavOpen ? 'active' : ''}`} 
          onClick={toggleNav}
        >
          <span></span><span></span><span></span>
        </div>
        
        {/* Thanh điều hướng */}
        <nav className={isNavOpen ? 'active' : ''}>
          <ul className="navlist">
            <li><a href="#" title="TOP">TOP</a></li>
					  <li><a href="#" title="ビジョン">ビジョン</a></li>
					  <li><a href="#" title="メカニズム">メカニズム</a></li>
					  <li><a href="#" title="商品紹介">商品紹介</a></li>
					  <li><a href="#" title="メリット">メリット</a></li>
					  <li><a href="#" title="実績">実績</a></li>
					  <li><a href="#" title="よくある質問">よくある質問</a></li>
					  <li><a href="#" title="お問い合わせ">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}