import React from "react";

function NotFound() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        padding: "1rem 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff",
        backgroundColor: "#121212",
        borderRadius: "12px",
        boxShadow: "0 0 20px #f0c000",
        lineHeight: 1.6,
      }}
    >
      <h1
        style={{
          color: "#f0c000",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        ติดต่อเรา
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        หากคุณมีคำถาม ข้อเสนอแนะ หรือปัญหาเกี่ยวกับเว็บไซต์และเกม RoV
        เรายินดีรับฟังและพร้อมให้บริการช่วยเหลือคุณทุกเมื่อ
        สามารถติดต่อเราได้ตามช่องทางด้านล่างนี้ครับ
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#f0c000", marginBottom: "1rem" }}>
          ช่องทางติดต่อหลัก
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0, fontSize: "1rem" }}>
          <li style={{ marginBottom: "0.8rem" }}>
            📧 <strong>อีเมล:</strong>{" "}
            <a
              href="cs@proximabeta.com"
              style={{ color: "#f0c000", textDecoration: "underline" }}
            >
              cs@proximabeta.com
            </a>
          </li>
          <li style={{ marginBottom: "0.8rem" }}>
            📱 <strong>เบอร์โทร:</strong> 086 131 2122 4692 (จีน)
          </li>
          <li style={{ marginBottom: "0.8rem" }}>
            🌐 <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/ROVTH/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f0c000", textDecoration: "underline" }}
            >
              https://www.facebook.com/ROVTH/
            </a>
          </li>
          <li style={{ marginBottom: "0.8rem" }}>
            💬 <strong>Line Official:</strong>{" "}
            <a
              href="https://openchat.line.me/th/cover/OOY-USVWGpm--r5zV0Fi-f5B-5--qUmtR4tNv4nIphf4yqWtRvt5_ThB1mg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f0c000", textDecoration: "underline" }}
            >
              https://openchat.line.me/th/cover/OOY-USVWGpm--r5zV0Fi-f5B-5--qUmtR4tNv4nIphf4yqWtRvt5_ThB1mg
            </a>
          </li>
          <li style={{ marginBottom: "0.8rem" }}>
            🐦 <strong>Twitter:</strong>{" "}
            <a
              href="https://twitter.com/garenarovth/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f0c000", textDecoration: "underline" }}
            >
              https://twitter.com/garenarovth/
            </a>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#f0c000", marginBottom: "1rem" }}>เวลาทำการ</h2>
        <p>
          จันทร์ - ศุกร์: 9:00 น. - 18:00 น. <br />
          เสาร์ - อาทิตย์: ปิดทำการ
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#f0c000", marginBottom: "1rem" }}>
          ที่อยู่สำนักงาน
        </h2>
        <address style={{ fontStyle: "normal" }}>
          บริษัท RoV Thailand จำกัด <br />
          399 อาคาร Level 32 Interchange 21
          ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110
        </address>
      </section>

      <section>
        <h2 style={{ color: "#f0c000", marginBottom: "1rem" }}>
          ส่งข้อความหาเรา
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด!");
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "500px",
          }}
        >
          <label>
            ชื่อของคุณ:
            <input
              type="text"
              name="name"
              required
              placeholder="กรอกชื่อของคุณ"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "0.5rem",
              }}
            />
          </label>
          <label>
            อีเมลของคุณ:
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "0.5rem",
              }}
            />
          </label>
          <label>
            ข้อความ:
            <textarea
              name="message"
              rows="5"
              required
              placeholder="พิมพ์ข้อความของคุณที่นี่"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "0.5rem",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "#f0c000",
              color: "#121212",
              border: "none",
              borderRadius: "6px",
              padding: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#d4af37")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0c000")
            }
          >
            ส่งข้อความ
          </button>
        </form>
      </section>
    </div>
  );
}

export default NotFound;
