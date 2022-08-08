import './style.scss';

import parse from "html-react-parser";

function InfoSection(props) {
  return (
    <div className="section info-section">

      <h2>{props.headline}</h2>

      <div className='info-section-content'>
        {props.content.map((item, index) => (
          <div className='info-item' key={index}>
            {item.headline && (<h3>{item.headline}:</h3>)}
            <p>{parse(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;
