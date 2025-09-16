import { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function FooterComponent() {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState("");
  const [contatoFeedback, setContatoFeedback] = useState("");

  async function handleSubmit() {
    setFeedback("");
    setContatoFeedback("");
    const urlApi = `https://api-send-email-spring.onrender.com/api/v2/sendMessage`;
    try {
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromEmail: contatoFeedback,
          subject: feedback,
        }),
      });

      if (response.ok) {
        console.log("Email enviado com sucesso");
      }

      const result = await response.json();
      setFeedback("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className="bg-green-700 text-white py-10 px-6" id="contact">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="feedback" className="mb-2 font-semibold text-lg">
            {t("feedback.leaveFeedback")}
          </label>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder={t("feedback.youContactFeedback")}
              value={contatoFeedback}
              onChange={(e) => setContatoFeedback(e.target.value)}
              className="p-2 text-black"
            />
            <textarea
              id="feedback"
              rows={4}
              placeholder={t("writeHere")}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-3 rounded-md border border-green-400 text-black focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-3 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md font-bold shadow-md border border-white transition duration-200 self-start"
          >
            {t("feedback.sendFeedback")}
          </button>
        </div>

        <div className="flex gap-6 items-center text-2xl">
          <a
            href="https://github.com/lucasoliveira04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:lucasolisocialmedia@gmail.com"
            className="hover:text-gray-200 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-oliveira-campos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
