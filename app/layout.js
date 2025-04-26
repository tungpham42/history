import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/united/bootstrap.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Chào Mừng Đến Với Lịch Sử Việt Nam",
  description:
    "Khám phá lịch sử Việt Nam qua những câu trích dẫn nổi bật và các bài học lịch sử phong phú.",
  openGraph: {
    title: "Lịch Sử Việt Nam - Trang Chủ",
    description:
      "Tìm hiểu về lịch sử Việt Nam qua các câu trích dẫn truyền cảm hứng và nội dung giáo dục.",
    type: "website",
    url: "https://lichsu.io.vn",
    images: [
      {
        url: "https://lichsu.io.vn/1200x630.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <div
          className="container my-2 pt-5"
          style={{
            minHeight: "calc(100vh - 10rem)",
          }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
