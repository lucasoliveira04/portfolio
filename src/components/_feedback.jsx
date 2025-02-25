import { useState } from "react";
import { getTexts } from "../data/text";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

function FeedBackComponent({ language }) {
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);
    const text = getTexts(language);
    const emojiRatings = ["👎😡", "👎☹️", "😐", "👍🙂", "👍🤩"];

    const handleSendResponse = async () => {
        alert("Feedback enviado com sucesso!");
        setFeedback("");
        setRating(0);
        window.location.reload()

        const emailRequest = {
            configurationMail: {
                host: "smtp.gmail.com",
                port: "587",
                username: "camposdlucasoli@gmail.com",
                password: "kwqjsnlelyhchkzp",
                supportMail: "camposdlucasoli@gmail.com",
            },
            emailRequest: {
                title: "Feedback Portfolio",
                message: `${feedback}\n\n<br/>Avaliação: ${rating} estrelas`, 
                contacts: "camposdlucasoli@gmail.com",
                subject: "Feedback",
                nameProjectOrNameBusiness: "Meu Projeto",
            },
        };

        try {
            await fetch(
                "https://api-send-email-46gw.onrender.com/api/send/email/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(emailRequest),
                }
            );
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    return (
        <div className="bg-[#111316] flex justify-center items-center h-[70vh] px-4">
            <div className="border border-gray-700 rounded-2xl w-full max-w-[700px] p-6 bg-[#1a1c20] shadow-lg hover:border-blue-300 transition-all duration-1000">
                <h4 className="text-2xl text-white font-semibold mb-4">
                    {text.feedback}{" "}
                    {rating > 0 && (
                        <motion.span
                            key={rating} 
                            className="ml-2 text-3xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {emojiRatings[rating - 1]}
                        </motion.span>
                    )}
                </h4>

                <textarea
                    rows={5}
                    placeholder={text.feedback}
                    className="w-full p-3 text-white font-medium bg-[#111116] border border-gray-600 rounded-md outline-none focus:border-blue-400 transition resize-none"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>

                <StarRating setRating={setRating} /> 

                <button
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-[#3f6edc] to-[#6249dd] hover:bg-[#d3d3d3] text-white font-medium rounded-lg transition border border-gray-600 shadow-md"
                    onClick={handleSendResponse}
                >
                    {text.sendFeedback}
                </button>
            </div>
        </div>
    );
}

export default FeedBackComponent;
