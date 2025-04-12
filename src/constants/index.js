import project1 from "../assets/projects/medmate.jpg";
import project2 from "../assets/projects/fitform.png";
import project3 from "../assets/projects/hpp.png";
import project4 from "../assets/projects/project-4.webp";
import sa from "../assets/projects/sa.jpg";
import fi from "../assets/projects/fi.jpeg";


export const HERO_CONTENT = `I am a passionate Computer Science student specializing in AI & ML, with experience in building intelligent systems and scalable applications. With a strong foundation in Python, C++, and web technologies, I have developed projects ranging from medical chatbots to data-driven analytics tools. My goal is to leverage AI and ML to create impactful solutions that improve real-world decision-making.`;

export const ABOUT_TEXT = `I am a dedicated and innovative AI & ML enthusiast with a keen interest in developing smart applications. Currently pursuing a B.Tech in Computer Science, I have worked on projects in Machine Learning, Deep Learning, and Web Development. My expertise includes developing RAG-based medical chatbots, predictive models, and intelligent automation systems. I am always eager to learn, collaborate, and explore new technologies that push the boundaries of innovation. Outside of coding, I enjoy creating digital designs and engaging in tech communities.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Present",
    role: "Intern",
    company: "Indian Oil Corporation Limited",
    description: `Optimized data extraction in Qlik Sense for customer churn prediction by identifying and correcting errors in data fetching. Developed efficient logic to retrieve specific customer data, improving analysis accuracy and efficiency.`,
    technologies: ["Qlik Sense", "Python", "SQL"]
  },
  {
    "year": "May 2023 - Jan 2024",
    "role": "Junior Researcher",
    "company": "IIC-IEDC LAB, Institute of Engineering and Management",
    "description": 
      "Led 10+ experiments, ensuring data accuracy and compliance. Developed 5+ IoT projects and implemented 7+ ML algorithms, including reinforcement learning.",
    "technologies": ["TensorFlow", "Scikit-Learn", "Python", "IoT"]
}
];

export const PROJECTS = [
  {
    title: "MedMate – Medical Chatbot with RAG Pipeline",
    image: project1,
    description:
      "Developed a medical chatbot leveraging Retrieval-Augmented Generation (RAG) to provide accurate disease predictions and recommendations, improving response accuracy by 35% and reducing health info access time by 40%.",
    technologies: ["Python", "TensorFlow", "RAG", "FAISS", "LangChain"]
  },
  {
    title: "ShapeFormance: Keep your form in Check!",
    image: project2,
    description:
      "Created a smart gym monitoring system using ML and IoT to track lifting form and count repetitions, achieving 87% accuracy in movement analysis with over 10,000+ motion data points collected.",
    technologies: ["NumPy", "Pandas", "Scikit-Learn", "Ensemble Learning"]
  },
  {
    "title": "Finance AI : Your Personal Stock Market Guide",
    "image": fi,
    "description": 
      "Developed a multi-modal agentic AI system to retrieve and analyze stock details, providing insights through real-time data aggregation and trend analysis.",
    "technologies": ["Python", "LangChain", "Groq API", "Yahoo Finance", "PhiData", "DuckDuckGo"]
},
{
  "title": "LipRead AI: Turn your words into Captions!",
  "image": project4,
  "description": 
    "Built a deep learning model that transcribes speech from videos by analyzing lip movements. Utilized a multi-modal approach combining computer vision and sequence modeling for accurate word recognition.",
  "technologies": ["Python", "TensorFlow", "OpenCV", "LSTM", "CNN", "Google Colab"]
},
{
  "title": "IMDB Sentiment Analyzer: Movies! Good or Bad?",
  "image": sa,
  "description": 
    "Developed a sentiment analysis model to classify movie reviews from the IMDB dataset as positive or negative. Leveraged NLP techniques and deep learning for high accuracy in sentiment classification.",
  "technologies": ["Python", "NLTK", "TensorFlow", "Scikit-Learn", "LSTM", "Pandas"]
}
,
  {
    title: "House Price Prediction Model: Predict Your Property Value",
    image: project3,
    description:
      "Built a house price prediction model with 92% accuracy using Random Forest and Gradient Boosting, reducing MAE by 20% and increasing accuracy by 12%.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn"]
  }

];

export const CONTACT = {
  address: "Institute of Engineering and Management, Kolkata, India",
  phoneNo: "+91 9903316080",
  email: "avhisheknandi03@gmail.com",
};