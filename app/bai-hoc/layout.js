export const metadata = {
  title: "Bài Học Lịch Sử Việt Nam",
  description:
    "Khám phá các bài học chi tiết về lịch sử Việt Nam với hình ảnh và video minh họa.",
  openGraph: {
    title: "Bài Học Lịch Sử Việt Nam",
    description:
      "Tìm hiểu lịch sử Việt Nam qua các bài học phong phú với nội dung chi tiết và video hấp dẫn.",
    type: "website",
    url: "https://lichsu.io.vn/bai-hoc",
    images: [
      {
        url: "https://lichsu.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HistoryLessonsLayout({ children }) {
  return (
    <html lang="vi">
      <head />
      <body>{children}</body>
    </html>
  );
}
