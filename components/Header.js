"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBook,
  faChartLine,
  faQuestionCircle,
  faPoll,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleEvent = () => {
      setIsFixed(window.innerWidth > 991 && window.scrollY > 148);
    };

    window.addEventListener("scroll", handleEvent);
    window.addEventListener("resize", handleEvent);

    return () => {
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("resize", handleEvent);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setShowModal(true);
      return;
    }
    router.push(`/tim-kiem?tu-khoa=${encodeURIComponent(search)}`);
  };

  return (
    <>
      <div className="hero">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={2} sm={3} xs={3}>
              <Link className="p-2" href="/">
                <div className="trongdong"></div>
              </Link>
            </Col>
            <Col md={10} sm={9} xs={9}>
              <span className="display-2 site-title flame-text">
                Lịch Sử Việt Nam
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar
        className={`shadow-lg ${isFixed ? "fixed-navbar" : ""}`}
        bg="danger"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                className={`${pathname === "/" ? "active" : ""} me-3 px-0`}
                href="/"
              >
                <FontAwesomeIcon icon={faHome} className="me-1" /> Trang Chủ
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={`${
                  pathname === "/bai-hoc" ? "active" : ""
                } me-3 px-0`}
                href="/bai-hoc"
              >
                <FontAwesomeIcon icon={faBook} className="me-1" /> Bài Học
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={`${
                  pathname === "/tien-trinh" ? "active" : ""
                } me-3 px-0`}
                href="/tien-trinh"
              >
                <FontAwesomeIcon icon={faChartLine} className="me-1" /> Tiến
                Trình
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={`${
                  pathname === "/cau-do" ? "active" : ""
                } me-3 px-0`}
                href="/cau-do"
              >
                <FontAwesomeIcon icon={faQuestionCircle} className="me-1" /> Câu
                Đố
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={`${
                  pathname === "/khao-sat" ? "active" : ""
                } me-3 px-0`}
                href="/khao-sat"
              >
                <FontAwesomeIcon icon={faPoll} className="me-1" /> Khảo Sát
              </Nav.Link>
            </Nav>
            <Form className="d-flex me-2" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Điền từ khóa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" variant="outline-light" className="ms-2">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Empty Search Query */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Vui lòng nhập từ khóa tìm kiếm!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
