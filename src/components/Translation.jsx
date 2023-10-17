import React from "react";
import { LANGUAGES } from "../utils/presets";

function Translation(props) {
  const {
    textElement,
    toLanguage,
    translating,
    setToLanguage,
    generateTranslation,
  } = props;

  return (
    <>
      <div className="flex flex-col gap-2 mx-w-[400px] w-full mx-auto">
        {!translating && (
          <div className="flex flex-col">
            <p className="text-xs sm:text-sm font-medium text-slate-500 mr-auto">
              To language
            </p>
            <div className="flex items-stretch gap-2">
              <select
                className="flex-1 outline-none bg-white focus:outline-none border border-solid border-transparent hover:border-blue-300 duration-200 p-2 rounded"
                value={toLanguage}
                onChange={(e) => setToLanguage(e.target.value)}
              >
                <option value={"Select Language"}>Select Language</option>
                {Object.entries(LANGUAGES).map(([key, value]) => {
                  return (
                    <option key={key} value={value}>
                      {key}
                    </option>
                  );
                })}
              </select>
              <button
                onClick={generateTranslation}
                className="specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200"
              >
                Translate
              </button>
            </div>
          </div>
        )}
        {textElement && !translating && <p>{textElement}</p>}
      </div>
    </>
  );
}

export default Translation;
