export const metadata = {
  title: "Khảo Sát Lịch Sử Việt Nam",
  description:
    "Tham gia khảo sát để chia sẻ ý kiến của bạn về lịch sử Việt Nam và cách học lịch sử hiệu quả.",
  openGraph: {
    title: "Khảo Sát Lịch Sử Việt Nam",
    description:
      "Đóng góp ý kiến của bạn để cải thiện nội dung học lịch sử Việt Nam.",
    type: "website",
    url: "https://lichsu.io.vn/khao-sat",
    images: [
      {
        url: "https://lichsu.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SurveyLayout({ children }) {
  return (
    <html lang="vi">
      <head />
      <body>{children}</body>
    </html>
  );
}
