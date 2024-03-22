import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import { useState, useEffect } from "react";

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedback, setFeedback] = useState(initialState);

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  const handleReset = () => {
    localStorage.removeItem("feedback");
    setFeedback(initialState);
  };

  return (
    <div>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={(type) =>
          setFeedback({ ...feedback, [type]: feedback[type] + 1 })
        }
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback yet." />
      )}
      <div>
        <p>Total feedback: {totalFeedback}</p>
        <p>
          Positive feedback percentage:{" "}
          {isNaN(positiveFeedbackPercentage) ? 0 : positiveFeedbackPercentage}%
        </p>
      </div>
    </div>
  );
};

export default App;
