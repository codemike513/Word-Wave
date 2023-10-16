import React, { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

function Information(props) {
  const { output } = props;
  const [tab, setTab] = useState("transcription");

  function handleCopy() {
    navigator.clipboard.writeText();
  }

  function handleDownload() {
    const element = document.createElement("a");
    const file = new Blob([], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `Freescribe_${new Date().toString()}.txt`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your{" "}
        <span className="text-blue-400 bold font-semibold">Transcription</span>
      </h1>

      <div className="grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden items-center">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 duration-200 py-1 font-medium " +
            (tab === "transcription"
              ? " bg-blue-300 text-white"
              : " text-blue-400 hover:text-blue-600")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 duration-200 py-1 font-medium " +
            (tab === "translation"
              ? " bg-blue-300 text-white"
              : " text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
      <div className="my-8 flex flex-col">
        {tab === "transcription" ? (
          <Transcription {...props} />
        ) : (
          <Translation {...props} />
        )}
      </div>
      <div className="flex items-center gap-4 mx-auto text-base">
        <button
          onClick={handleCopy}
          title="Copy"
          className="bg-white text-blue-300 px-2 aspect-square grid place-items-center rounded hover:text-blue-500 duration-200"
        >
          <i className="fa-solid fa-copy"></i>
        </button>
        <button
          onClick={handleDownload}
          title="Download"
          className="bg-white text-blue-300 px-2 aspect-square grid place-items-center rounded hover:text-blue-500 duration-200"
        >
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  );
}

export default Information;
