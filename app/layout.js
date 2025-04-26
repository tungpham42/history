"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/united/bootstrap.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const [showButton, setShowButton] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScrollResize = () => {
      setShowButton(window.scrollY > 148);
      setIsFixed(window.innerWidth > 991 && window.scrollY > 148);
    };

    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);
    handleScrollResize(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="vi">
      <head>
        <title>Chào Mừng Đến Với Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Khám phá lịch sử Việt Nam qua những câu trích dẫn nổi bật và các bài học lịch sử phong phú."
        />
        <meta property="og:title" content="Lịch Sử Việt Nam - Trang Chủ" />
        <meta
          property="og:description"
          content="Tìm hiểu về lịch sử Việt Nam qua các câu trích dẫn truyền cảm hứng và nội dung giáo dục."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>
        <Header />
        <Container
          className={`my-2 ${isFixed ? "pt-5" : "pt-0"}`}
          style={{
            minHeight: "calc(100vh - 10rem)",
          }}
        >
          {children}
        </Container>
        <Footer />
        {showButton && (
          <Button
            variant="primary"
            onClick={scrollToTop}
            className="position-fixed bottom-3 end-3 rounded-circle shadow-lg d-flex align-items-center justify-content-center"
            style={{
              bottom: "25px",
              right: "25px",
              width: "50px",
              height: "50px",
              fontSize: "20px",
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </Button>
        )}
      </body>
    </html>
  );
}
