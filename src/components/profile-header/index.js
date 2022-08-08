import './style.scss';

function ProfileHeader(props) {
  return (
    <div className="section profile-header">

      <div className="profile-picture no-line">
        <img src={props.profilePicture} alt={props.firstName + ' ' + props.lastName} />
        <h1 className="job-description secondary-color">{props.jobDescription}</h1>
      </div>

      <div className="profile-info">
        <h2>{props.firstName} {props.lastName}</h2>
        {
          props.address && (
            <address className='address'>
              <div className='address-street-nr'>
                {props.address.street} {props.address.streetNumber}
              </div>
              <div className='address-location'>
                {props.address.zipCode} {props.address.city}, {props.address.country}
              </div>
            </address>
          )
        }

        {props.phone && (
          <span className='contact-detail'>
            📱
            <a className="secondary-color" href={'tel:' + props.phone}>
              {props.phone}
            </a>
          </span>
        )}

        {props.mail && (
          <span className='contact-detail'>
            ✉️
            <a className="contact-detail secondary-color" href={'mailto:' + props.mail}>
              {props.mail}
            </a>
          </span>
        )}

        {(props.profileLinks || []).map((item, index) => {
          return <div className='profile-link' key={index}>
            <h3>{item.headline}:</h3>
            <a className="contact-detail secondary-color" href={item.link} target="_blank" rel="noreferrer">{item.label || item.link}</a>
          </div>
        })}
      </div>
    </div>
  );
}

export default ProfileHeader;
