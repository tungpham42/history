export default function QuizLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>Câu Đố Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Thử sức với các câu đố về lịch sử Việt Nam và kiểm tra kiến thức của bạn."
        />
        <meta property="og:title" content="Câu Đố Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Tham gia câu đố lịch sử để kiểm tra và nâng cao kiến thức về lịch sử Việt Nam."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/cau-do" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>{children}</body>
    </html>
  );
}
