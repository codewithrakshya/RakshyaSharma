import React, { useMemo, useState } from "react";
import { HiArrowTopRightOnSquare, HiSparkles } from "react-icons/hi2";
import profilePhoto from "../Images/rakshya-sharma.png";

const DEFAULT_AVATAR_URL = "https://rakshyasharma-ai.streamlit.app";

const AIAvatar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const spaceUrl = useMemo(
    () =>
      (
        process.env.REACT_APP_AI_AVATAR_URL ||
        process.env.REACT_APP_GRADIO_SPACE_URL ||
        DEFAULT_AVATAR_URL
      ).replace(/\/$/, ""),
    []
  );
  const embedUrl = useMemo(() => {
    if (!spaceUrl) return "";
    const separator = spaceUrl.includes("?") ? "&" : "?";
    return `${spaceUrl}${separator}embed=true`;
  }, [spaceUrl]);

  return (
    <section
      id="ai-avatar"
      className="px-5 py-20 overflow-hidden bg-indigo-950 md:px-8"
      aria-labelledby="ai-avatar-title"
    >
      <div className="grid max-w-6xl gap-10 mx-auto lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-sm font-semibold text-indigo-950 bg-indigo-100 rounded-full">
            <HiSparkles aria-hidden="true" />
            AI-powered portfolio guide
          </div>

          <div className="flex items-center gap-4 mb-5">
            <img
              src={profilePhoto}
              alt=""
              className="object-cover w-20 h-20 border-2 rounded-full shadow-lg border-indigo-200/80"
            />
            <div>
              <p className="text-sm font-semibold tracking-widest text-indigo-200 uppercase">
                Meet my digital twin
              </p>
              <h2
                id="ai-avatar-title"
                className="mt-1 text-4xl font-bold md:text-5xl"
              >
                Ask Rakshya AI
              </h2>
            </div>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-indigo-100">
            Curious about my research, experience, projects, or technical
            skills? Chat with an AI version of me trained on my professional
            background.
          </p>

          <div className="mt-7">
            <p className="mb-3 text-sm font-bold tracking-wide text-indigo-200 uppercase">
              Try asking
            </p>
            <ul className="grid gap-2 text-sm text-indigo-50">
              {[
                "What are you working on at UCSF?",
                "How do you approach genomic data quality?",
                "Which projects best show your Python and R skills?",
              ].map((prompt) => (
                <li
                  key={prompt}
                  className="px-4 py-3 border rounded-xl border-indigo-700/80 bg-indigo-900/70"
                >
                  “{prompt}”
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-indigo-300">
            This assistant represents Rakshya’s public professional profile. It
            may make mistakes and should not be treated as medical or scientific
            advice.
          </p>
          {spaceUrl && (
            <a
              href={spaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 mt-6 text-sm font-bold text-indigo-950 transition bg-white rounded-full hover:bg-indigo-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
            >
              Having trouble with the embedded chat? Open it directly
              <HiArrowTopRightOnSquare aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="relative min-h-[660px] overflow-hidden bg-white border shadow-2xl rounded-3xl border-white/20">
          {spaceUrl && !isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-8 text-center bg-white">
              <div className="w-10 h-10 border-4 border-indigo-100 rounded-full border-t-indigo-700 animate-spin" />
              <p className="font-semibold text-indigo-950">
                Waking up Rakshya AI…
              </p>
              <p className="max-w-sm text-sm text-gray-500">
                The first load can take a moment while the Gradio Space starts.
              </p>
            </div>
          )}
          {spaceUrl ? (
            <>
              <iframe
                src={embedUrl}
                title="Chat with Rakshya AI"
                className="w-full h-[660px] border-0"
                loading="lazy"
                allow="clipboard-read; clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={() => setIsLoaded(true)}
              />
              <a
                href={spaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute z-20 inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-indigo-900 transition bg-white border border-indigo-100 rounded-full shadow-md bottom-3 right-3 hover:bg-indigo-50"
              >
                Open full screen
                <HiArrowTopRightOnSquare aria-hidden="true" />
              </a>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[660px] p-8 text-center bg-gradient-to-b from-indigo-50 to-white">
              <div className="flex items-center justify-center w-16 h-16 mb-5 text-3xl bg-indigo-100 rounded-2xl">
                🧬
              </div>
              <h3 className="text-2xl font-bold text-indigo-950">
                Rakshya AI is almost online
              </h3>
              <p className="max-w-md mt-3 leading-relaxed text-gray-600">
                The chat interface will appear here after the Streamlit app URL
                is added to the site’s environment settings.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAvatar;
