

const SubmitQuiz = ({points}) => {
    const percentage = (points/280)*100;
  return (
   <p className="result">
       Your Score is <strong>{points}</strong> out of 280 ({Math.ceil(percentage)}%)
   </p>
  )
}

export default SubmitQuiz