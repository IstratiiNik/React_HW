import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, Descriptions } from "antd";
import "./App.css";

const { Title } = Typography;
const { TextArea } = Input;

function App() {
  // State for form fields
  const [formData, setFormData] = useState({ name: "", description: "" });
  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    // Main container
    <div style={{ padding: "40px 20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* Title */}
      <Title level={2}>Form using Ant Design</Title>
      {/* Form */}
      <Form layout="vertical">
        {/* Name input field */}
        <Form.Item label="Name">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Insert your name"
            size="large"
          />
        </Form.Item>

        {/* Description input field */}
        <Form.Item label="Description">
          <Input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Insert description"
            rows={4}
          />
        </Form.Item>

        {/* Submit button */}
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Sent
          </Button>
        </Form.Item>
      </Form>

      {/* Card with submitted data */}
      {submittedData && (
        <Card style={{ marginTop: "20px", borderRadius: "8px" }}>
          <Title level={4}>Sent data:</Title>
          <p>
            <strong>Name:</strong>
            {submittedData.name}
          </p>
          <p>
            <strong>Description:</strong>
            {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
