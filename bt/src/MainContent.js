import React from 'react';
import './MainContent.css';

function MainContent() {
const article = {
title: 'Gol D.Ace',
image: '', // URL hình ảnh mẫu
content: `Portgas D.Acecó tên thật là Gol D. Ace, biệt danh “Hỏa Quyền Ace ” và là Đội trưởng đội 2 của Băng Hải tặc Râu Trắng. Cha của anh là vua hải tặc nổi tiếng Gol D. Roger còn mẹ là Portgas D. Rouge (cả hai đều đã qua đời). Từ bé, Ace có anh em kết nghĩa là Luffy và Sabo. Trước khi quy thuận băng hải tặc Râu Trắng, One Piece Ace cũng từng có một băng hải tặc của riêng mình.`,
author: 'John Doe',
date: 'October 8, 2024',
};

const abcd = {
    title: 'Roronoa Zoro',
    image: 'https://anhdephd.vn/wp-content/uploads/2022/04/anh-zoro-hinh-nen-zoro-danh-nhau-343x600.jpg', // URL hình ảnh mẫu
    content: '',
    author: 'John Doe',
    date: 'October 8, 2024',
    };

return (
<main className="main-content">
<div className="article">
<h1>{article.title}</h1>
<img src={article.image} alt="Web Design" />
<p className="content">{article.content}</p>
<div className="article-meta">
<p>Written by: {article.author}</p>
<p>Date: {article.date}</p>

</div>

    </div>

        </main>
);
}

export default MainContent;