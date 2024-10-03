import React from 'react';
import './Event.css';
import { useNavigate } from 'react-router-dom';
import { FaPaintBrush, FaDatabase, FaCode, FaServer } from 'react-icons/fa'; // Icons

function CompetitionPage() {
  const navigate = useNavigate();

  return (
    <div className="competition-page">
      <h1>Competition Categories</h1>

      <div className="competition-category">
        <div className="competition-card ui-design">
          <img src="https://media.istockphoto.com/id/1218511457/photo/top-view-asian-ux-developer-and-ui-designer-brainstorming-about-mobile-app-interface.jpg?s=612x612&w=0&k=20&c=Py1-O62Y4vFzJ_BoMPdRmr8h-bqN1gcFZy6tWWSw0JI=" alt="UI Design" />
          <h3>UI Design Competition</h3>
          <p>Get creative in the UI Design category and craft user interfaces that captivate and engage users.</p>
          <p>Competition Level: Open to all skill levels</p>
          <p>Instructions: Create aesthetically pleasing designs that seamlessly blend form and function.</p>
          <div className="icons">
            <FaPaintBrush title="Design Icon" />
          </div>
        </div>
      </div>

      <div className="competition-category">
        <div className="competition-card database">
          <img src="https://media.istockphoto.com/id/1980358460/photo/cloud-computing-data-center-multi-cloud-hybrid-cloud-information-storage-cyber-security.jpg?s=612x612&w=0&k=20&c=ELDOfSVxHh8xoMCzpzVYYfREKk49hXMyEMjfAUp67Tg=" alt="Database Design" />
          <h3>Database Competition</h3>
          <p>Put your data skills to the test and design robust database systems that handle real-world challenges.</p>
          <p>Competition Level: Intermediate to Advanced</p>
          <p>Instructions: Design and implement efficient database schemas.</p>
          <div className="icons">
            <FaDatabase title="Database Icon" />
          </div>
        </div>
      </div>

      <div className="competition-category">
        <div className="competition-card frontend">
          <img src="https://media.istockphoto.com/id/168282644/photo/motorcycle.jpg?s=612x612&w=0&k=20&c=LTNrdnhYhiqvaMBN3UfZoKJjMI9uMeA2U2U0lslm9MI=" alt="Frontend Development" />
          <h3>Frontend Development Competition</h3>
          <p>Showcase your coding finesse by crafting stunning and interactive user interfaces.</p>
          <p>Competition Level: All levels welcome</p>
          <p>Instructions: Build responsive and intuitive web applications using HTML, CSS, and JavaScript.</p>
          <div className="icons">
            <FaCode title="Frontend Icon" />
          </div>
        </div>
      </div>

      <div className="competition-category">
        <div className="competition-card backend">
          <img src="https://media.istockphoto.com/id/2012469756/photo/glowing-abstract-binary-code-and-a-laptop.jpg?s=612x612&w=0&k=20&c=u2DvxvVJCRDv4xa5KY36vM9z96lue1roS6T6XDT0jHk=" alt="Backend Development" />
          <h3>Backend Development Competition</h3>
          <p>Dive into the realm of server-side development and architect robust systems that power modern applications.</p>
          <p>Competition Level: Intermediate to Advanced</p>
          <p>Instructions: Design scalable backend solutions and develop secure server-side code.</p>
          <div className="icons">
            <FaServer title="Backend Icon" />
          </div>
        </div>
      </div>

      <div className="cta-button" onClick={() => navigate('/')}>
        Back
      </div>
    </div>
  );
}

export default CompetitionPage;
