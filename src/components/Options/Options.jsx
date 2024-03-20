import React from "react";

const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  const handleFeedback = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;
