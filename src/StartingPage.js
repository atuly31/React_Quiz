

const StartingPage = ({NumberOfquestions,handleBtnClick}) => {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{NumberOfquestions} Questions to test Your React mastery</h3>
      <button className="btn btn-ui" onClick={handleBtnClick}>Let's Start</button>
    </div>
  );
};

export default StartingPage;
