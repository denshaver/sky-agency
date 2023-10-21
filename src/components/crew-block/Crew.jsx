import "./Crew.css";
import CrewItem from "./CrewItem";

const persons = [
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
  {
    id: 1,
    img: "/img/crew/image1.png",
    personName: "Равшан О.",
    role: "Founder",
  },
  {
    id: 2,
    img: "/img/crew/image2.png",
    personName: "Акбар А.",
    role: "Founder of DDA",
  },
  {
    id: 3,
    img: "/img/crew/image3.png",
    personName: "Алика П.",
    role: "Project Manager",
  },
  {
    id: 4,
    img: "/img/crew/image4.png",
    personName: "МУаззам А.",
    role: "SMM Manager",
  },
  {
    id: 5,
    img: "/img/crew/image5.png",
    personName: "Дилором Б.",
    role: "Copywriter",
  },
  {
    id: 6,
    img: "/img/crew/image6.png",
    personName: "Сабина К.",
    role: "SMM Manager",
  },
  {
    id: 7,
    img: "/img/crew/image7.png",
    personName: "Каромат Г.",
    role: "SMM Manager",
  },
];

const Crew = () => {
  return (
    <div className="crew-wrapper" id="crew-block">
      <span>Команда</span>
      <h2>Команда Sky</h2>
      <div className="crew-scroll">
        <div className="crew">
          {persons.map((p) => {
            return <CrewItem person={p} key={p.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Crew;
