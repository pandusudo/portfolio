import { ImageResponse } from "next/og";

const AUTHOR_NAME = "pandusudo";
export const alt = `Blog | ${AUTHOR_NAME}`;
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
          justifyContent: "space-between",
          height: "100%",
          padding: "60px 70px",
          position: "relative",
        }}
      >
        {/* Top bar with author info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_WEB_URL}/avatar.png`}
            style={{
              borderRadius: "50%",
              border: "3px solid rgba(255,255,255,0.2)",
            }}
            height="64"
            width="64"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              {AUTHOR_NAME}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Software Engineer
            </span>
          </div>
        </div>

        {/* Title section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
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
                fontSize: "18px",
                fontWeight: 500,
                color: "#a78bfa",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Welcome to my
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
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Thoughts, tutorials, and insights on software development
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
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
              pandusudo.com/blog
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {["#dev", "#tech", "#tutorials"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 16px",
                  background: "rgba(167, 139, 250, 0.2)",
                  borderRadius: "100px",
                  fontSize: "14px",
                  color: "#a78bfa",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
