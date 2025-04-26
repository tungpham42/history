"use client";

import React from "react";
import Head from "next/head";
import quotes from "@/data/quotes";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Head>
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
      </Head>
      <h1 className="mb-4 text-center">Chào mừng đến với Lịch Sử Việt Nam</h1>
      <Row>
        <Col>
          <Card className="shadow-lg p-4 bg-white rounded">
            <Card.Body>
              <ListGroup>
                {quotes.map((quote, index) => (
                  <ListGroupItem key={index}>
                    <em className="h3">&ldquo;{quote.text}&rdquo;</em>
                    <span className="h4"> - {quote.author}</span>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
