export default function SearchResultsLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>Tìm Kiếm Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Tìm kiếm các bài học và sự kiện lịch sử Việt Nam dựa trên từ khóa của bạn."
        />
        <meta property="og:title" content="Tìm Kiếm Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Khám phá các bài học lịch sử Việt Nam thông qua công cụ tìm kiếm mạnh mẽ."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/tim-kiem" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>{children}</body>
    </html>
  );
}
