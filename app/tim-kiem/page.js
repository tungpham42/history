// page.js
"use client";

import React, { useState, useEffect, Suspense } from "react";
import lessons from "@/data/lessons.json";
import { useSearchParams } from "next/navigation";
import { Row, Col, Card, Button, Modal, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faVideo, faTimes } from "@fortawesome/free-solid-svg-icons";

// Child component that uses useSearchParams
const SearchResultsContent = () => {
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("tu-khoa")?.trim() || "";

  useEffect(() => {
    try {
      setLoading(true);
      if (query) {
        const lowerQuery = query.toLowerCase();
        const filtered = lessons.filter(
          ({
            title,
            description,
            period,
            content,
            events,
            important_figures,
          }) =>
            title.toLowerCase().includes(lowerQuery) ||
            description.toLowerCase().includes(lowerQuery) ||
            period.toLowerCase().includes(lowerQuery) ||
            content.toLowerCase().includes(lowerQuery) ||
            events.some((event) => event.toLowerCase().includes(lowerQuery)) ||
            important_figures.some(
              ({ name, role }) =>
                name.toLowerCase().includes(lowerQuery) ||
                role.toLowerCase().includes(lowerQuery)
            )
        );
        setFilteredLessons(filtered);
      } else {
        setFilteredLessons([]);
      }
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleLessonShow = (lesson) => {
    setCurrentLesson(lesson);
    setShowLessonModal(true);
  };

  const handleLessonClose = () => setShowLessonModal(false);

  const handleVideoShow = (lesson) => {
    setCurrentLesson(lesson);
    setShowVideoModal(true);
  };

  const handleVideoClose = () => setShowVideoModal(false);

  return (
    <>
      <h1 className="text-center mb-4">
        Kết quả tìm kiếm cho &ldquo;{query}&rdquo;
      </h1>
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </Spinner>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Row className="mt-3">
          {filteredLessons.length === 0 ? (
            <Col>
              <Alert variant="warning">Không có kết quả phù hợp.</Alert>
            </Col>
          ) : (
            filteredLessons.map((lesson) => (
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
                    style={{
                      backgroundImage: `url(/images/${lesson.id}.webp)`,
                    }}
                  ></div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{lesson.title}</Card.Title>
                    <Card.Text>{lesson.description}</Card.Text>
                    <div className="mt-auto d-flex justify-content-start gap-3">
                      <Button
                        variant="primary"
                        onClick={() => handleLessonShow(lesson)}
                      >
                        <FontAwesomeIcon icon={faBook} className="me-2" /> Xem
                        Chi Tiết
                      </Button>
                      {lesson.youtube_id && (
                        <Button
                          variant="success"
                          onClick={() => handleVideoShow(lesson)}
                        >
                          <FontAwesomeIcon icon={faVideo} className="me-2" />{" "}
                          Xem Video
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      )}
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
              {currentLesson.events?.join(", ")}
            </p>
            <p>
              <strong>Nhân vật quan trọng:</strong>
            </p>
            <ul>
              {currentLesson.important_figures?.map((figure, index) => (
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
              <FontAwesomeIcon icon={faTimes} className="me-2" /> Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      )}
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
              <FontAwesomeIcon icon={faTimes} className="me-2" /> Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

// Parent component with Suspense boundary
const SearchResults = () => {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto p-4">
          <div className="flex justify-center my-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
};

export default SearchResults;
