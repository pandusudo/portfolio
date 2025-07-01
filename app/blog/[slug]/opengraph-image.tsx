import { ImageResponse } from "next/og";

const AUTHOR_NAME = "pandusudo";
export const alt = `A Blog by ${AUTHOR_NAME}`;
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `https://raw.githubusercontent.com/pandusudo/portfolio/main/posts/${params.slug}.mdx`
  );

  if (!res.ok) {
    return new Response("Not found", { status: 404 });
  }

  const text = await res.text();
  const title = text.match(/title: (.*)/)?.[1].replace(/"/g, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0a09",
          color: "#fafaf9",
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_WEB_URL}/avatar.png`}
          style={{ marginRight: "30px" }}
          height="300"
          width="300"
        />
        <span
          style={{
            width: "800px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "60px" }}>{title}</p>
          <p style={{ fontSize: "30px" }}>{`A Blog by ${AUTHOR_NAME}`}</p>
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
