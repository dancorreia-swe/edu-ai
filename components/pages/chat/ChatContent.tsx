import { useRef, useState } from "react";

const ChatContent = () => {
  const [dropped, setDropped] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setDropped(true);
      setSelectedFile(selectedFile);
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="w-full">
          {dropped ? (
            <div className="flex justify-between container">
              <div>
                <h1 className="mt-2 mb-5 font-semibold text-center">
                  Preview
                </h1>
                {selectedFile && (
                  <iframe src={URL.createObjectURL(selectedFile)} width="100%" height="500px" title="PDF Preview" />
                )}
              </div>
              <div className="border-l -mt-7 border-dashed border-gray-700"></div>
              <div className="mr-2">
                <h1 className="text-center font-semibold">
                  Started your chat...
                </h1>
                <div className="flex justify-between gap-10">
                  <div className="px-2 py-10">
                    <p className="px-4 py-2 rounded-md mb-5 dark:bg-slate-900">
                      Here's an example of message 1
                    </p>
                    <p className="px-4 py-2 rounded-md dark:bg-slate-900">
                      Sub Message 1
                    </p>
                  </div>
                  <div className="px-2 mt-40">
                    <p className="px-4 py-2 rounded-md mb-5 dark:bg-purple-950">
                      Here's an example of message 1
                    </p>
                    <p className="px-4 py-2 rounded-md dark:bg-purple-950">
                      Sub Message 2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 transition-all dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="text-xs text-gray-400/40 dark:text-gray-400">PDF</p>
              </div>
              <input
                id="dropzone-file"
                accept=".pdf"
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
            </label>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatContent;
