
import { Options } from "./Components/Options";
const Questions = ({question,UserAnswer,dispatch,index,numQuestions}) => {
    console.log(question);

   
  return (
    <div>
        <h4>{question.question}</h4>
        <Options question = {question}options ={question.options} UserAnswer={UserAnswer} dispatch={dispatch} index={index} numQuestions={numQuestions}/>
    </div>
  )
}

export default Questions