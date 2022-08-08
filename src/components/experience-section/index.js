import './style.scss';

function ExperienceSection(props) {
  return (
    <div className="section experience-section">

      <h2>{props.headline}</h2>

      <div className='info-experience-content'>
        {props.content.map((item, index) => (
          <div className='experience-item' key={index}>
            <div className='experience-item-headline'>
              <h3>{item.company}</h3>{item.task && (<><span> / </span><span>{item.task}</span></>)}
            </div>
            <h4>{item.fromTo}{item.location && ', ' + item.location}</h4>
            {item.tasks && (
              <ul className='experience-tasks'>
                {item.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
