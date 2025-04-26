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
