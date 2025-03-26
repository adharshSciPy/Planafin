import React, { useState, useRef, useEffect } from "react";
import { Button, Flex, Form, Input } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import baseurl from "../../baseUrl";
import axios from "axios";
import { MinusCircleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./OurJourney.module.css";
import { useNavigate } from "react-router-dom";

function WebinarData() {
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [sections, setSections] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const navigate=useNavigate()
  // Sync sections with form field
  useEffect(() => {
    form.setFieldsValue({ attendSession: sections });
  }, [sections, form]);

  // Handle File Selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setImageFile(selectedFile);
  };

  // Handle Form Submission
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key === "attendSession") {
          sections.forEach((section) => {
            formData.append(`${key}[]`, section.name);
          });
        } else {
          formData.append(key, values[key]);
        }
      });

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await axios.post(
        `${baseurl}/api/v1/user/onDemand`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        toast.success("Webinar submitted successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });

        form.resetFields();
        setSections([]);
        setImageFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit Webinar!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // Add Section
  const addSection = () => {
    if (inputValue.trim() !== "") {
      setSections((prevItems) => [
        ...prevItems,
        { id: Date.now(), name: inputValue },
      ]);
      setInputValue("");
    }
  };

  // Remove Section
  const removeSection = (id) => {
    setSections((prev) => prev.filter((item) => item.id !== id));
  };

  // Reset Form
  const handleReset = () => {
    form.resetFields();
    setSections([]);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const showOurWebinar=()=>{
    navigate("/getWebinarData")
  }
  return (
    <>
      <Header />
      <div className={styles.buttonContainer}>
        <button className={styles.buttonStyle} onClick={showOurWebinar}>
          View All
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ fontSize: "36px" }}>Webinar Data</h1>
      </div>
      <div style={{ padding: "10px", overflow: "hidden" }}>
        <Form
          form={form}
          initialValues={{
            title: "",
            summary: "",
            pigment: "",
            speaker: "",
            attendSession: [],
          }}
          onFinish={handleSubmit}
          style={{ paddingBlock: 32 }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            name="title"
            label="Heading"
            rules={[{ required: true, message: "Please enter a heading" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="summary"
            label="Session Summary"
            rules={[
              { required: true, message: "Please enter a session summary" },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>

          <Form.Item
            name="pigment"
            label="About Pigment"
            rules={[
              { required: true, message: "Please enter details about pigment" },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>

          <Form.Item
            name="speaker"
            label="About the Speaker"
            rules={[
              {
                required: true,
                message: "Please enter details about the speaker",
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>

          {/* Attended Sessions */}
          <Form.Item name="attendSession" label="Attended Sessions">
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  margin: "auto",
                  gap: "10px",
                }}
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button onClick={addSection}>Add</Button>
              </div>
            </div>

            {/* List of sessions */}
            {sections.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  width: "50%",
                  marginInline: "auto",
                }}
              >
                <span>{item.name}</span>
                <MinusCircleOutlined
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => removeSection(item.id)}
                />
              </div>
            ))}
          </Form.Item>

          {/* Image Upload */}
          <Form.Item label="Image Upload">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </Form.Item>

          {/* Submit & Reset Buttons */}
          <Form.Item wrapperCol={{ offset: 6 }} style={{ marginTop: "30px" }}>
            <Flex gap="small">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button danger onClick={handleReset}>
                Reset
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default WebinarData;
