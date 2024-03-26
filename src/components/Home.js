import React from 'react';
import './Home.css';

function Home() {
  return (
    <main className="home-main">
      <section className="welcome-section">
        <h2>Welcome!</h2>
        <div className="introduction">
          <p>My name is Victor Wei, I am a Data Analyst/Engineer based in Seattle, WA, USA.</p>
          <p>Welcome to my personal portfolio website where I showcase my professional journey, from competitions to personal projects</p>
          <p>I am passionate about cutting-edge ML applications and turning data into insights.</p>
          <p>Explore my works in the project tab above and connect with me on social media! :) </p>
        </div>
      </section>
    </main>
  );
}

export default Home;