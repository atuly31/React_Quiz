export const Options = ({ question, options, dispatch, UserAnswer ,index , numQuestions}) => {
  const hasAnswer = UserAnswer !== null;
  return (
    <>
    <div className="options">
      {options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${index === UserAnswer ? "answer" : ""} ${hasAnswer ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
          key={index}  
        disabled = {hasAnswer}
        >
          {option}
        </button>
       
      ))}

    
    </div>
    
    { index<numQuestions-1 && hasAnswer && <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}> Next</button>};
    { index===numQuestions-1 && hasAnswer && <button className="btn btn-ui" onClick={()=>dispatch({type:"finshQuiz"})}>Submit</button>};
    </>
  );
};
