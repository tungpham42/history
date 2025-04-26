"use client";

import React from "react";
import Head from "next/head";

const Survey = () => {
  return (
    <>
      <Head>
        <title>Khảo Sát Lịch Sử Việt Nam</title>
        <meta
          name="description"
          content="Tham gia khảo sát để chia sẻ ý kiến của bạn về lịch sử Việt Nam và cách học lịch sử hiệu quả."
        />
        <meta property="og:title" content="Khảo Sát Lịch Sử Việt Nam" />
        <meta
          property="og:description"
          content="Đóng góp ý kiến của bạn để cải thiện nội dung học lịch sử Việt Nam."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lichsu.io.vn/khao-sat" />
        <meta property="og:image" content="https://lichsu.io.vn/1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <h1 className="text-center mb-4">Khảo Sát</h1>
      <div className="google-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSetfremKqpUDkeJNcqJa6dvI403cs9Y66E7jZYO2J41HKs74A/viewform?embedded=true"
          width="100%"
          height="2900"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Google Form"
        >
          Đang tải…
        </iframe>
      </div>
    </>
  );
};

export default Survey;
