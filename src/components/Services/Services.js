import "./Services.css";
import ProjectImg from "../../images/project.svg";
import StructureImg from "../../images/structure.svg";
import FactoryImg from "../../images/factory.svg";


function Services({ openPopup }) {
  function getServices() {
    openPopup('ALL SERVICES - отсутствует')
  };

  return (
    <section className="services" id='services'>
      <div className="services__row">
        <div className="services__description">
          <article className="services__article">
            <h2 className="services__title">OUR CAPABILITIES</h2>
            <span className="services__border" />
          </article>
          <p className="services__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
          <button type="button" className='services__button' onClick={getServices}>ALL SERVICES</button>
        </div>
        <div className="services__cards">
          <div className="services__card">
            <img alt="Project" src={ProjectImg} className="services__img" />
            <h3 className="services__subtitle">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
            <p className="services__textCard">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>
          <div className="services__card">
            <img alt="Structure" src={StructureImg} className="services__img" />
            <h3 className="services__subtitle">STRUCTURE AUDIT AND MAINTENANCE</h3>
            <p className="services__textCard">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>
          <div className="services__card">
            <img alt="Factory" src={FactoryImg} className="services__img" />
            <h3 className="services__subtitle">FACTORY CONSTRUCTION AND MODELING</h3>
            <p className="services__textCard">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
