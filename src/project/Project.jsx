import "./project.css";
import pic1 from './images/todo.jpg';
import pic2 from './images/calculator.jpg';
import pic3 from './images/EDA.jpeg';
import pic4 from './images/image.png';
import pic5 from './images/Sentiment_Analysis.jpeg';
import pic6 from './images/timeseries.jpeg';
const Project = () => {
  return (
    <div className="fp" id="Project">
      <h1 className="fh">Projects</h1>
      <div className="fl">
      <div class="cardd">
        <div class="card22">
            <img src={pic1} alt="" />
            {/* <video src={vid1} controls></video> */}
            <div className="video-info">
          <h3>ToDo App</h3>
          <p>Todo List project likely helps users manage tasks by allowing them to add, edit, and delete items. It may include features like marking tasks as complete, organizing them into categories, and possibly using local storage for data persistence.</p>
        </div>
        </div>
      </div>
      <div class="cardd">
        <div class="card22">
            <img src={pic2} alt="" />
            {/* <video src={vid2} controls></video> */}
            <div className="video-info">
          <h3>Calculator</h3>
          <p>JavaScript calculator is a web application that enables users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It provides a user-friendly interface for inputting numbers and operators, displaying the calculated result in real-time.</p>
        </div>
        </div>
      </div>
      <div class="cardd">
        <div class="card22">
            <img src={pic3} alt="" />
            {/* <video src={vid3} controls></video> */}
            <div className="video-info">
          <h3>Unveiling Patterns EDA</h3>
          <p>Exploratory Data Analysis (EDA) in Python is a process of examining and visualizing data to understand its patterns, trends, and distributions. It involves using libraries like Pandas and Matplotlib to clean data, compute summary statistics, and create visualizations for better insights.</p>
        </div>
        </div>

      </div></div>
      <div className="fl">
      <div class="cardd">
        <div class="card22">
            <img src={pic4} alt="" />
            {/* <video src={vid4} controls></video> */}
            <div className="video-info">
          <h3>Agricultural Product Sentiment Analysis</h3>
          <p>Sentiment analysis of farmer products in Python involves using natural language processing techniques to analyze and determine the sentiment (positive, negative, or neutral) expressed in text data related to agricultural products. The project likely includes preprocessing text, using a machine learning model, and possibly incorporating libraries like NLTK or spaCy for analysis.</p>
        </div>
        </div>
      </div>
      <div class="cardd">
        <div class="card22">
            <img src={pic5} alt="" />
            {/* <video src={vid5} controls></video> */}
            <div className="video-info">
          <h3>SentimentCraft</h3>
          <p>Sentiment analysis of products in Python. This project likely includes text preprocessing, feature extraction, and machine learning techniques to classify sentiments as positive, negative, or neutral, providing insights into customer opinions on various products.</p>
        </div>
        </div>
      </div>
      <div class="cardd">
        <div class="card22">
            <img src={pic6} alt="" />
            <div className="video-info">
          <h3>Time Series Analysis</h3>
          <p>"Temporal Analytics is like a time-travel guide for data, revealing patterns and trends over days, years, or any time interval. In modern terms, it is often referred to as Temporal Data Analysis or Temporal Analytics, emphasizing the analysis of data sequences over time to extract meaningful insights and predictions."</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Project;
