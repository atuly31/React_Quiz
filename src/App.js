import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import Loader from'./Loader.js'
import Error from './Error.js'
import StartingPage from './StartingPage.js'
import Questions from './Questions.js'
import Progress from './Components/Progress.js'
import SubmitQuiz from './Components/SubmitQuiz.js'
const intialState = {
  questions:[],
  status:'loading',
  index:0,
  UserAnswer:null,
  points:0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecevied":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "dataDisplay":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        UserAnswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
      case "nextQuestion":
        return {
         ...state,
          index: state.index + 1,
          UserAnswer: null,
        };
      case"finshQuiz":
      return{...state, status: "submit"}

    default:
      throw new Error("");
  }
};
const App = () => {


  const [{questions, status,index,UserAnswer,points } , dispatch] = useReducer(reducer,intialState);
  const NumberOfquestions = questions.length;
  

  useEffect(function () {

    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecevied", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }))


  },[])

  const handleBtnClick =()=>{
    dispatch({type:'dataDisplay'});
  }

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartingPage
            NumberOfquestions={NumberOfquestions}
            handleBtnClick={handleBtnClick}
          />
        )}
        {status === "active" && (
          <>
          <Progress index={index} numQuestion={questions.length} points={points}/>
          <Questions
            question={questions[index]}
            UserAnswer={UserAnswer}
            dispatch={dispatch}
            index={index}
            numQuestions={NumberOfquestions}
          />
          </>
        )}
        {status === "submit" && <SubmitQuiz points={points}/>}
      </Main>
    </div>
  );
}

export default App

