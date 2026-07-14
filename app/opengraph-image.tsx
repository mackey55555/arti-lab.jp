import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Arti — つくるを、一貫して。";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-lockup.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F3EC",
          gap: 56,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="Arti" width={720} height={236} />
        <div
          style={{ width: 96, height: 4, backgroundColor: "#C35823" }}
        />
      </div>
    ),
    { ...size },
  );
}
