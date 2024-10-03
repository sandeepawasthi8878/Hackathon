
import React from 'react';
import './Instruction.css'; 
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();

  const scheduleData = [
    { time: '08:00 AM - 09:00 AM', event: 'Registration and Breakfast' },
    { time: '09:15 AM - 09:30 AM', event: 'Opening Ceremony and Welcome Speech' },
    { time: '09:30 AM - 11:00 AM', event: 'Workshop: Introduction to Coding' },
    { time: '11:15 AM - 01:00 PM', event: 'Team Formation and Ideation' },
    { time: '01:00 PM - 02:00 PM', event: 'Lunch Break' },
    { time: '02:15 PM - 04:00 PM', event: 'Coding Sprint' },
  ];

  const instructionsData = [
    'Be punctual and attend all scheduled events.',
    'Bring your own laptops and necessary tools.',
    'Follow the code of conduct and be respectful to fellow participants.',
    'Teams should have a mix of skills (design, coding, etc.).',
    'Collaborate and communicate effectively within your team.',
    'Ask for help from mentors and organizers if needed.',
    'Focus on innovation, creativity, and problem-solving.',
    'Prepare a short presentation for project showcasing.',
    'Use version control and commit frequently.',
    'Keep your project files organized.',
    'Final project submission by 4:00 PM.',
  ];

  const frontendTips = [
    'Responsive Design: Ensure your frontend is responsive and works well on various devices and screen sizes, including smartphones, tablets, and desktops.',
    'User-Centric Approach: Prioritize user experience by creating intuitive navigation, clear layouts, and interactive elements that enhance usability.',
    'Modern Frameworks: Utilize the latest frontend frameworks and libraries such as React, Angular, or Vue.js to streamline development and enhance the performance of your application.',
  ];

  const backendTips = [
    'Scalability: Design your backend architecture to be scalable, considering factors like load balancing, caching, and efficient use of server resources.',
    'Security Measures: Implement robust security practices, including input validation, proper authentication and authorization mechanisms, and protection against common vulnerabilities like SQL injection and cross-site scripting (XSS).',
    'API Design: If your project involves interacting with APIs, design your backend APIs with a clear and consistent structure, using RESTful or GraphQL principles.',
  ];

  const uiDesignTips = [
    'Visual Consistency: Maintain a consistent visual style throughout the application, including color schemes, typography, and icons, to create a unified user experience.',
    'Prototype Iteration: Create wireframes or prototypes before diving into full UI design to iterate and gather feedback early on. This helps identify potential design flaws and improvements.',
    'Microinteractions: Implement subtle animations and microinteractions that enhance user engagement and provide feedback for various actions, making the UI more dynamic and engaging.',
  ];

  const databaseTips = [
    'Data Modeling: Design an efficient database schema that accurately represents the data your application needs to manage. Normalize where necessary and use appropriate relationships between tables.',
    'Data Integrity: Ensure data integrity by implementing constraints, such as unique keys and foreign key relationships, to prevent inconsistencies and errors in the database.',
  ];
  return (
    <div className="event-page">
      <section className="schedule-section">
        <h2>Hackathon Event Schedule</h2>
        <div className="schedule">
          {scheduleData.map((item, index) => (
            <div key={index} className="schedule-item">
              <p className="time">{item.time}</p>
              <p className="event">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="instructions-section">
        <h2>Event Instructions</h2>
        <div className="instructions">
          <p>Welcome to Hackathon 2024! Here are some important instructions for participants:</p>
          <ul>
            {instructionsData.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="frontend-tips">
        <h1>Must Read</h1>
        <h2>Frontend Tips</h2>
        <ul>
          {frontendTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="backend-tips">
        <h2>Backend Tips</h2>
        <ul>
          {backendTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="ui-design-tips">
        <h2>UI Design Tips</h2>
        <ul>
          {uiDesignTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>
      
    <section className="database-tips">
      <h2>Database Tips</h2>
      <ul>
        {databaseTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </section>

      <div className="button" onClick={() => navigate('/')}>
        Back
      </div>
    </div>
  );
};

export default EventPage;
