import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      return { uploadedBy: "server", fileURL: file.url };
    },
  ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
