import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaEnvelope } from 'react-icons/fa'; // React Icons इम्पोर्ट करें

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="header">
        <h1 className='whitee'>Welcome to Hackathon 2024</h1>
        <p>Join us for an exciting event of innovation and collaboration!</p>
      </header>

      <div className="main-content">
        {/* Image Section */}
        <div className="image-section">
          <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="Hackathon" className="main-image" />
        </div>

        {/* About Section */}
        <section className="about-section">
          <h2>About Hackathon 2024</h2>
          <p>
            Hackathon 2024 is a premier event that brings together developers, designers, and database experts to
            create innovative solutions to real-world problems. Mark your calendars for an unforgettable experience – join us on <strong>01/08/2024</strong> from <strong>7 AM to 5 PM</strong> at <strong>LNCT College Bhopal</strong> for a day of innovation and collaboration!
          </p>
          <ul className="about-points">
            <li><FaCalendarAlt className="icon" /> Over 10 Workshops</li>
            <li><FaUsers className="icon" /> Networking with Industry Experts</li>
            <li><FaEnvelope className="icon" /> Exciting Prizes and Awards</li>
            <li>Collaborate with Talented Individuals</li>
          </ul>
        </section>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature">
            <h3>Schedule And Instructions</h3>
            <p>"Embark on a journey of learning and creation, with workshops, coding sprints, and a vibrant exchange of ideas."</p>
          </div>
          <button className="feature-button" onClick={() => navigate('/Instruction')}>Learn More</button>
        </div>
        <div className="feature-card">
          <div className="feature">
            <h3>Participate Category</h3>
            <p>"Choose your expertise: frontend, backend, UI design, or database – and contribute your skills to our hackathon's success!"</p>
          </div>
          <button className="feature-button" onClick={() => navigate('/Event')}> Learn More</button>
        </div>
        <div className="feature-card">
          <div className="feature">
            <h3>Organizer Contact</h3>
            <p>"For organizer contact, reach out to us at [Contact Email/Number] for any inquiries or assistance."</p>
          </div>
          <button className="feature-button" onClick={() => navigate('/Contact')}>Learn More</button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Join?</h2>
        <button className="cta-button2" onClick={() => navigate('/Signup')}>Register Now</button>
      </section>
    </div>
  );
};

export default HomePage;
