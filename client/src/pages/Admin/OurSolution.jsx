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

function OurSolution() {
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const contentFileInputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [sections, setSections] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [contentImageFile, setContentImageFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue({ contentPoints: sections });
  }, [sections, form]);

  const handleFileChange = (e, type) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (type === "business") {
        setImageFile(selectedFile);
      } else if (type === "content") {
        setContentImageFile(selectedFile);
      }
    }
  };

  const handleSubmit = async (values) => {
    if (!imageFile || !contentImageFile) {
      toast.error("Please upload both Business and Content Images", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    // Prevent uploading the same file twice
    if (
      imageFile.name === contentImageFile.name &&
      imageFile.size === contentImageFile.size
    ) {
      toast.error("Please select two different files!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const formData = new FormData();

      Object.keys(values).forEach((key) => {
        if (key === "contentPoints") {
          sections.forEach((section) => {
            formData.append("contentPoints[]", section.name);
          });
        } else {
          formData.append(key, values[key]);
        }
      });

      formData.append("businessPlanningImage", imageFile);
      formData.append("contentImage", contentImageFile);

      // Debug: Check exact formData before sending
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      const response = await axios.post(
        `${baseurl}/api/v1/user/addBusinessPlanning`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
        setContentImageFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        if (contentFileInputRef.current) contentFileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit Webinar!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  const addSection = () => {
    if (inputValue.trim() !== "") {
      setSections((prevItems) => [
        ...prevItems,
        { id: Date.now(), name: inputValue },
      ]);
      setInputValue("");
    }
  };

  const removeSection = (id) => {
    setSections((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    form.resetFields();
    setSections([]);
    setImageFile(null);
    setContentImageFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (contentFileInputRef.current) contentFileInputRef.current.value = "";
  };

  const showOurWebinar = () => {
    navigate("/viewAllSolution");
  };

  return (
    <>
      <Header />
      <div className={styles.buttonContainer}>
        <button className={styles.buttonStyle} onClick={showOurWebinar}>
          View All
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ fontSize: "36px" }}>Our Solution Data</h1>
      </div>
      <div style={{ padding: "10px", overflow: "hidden" }}>
        <Form
          form={form}
          initialValues={{
            title: "",
            description: "",
            contentHeading: "",
            contentDescription: "",
            contentPoints: [],
          }}
          onFinish={handleSubmit}
          style={{ paddingBlock: 32 }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item label="Main Image Upload">
            <input
              type="file"
              accept="image/*,application/pdf"
              ref={fileInputRef}
              onChange={(e) => handleFileChange(e, "business")}
            />
          </Form.Item>

          <Form.Item label="Content Image Upload">
            <input
              type="file"
              accept="image/*,application/pdf"
              ref={contentFileInputRef}
              onChange={(e) => handleFileChange(e, "content")}
            />
          </Form.Item>

          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input.TextArea rows={1} />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>

          <Form.Item
            name="contentHeading"
            label="Content Heading"
            rules={[{ required: true, message: "Please enter a heading" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="contentDescription"
            label="Content Description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>

          <Form.Item name="contentPoints" label="Content Points">
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

export default OurSolution;