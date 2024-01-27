const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return(
    <p>
      {props.name} {props.numberOfExercises}
    </p>
  );
}

const Content = (props) => {
  return(
    <>
      <Part name={props.name1} numberOfExercises={props.number1} />
      <Part name={props.name2} numberOfExercises={props.number2} />
      <Part name={props.name3} numberOfExercises={props.number3} />
    </>
  );
}

const Total = (props) => {
  return(
    <p>
      Number of exercises {props.sum}
    </p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return(
    <div>
      <Header course={course } />
      <Content name1={part1} name2={part2} name3={part3} number1={exercises1} number2={exercises2} number3={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3}/>
    </div>
  );
}

export default App;