import React from 'react';
import './Projects.css'; 

const projectData = [
  {
    id: 1,
    title: "Petals to the Metal Kaggle Competition",
    description: "Developed a custom convolutional neural network to classify 104 types of flowers from images, employing data augmentation, L2 regularization, and learning rate optimization. ",
    githubLink: "https://github.com/VictorSquidWei/Petals-to-the-Metal-Kaggle-Competition"
  },
  {
    id: 2,
    title: "Accenture Generative AI Case Competition",
    description: "Self-Prompting AI Approach to Phishing Emails",
    githubLink: "https://github.com/VictorSquidWei/Accenture-Generative-AI-Case-Competition-2023"
  },
  {
    id: 3,
    title: "NBA Player Future Hall of Fame Prediction",
    description: "Applies a Decision Tree Classifier to predict NBA player inductions into the Hall of Fame. Using historical player statistics and performance metrics, the model provides evaluation of which factors contribute most significantly to a player's likelihood of reaching hof status. ",
    githubLink: "https://github.com/VictorSquidWei/NBA-HOF-prediction-with-DecisionTreeClassifier"
  },
  {
    id: 4,
    title: "Amazon Stock Forecast",
    description: "ML Project forecasting the closing price of Amazon's stock for a given day leveraging its historical performance data. The model performes time-series forecasting with Rolling OLS Regression. ",
    githubLink: "https://github.com/VictorSquidWei/Amazon-Stock-Forecast-with-Rolling-OLS"
  },
  {
    id: 5,
    title: "IBM Employee Attrition Prediction with Ensemble Learning Methods",
    description: "Predict employee attrition using ensemble learning techniques on the HR Employee Attrition dataset. The goal is to identify factors that contribute to employee attrition and build accurate prediction models to assist HR departments in managing employee retention. ",
    githubLink: "https://github.com/VictorSquidWei/IBM-Employee-Attrition-Prediction-with-Ensemble-Learning-Methods"
  },
  {
    id: 6,
    title: "MindSight AI",
    description: "Artificial Intelligence based model designed to assist in the early detection of mental disorders among college students ",
    githubLink: "https://github.com/VictorSquidWei/MINDSIGHT-AI"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      {projectData.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;