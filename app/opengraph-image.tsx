import { ImageResponse } from "next/og";

const AUTHOR_NAME = "pandusudo";
export const alt = `${AUTHOR_NAME} | Software Engineer`;
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          opacity: 0.15,
          filter: "blur(60px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          opacity: 0.1,
          filter: "blur(80px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          opacity: 0.08,
          filter: "blur(100px)",
          display: "flex",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          display: "flex",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "60px 70px",
          position: "relative",
          gap: "32px",
        }}
      >
        {/* Avatar */}
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_URL}/avatar.png`}
          style={{
            borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.2)",
            boxShadow: "0 0 60px rgba(102, 126, 234, 0.3)",
          }}
          height="150"
          width="150"
        />

        {/* Name and title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {AUTHOR_NAME}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "4px",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 500,
                color: "#a78bfa",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              Software Engineer
            </span>
            <div
              style={{
                width: "40px",
                height: "4px",
                background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                borderRadius: "4px",
                display: "flex",
              }}
            />
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          Building modern web experiences with passion and precision
        </p>

        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          {["Portfolio", "Blog", "Projects"].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "10px 20px",
                background: "rgba(167, 139, 250, 0.2)",
                borderRadius: "100px",
                fontSize: "16px",
                color: "#a78bfa",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Website URL */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "100px",
          backdropFilter: "blur(10px)",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          pandusudo.com
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
