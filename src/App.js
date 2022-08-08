import './App.scss';
import config from './config';

import ProfileHeader from './components/profile-header';
import InfoSection from './components/info-section';
import ExperienceSection from './components/experience-section';

function App() {
  return (
    <div className="App">
     <ProfileHeader {...config} />
     {config.sections.map((item, index) => {
      switch (item.type) {
        case 'info':
          return <InfoSection key={index} {...item} />
          
        case 'experience':
          return <ExperienceSection key={index} {...item} />

        default:
          return null;
      }
     })}
    </div>
  );
}

export default App;
