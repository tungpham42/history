export const metadata = {
  title: "Tìm Kiếm Lịch Sử Việt Nam",
  description:
    "Tìm kiếm các bài học và sự kiện lịch sử Việt Nam dựa trên từ khóa của bạn.",
  openGraph: {
    title: "Tìm Kiếm Lịch Sử Việt Nam",
    description:
      "Khám phá các bài học lịch sử Việt Nam thông qua công cụ tìm kiếm mạnh mẽ.",
    type: "website",
    url: "https://lichsu.io.vn/tim-kiem",
    images: [
      {
        url: "https://lichsu.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SearchResultsLayout({ children }) {
  return (
    <html lang="vi">
      <head />
      <body>{children}</body>
    </html>
  );
}
