"use client";

import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faVideo, faTimes } from "@fortawesome/free-solid-svg-icons";
import lessons from "@/data/lessons.json";

function HistoryLessons() {
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);

  const handleLessonClose = () => setShowLessonModal(false);
  const handleVideoClose = () => setShowVideoModal(false);

  const handleLessonShow = (lesson) => {
    setCurrentLesson(lesson);
    setShowLessonModal(true);
  };

  const handleVideoShow = (lesson) => {
    setCurrentLesson(lesson);
    setShowVideoModal(true);
  };

  return (
    <>
      <Head>
        <title>Bài Học Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Khám phá các bài học chi tiết về lịch sử Việt Nam với hình ảnh và video minh họa."
        />
        <meta property="og:title" content="Bài Học Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Tìm hiểu lịch sử Việt Nam qua các bài học phong phú với nội dung chi tiết và video hấp dẫn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/bai-hoc" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <h1 className="mb-4 text-center">Bài Học Lịch Sử</h1>
      <Row>
        {lessons.map((lesson) => (
          <Col
            key={lesson.id}
            xxl={4}
            xl={4}
            lg={6}
            md={6}
            sm={12}
            className="mb-4"
          >
            <Card className="d-flex flex-column h-100 shadow-lg">
              <div
                className="custom-card-img rounded-top"
                style={{ backgroundImage: `url(/images/${lesson.id}.webp)` }}
              ></div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{lesson.title}</Card.Title>
                <Card.Text>{lesson.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-start gap-3">
                  <Button
                    variant="primary"
                    onClick={() => handleLessonShow(lesson)}
                  >
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    Xem Chi Tiết
                  </Button>
                  {lesson.youtube_id && (
                    <Button
                      variant="success"
                      onClick={() => handleVideoShow(lesson)}
                    >
                      <FontAwesomeIcon icon={faVideo} className="me-2" />
                      Xem Video
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for showing lesson details */}
      {currentLesson && (
        <Modal show={showLessonModal} onHide={handleLessonClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{currentLesson.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Giai đoạn:</strong> {currentLesson.period}
            </p>
            <p>
              <strong>Sự kiện quan trọng:</strong>{" "}
              {currentLesson.events.join(", ")}
            </p>
            <p>
              <strong>Nhân vật quan trọng:</strong>
            </p>
            <ul>
              {currentLesson.important_figures.map((figure, index) => (
                <li key={index}>
                  {figure.name} - {figure.role}
                </li>
              ))}
            </ul>
            <p>
              <strong>Chi tiết:</strong>
            </p>
            <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleLessonClose}>
              <FontAwesomeIcon icon={faTimes} className="me-2" />
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Modal for YouTube video */}
      {currentLesson?.youtube_id && (
        <Modal show={showVideoModal} onHide={handleVideoClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{currentLesson.title} - Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${currentLesson.youtube_id}?start=${currentLesson.start_time}`}
                title={currentLesson.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleVideoClose}>
              <FontAwesomeIcon icon={faTimes} className="me-2" />
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default HistoryLessons;
