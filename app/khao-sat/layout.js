export default function SurveyLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>Khảo Sát Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Tham gia khảo sát để chia sẻ ý kiến của bạn về lịch sử Việt Nam và cách học lịch sử hiệu quả."
        />
        <meta property="og:title" content="Khảo Sát Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Đóng góp ý kiến của bạn để cải thiện nội dung học lịch sử Việt Nam."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/khao-sat" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>{children}</body>
    </html>
  );
}
