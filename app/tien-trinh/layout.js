export default function TimelineLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>Tiến Trình Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Khám phá dòng thời gian lịch sử Việt Nam với các sự kiện và giai đoạn quan trọng."
        />
        <meta property="og:title" content="Tiến Trình Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Xem dòng thời gian chi tiết của lịch sử Việt Nam với các bài học và video minh họa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/tien-trinh" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>{children}</body>
    </html>
  );
}
