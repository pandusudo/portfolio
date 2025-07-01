import { conf } from "@/app/lib/constant";
import { getPost } from "@/app/lib/posts";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = `A Blog by ${conf.AUTHOR.NAME}`;
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const logoData = await readFile(join(process.cwd(), "public/avatar.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;
  console.log(logoData);

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
          src={logoSrc}
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
          <p style={{ fontSize: "60px" }}>{post?.title}</p>
          <p style={{ fontSize: "30px" }}>{`A Blog by ${conf.AUTHOR.NAME}`}</p>
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
