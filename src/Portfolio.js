import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-[#0a192f] text-white' : 'bg-white text-black'} flex`}>
      {/* Sidebar */}
      <div className="w-1/3 fixed h-full top-0 left-0 px-36 py-28 flex flex-col justify-start items-start space-y-10 z-50">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-6 left-6 p-2 rounded-full border border-gray-500 hover:shadow-md text-lg">
          {darkMode ? '🌙' : '☀️'}
        </button>

        <div className="self-start">
          <h1 className={`text-4xl font-bold whitespace-nowrap ${darkMode ? 'text-gray-200' : 'text-black'}`}>Sai Vishal Kannan</h1>
          <p className={`text-lg mt-1 font-semibold ${darkMode ? 'text-teal-400' : 'text-blue-800'}`}> Machine Learning Analyst</p>
          <p className={`text-lg mt-2 max-w-xs leading-snug ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Passionate about data. Obsessed with building ML models that perform and scale.</p>
        </div>

        <div className="flex space-x-4 text-4xl">
          <a href="https://www.linkedin.com/in/saivishalkannan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/SaiVishalKannan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/saivishalkannan" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="mailto:saivishal1997@gmail.com"><MdEmail /></a>
        </div>

        <div className="flex flex-col space-y-4 mt-6 text-left">
          {['about', 'experience', 'projects', 'education', 'skills'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`uppercase tracking-widest text-base font-bold ${darkMode ? 'text-gray-300 hover:text-white' : 'text-black hover:text-blue-600'} transition group`}
            >
              <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">{section}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="ml-[35%] w-[65%] px-6 md:px-12 overflow-y-scroll relative">
        {/* About */}
        <section id="about" className="pt-48 text-base leading-relaxed max-w-3xl ml-auto">
          <p className="mb-6">
            Data science professional passionate about Machine Learning , Data Analytics, NLP, Data Visualization, and Big Data. Proficient in Python, SQL, Neo4j, Hive, Hadoop, React.js, Apache Spark, and Power BI. I build ML prototypes like text-to-speech systems, anomaly detectors, and intelligent decision models.
          </p>
          <p className="mb-6">
            Recently, I developed an ML-based transaction monitoring system designed to help compliance teams detect and prevent money laundering. The model uses unsupervised learning techniques and predictive analysis to flag suspicious behavior, ensuring scalability across financial ecosystems. This initiative helps reduce manual investigation efforts while improving fraud detection accuracy.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-20 grid gap-8 max-w-3xl ml-auto">
          <div className="p-6 rounded-xl bg-gray-800 hover:scale-105 transition-transform shadow-md">
            <p className="text-xs text-gray-400">JULY — OCT 2024</p>
            <h3 className="text-lg font-semibold text-white">Data Analyst · Alation · London</h3>
            <p className="mt-2 text-gray-300">Developed advanced data cataloguing workflows to enhance data discovery, lineage visibility, and governance for enterprise clients. Utilized Python and SQL to automate data lineage tracking, ensuring data integrity and compliance with regulatory standards. Worked closely with data engineers and analysts to streamline metadata management, leading to improved query performance across platforms. Delivered client-specific insights through interactive dashboards and reports using business intelligence tools.</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 hover:scale-105 transition-transform shadow-md">
            <p className="text-xs text-gray-400">2020 — 2021</p>
            <h3 className="text-lg font-semibold text-white">Junior Data Analyst · Hubino Technologies</h3>
            <p className="mt-2 text-gray-300">Worked on NLP and anomaly detection across multiple client datasets to support strategic business decision-making. Collected, cleaned, and organized large datasets to ensure data quality and consistency. Created impactful dashboards and visualizations to communicate insights to stakeholders. Contributed to the development of predictive forecasting models in Power BI, enabling data-driven planning and proactive business strategies.</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20 grid gap-8 max-w-3xl ml-auto">
          {[{
            title: "Sentiment Analysis on Customer Reviews",
            description: "Developed a sentiment analysis model in Python to classify customer reviews into positive, negative, or neutral categories. Implemented advanced text preprocessing techniques including tokenization, lemmatization, and word embeddings using Word2Vec and GloVe. Trained and evaluated multiple machine learning algorithms—Logistic Regression, Naive Bayes, and Random Forest—achieving high classification accuracy. Leveraged model insights to recommend actionable strategies aimed at enhancing overall customer satisfaction.",
            tags: ['Python', 'Word2Vec', 'GloVe', 'Random Forest', ' BeautifulSoup', 'spaCy', 'NLTK']
          }, {
            title: "ML-Based Transaction Monitoring System",
            description: "Developed an ML-based transaction monitoring system designed to help compliance teams detect and prevent money laundering. The model uses unsupervised learning techniques and predictive analysis to flag suspicious behavior, ensuring scalability across financial ecosystems. This initiative helps reduce manual investigation efforts while improving fraud detection accuracy.",
            tags: ['Python', 'Machine Learning', 'Neo4j' , 'Predictive Analysis', 'Apache NiFi' , 'SAR Automation']
          }, {
            title: "Text Clarity and Classification Prototype",
            description: "A text clarity prototype (algorithm) was developed using labelled data. A Logistic Regression Classifier was used to build the model, with leveraging TF-IDF vectorization, and achieved an accuracy of 93%. The model showed no sign of overfitting, and the F1 score was the notable scaler performance metric",
            tags: ['Python', 'TF-IDF', 'Logistic Regression', 'NLP']
          }, {
            title: "Loan Default Risk Analysis",
            description: "Worked on a project focused on risk analytics in the banking and financial sector to help minimize customer default risks. Performed comprehensive exploratory data analysis (EDA), including univariate and bivariate techniques, to identify behavioral and demographic patterns differentiating defaulters from non-defaulters. Leveraged visualizations such as scatter plots, box plots, and histograms to uncover key risk factors, enabling data-driven decisions like loan denial or amount reduction to mitigate financial losses.",
            tags: ['Python', 'Power BI', 'Data Visualization']
          }].map((proj, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-gray-800 hover:scale-105 transition-transform shadow-md">
              <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
              <p className="mt-2 text-gray-300">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-2 text-xs">
                {proj.tags.map(tag => <span key={tag} className="bg-gray-700 px-3 py-1 rounded text-gray-200">{tag}</span>)}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section id="education" className="mt-20 max-w-3xl ml-auto">
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
              <h3 className="cursor-pointer text-white">M.Sc. Data Science · University of Greenwich </h3>
              <p className="text-sm text-gray-400 mt-2">Coursework: Applied ML, Anti-Money Laundering, Big Data, Data Visualization, Crypto, Linear Algebra & Stats</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
              <h3 className="cursor-pointer text-white">PGDP - Data Science · International Institute of Information Technology Bangalore </h3>
              <p className="text-sm text-gray-400 mt-2">Coursework: Python, SQL, Machine Learning, Stats, Big Data, Power BI</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20 grid gap-6 max-w-3xl ml-auto">
          {[{
            title: 'Programming', skills: 'Python, SQL'
          }, {
            title: 'Frameworks', skills: 'Scikit-learn, OpenAI Gym, NLTK'
          }, {
            title: 'Big Data', skills: 'Apache Spark, Hive, Hadoop'
          }, {
            title: 'Tools', skills: 'GIT, Jupyter, Colab, Pandas, Neo4j, Power BI, Node.js, VS Code'
          }, {
            title: 'Cloud', skills: 'AWS, Databricks'
          }].map((block, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl hover:scale-105 transition-transform">
              <p className="text-white"><strong>{block.title}:</strong> <span className="text-gray-300">{block.skills}</span></p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="flex justify-between items-center mt-20 py-6 border-t border-gray-600 text-sm text-gray-500 w-full">
          <p className="text-left">Designed & Developed by Sai Vishal Kannan</p>
          <p className="text-right">Coded in VS Code · Powered by React · Styled with Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;