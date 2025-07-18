import React from 'react';
import './Team.css';
import twitterIcon from '../assets/icons/twitter.png';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';

const teamMembers = [
  {
    name: 'Laurent Wayne',
    role: 'Hotel Manager',
    social: ['twitter', 'facebook', 'instagram'],
  },
  {
    name: 'Josh Mullins',
    role: 'Kitchen Manager',
    social: [],
  },
  {
    name: 'Andrea Hugh',
    role: 'Recepcionista',
    social: [],
  },
  {
    name: 'James Norman',
    role: 'Room Service',
    social: [],
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <p className="subtitle">Meet Our Team</p>
      <h2 className="team-heading">Expert Team Persons</h2>
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <div className="team-box" key={index}>
            <div className={`team-square ${index === 0 ? 'highlight-box' : ''}`}>
  {index === 0 && (
    <div className="social-vertical">
      <img src={twitterIcon} alt="Twitter" className="icon" />
      <img src={facebookIcon} alt="Facebook" className="icon" />
      <img src={instagramIcon} alt="Instagram" className="icon" />
    </div>
  )}
</div>

            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
