import FaqList from "./FaqList";
const questions = [
  {
    id: 1,
    question: "Do you offer refunds?",
    answer: "Yes, we offer refunds",
  },
  {
    id: 2,
    question:
      "Do you charge for delivery / pick up on your luxury rental cars?",
    answer: "To use Tailwind CSS, you can either include it...",
  },
  {
    id: 4,
    question: "How many miles are includes in the rental rate?",
    answer: "To use Tailwind CSS, you can either include it...",
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer: "Yes, we offer refunds",
  },
  {
    id: 5,
    question:
      "Do you charge for delivery / pick up on your luxury rental cars?",
    answer: "To use Tailwind CSS, you can either include it...",
  },
  {
    id: 6,
    question: "How many miles are includes in the rental rate?",
    answer: "To use Tailwind CSS, you can either include it...",
  },
];

const Faq = () => {
  return (
    <div className="py-[80px]">
      <div className="section-title text-center mb-10">
        <h2 className="text-[30px] font-semibold mb-3">FAQ</h2>
        <p>
          Some of the frequently asked questions our customers often ask about
          our rental procedures.
        </p>
      </div>
      <FaqList title="Payment" questions={questions} />
      <FaqList title="Preparation" questions={questions} />
    </div>
  );
};

export default Faq;
