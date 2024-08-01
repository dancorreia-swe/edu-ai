export async function DELETE(
  request: Request,
  { params }: { params: { fileId: string } },
) {
  const fileId = params.fileId;
  const res = await fetch("https://api.uploadthing.com/v6/deleteFiles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Uploadthing-Api-Key": process.env.UPLOADTHING_SECRET as string,
    },
    body: JSON.stringify({
      fileKeys: [fileId],
    }),
  });

  if (!res.ok) {
    return new Response(res.statusText, { status: res.status });
  }

  return new Response(null, { status: 204 });
}
