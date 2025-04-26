export const metadata = {
  title: "Tiến Trình Lịch Sử Việt Nam",
  description:
    "Khám phá dòng thời gian lịch sử Việt Nam với các sự kiện và giai đoạn quan trọng.",
  openGraph: {
    title: "Tiến Trình Lịch Sử Việt Nam",
    description:
      "Xem dòng thời gian chi tiết của lịch sử Việt Nam với các bài học và video minh họa.",
    type: "website",
    url: "https://lichsu.io.vn/tien-trinh",
    images: [
      {
        url: "https://lichsu.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function TimelineLayout({ children }) {
  return (
    <html lang="vi">
      <head />
      <body>{children}</body>
    </html>
  );
}
