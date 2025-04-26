export const metadata = {
  title: "Câu Đố Lịch Sử Việt Nam",
  description:
    "Thử sức với các câu đố về lịch sử Việt Nam và kiểm tra kiến thức của bạn.",
  openGraph: {
    title: "Câu Đố Lịch Sử Việt Nam",
    description:
      "Tham gia câu đố lịch sử để kiểm tra và nâng cao kiến thức về lịch sử Việt Nam.",
    type: "website",
    url: "https://lichsu.io.vn/cau-do",
    images: [
      {
        url: "https://lichsu.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function QuizLayout({ children }) {
  return (
    <html lang="vi">
      <head />
      <body>{children}</body>
    </html>
  );
}
