import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadForm from '../../components/prediction/UploadForm';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './Predict.css'; // Importing custom CSS for additional styling
const API_HOST = 'http://flask-app-service';

function Predict() {
  const [imageFile, setImageFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleUpload = (file) => {
    setImageFile(file);
  };

  const handlePrediction = async () => {
    const formData = new FormData();
    formData.append('filename', imageFile);
    try {
      const response = await axios.post(`${API_HOST}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPrediction(response.data.prediction);
      setShowResult(true);
    } catch (error) {
      console.error('Error predicting image:', error);
    }
  };

  const handleTryAgain = () => {
    setImageFile(null);
    setPrediction(null);
    setShowResult(false);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Plant Disease Classifier</h1>
          <p className="lead">AI tools for detecting plant diseases with ease.</p>
        </Col>
      </Row>
      {!showResult && (
        <Row className="justify-content-center mt-4 pd-4">
          <Col md={6}>
            <Card className="upload-card">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Upload an Image</Card.Title>
                <UploadForm onUpload={handleUpload} />
                <Button onClick={handlePrediction} className="btn-success my-3">Predict</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {showResult && (
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Card className="result-card">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Result</Card.Title>
                <img src={`${API_HOST}/uploads/${imageFile}`} alt="Uploaded Image" className="img-fluid" />
                <h5 className="mt-3">The predicted class is: {prediction}</h5>
                <Button onClick={handleTryAgain} className=' text-white bg-success'> Try Again</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {/* Additional cards */}
      <Row className="justify-content-center mt-4">
        <Col md={4}>
          <div className="card h-100 border-0 shadow-lg">
            <img
              src="../../images/AI-agriculture.jpg"
              className="card-img-top"
              alt="Disease Detection"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Disease Detection</h5>
              <p className="card-text">
                Utilizing AI and deep learning algorithms to identify plant diseases accurately. Our system can detect diseases early, allowing farmers to take preventive measures.
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-center">
              <a href="#" className="btn text-white bg-success">
                Learn More
              </a>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="card h-100 border-0 shadow-lg">
            <img
              src="../../images/AI-agriculture.png"
              className="card-img-top"
              alt="AI in Agriculture"
            />
            <div className="card-body">
              <h5 className="card-title text-center">AI in Agriculture</h5>
              <p className="card-text">
                Explore the role of AI in revolutionizing agriculture practices. Our AI-powered solutions not only detect diseases but also optimize crop management for better yields.
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-center">
              <a href="#" className="btn text-white bg-success">
                Learn More
              </a>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="card h-100 border-0 shadow-lg">
            <img
              src="../../images/pd.webp"
              className="card-img-top"
              alt="Deep Learning"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Deep Learning</h5>
              <p className="card-text">
                Understand the principles of deep learning and its applications in agriculture. Our deep learning models are trained on vast datasets to ensure accurate disease identification.
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-center">
              <a href="#" className="btn text-white bg-success">
                Learn More
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Predict;
