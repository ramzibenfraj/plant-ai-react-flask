import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import axios from "axios";
import { AiOutlineUpload } from "react-icons/ai";
const API_HOST = 'http://flask-service:5000/';

function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(false);
  const [plantName, setPlantName] = useState("");
  const [description, setDescription] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setVisible(true); // Open the modal when a file is selected
  };

  const handleInputChange = (e) => {
    setPlantName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("plantName", plantName);
    formData.append("description", description);
    try {
      const response = await axios.post(
        `${API_HOST}/predict`,
        formData
      );
      onUpload(response.data.filename);
      setVisible(false); 
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleCloseModal = () => {
    setVisible(false);
    setFile(null);
  };

  return (
    <div className="col-md-6">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        variant="success"
        onClick={handleButtonClick}
        className={`mt-3 px-4 btn-lg ${isMouseOver ? "bg-success text-white" : "bg-white text-success"}`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <AiOutlineUpload /> Upload Image
      </Button>

      <Modal
        title="Predict"
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button
            key="Upload"
            type="primary"
            className={ "bg-success text-white"}
            onClick={handleUpload}
            style={{ marginBottom: "10px" }}
          >
            Upload
          </Button>, // Added inline style for padding
        ]}
      >
        <div>
          <label>Name Plant:</label>
          <Input value={plantName} onChange={handleInputChange} />
          <label>Description:</label>
          <Input.TextArea
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </Modal>
    </div>
  );
}

export default UploadForm;
