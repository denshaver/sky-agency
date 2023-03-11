const StepItem = (props) => {
  return (
    <div className="step">
      <h3>{props.count}-й этап</h3>
      <div className="step-line"></div>
      <img src="/img/steps/polygon.svg" alt="pointer" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default StepItem;
