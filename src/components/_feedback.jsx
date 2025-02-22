import { getTexts } from "../data/text";
import StarRating from "./StarRating";

function FeedBackComponent({ language }) {
    const text = getTexts(language);

    return (
        <div className="bg-[#111316] flex justify-center items-center h-96 px-4">
            <div className="border border-gray-700 rounded-2xl w-full max-w-[700px] p-6 bg-[#1a1c20] shadow-lg">
                <h4 className="text-2xl text-white font-semibold mb-4">{text.feedback}</h4>

                <textarea
                    rows={5}
                    placeholder={text.feedback}
                    className="w-full p-3 text-white font-medium bg-[#111116] border border-gray-600 rounded-md outline-none focus:border-purple-400 transition"
                ></textarea>

                <StarRating />

                <button className="mt-4 px-6 py-2 bg-[#5b35c2] hover:bg-[#4b3ae3] text-white font-medium rounded-lg transition border border-gray-600 shadow-md">
                    {text.sendFeedback}
                </button>
            </div>
        </div>
    );
}

export default FeedBackComponent;
