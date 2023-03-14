const CrewItem = ({ person }) => {
  return (
    <div className="crew-item">
      <img src={person.img} alt="Crew" />
      <span>{person.role}</span>
      <h4>{person.personName}</h4>
    </div>
  );
};

export default CrewItem;
