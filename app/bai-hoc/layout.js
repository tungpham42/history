export default function HistoryLessonsLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>Bài Học Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Khám phá các bài học chi tiết về lịch sử Việt Nam với hình ảnh và video minh họa."
        />
        <meta property="og:title" content="Bài Học Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Tìm hiểu lịch sử Việt Nam qua các bài học phong phú với nội dung chi tiết và video hấp dẫn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/bai-hoc" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>{children}</body>
    </html>
  );
}
