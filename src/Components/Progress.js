

const Progress = ({index,numQuestion,points}) => {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index}></progress>
     <p>Questions <strong>{index+1}</strong>/{numQuestion}</p>
     <p>Points <strong>{points}</strong>/ 280 </p>
    </header>
  )
}

export default Progress