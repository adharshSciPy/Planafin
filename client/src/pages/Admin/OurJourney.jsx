import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./OurJourney.module.css"; // Fixed CSS import
import { Button, Flex, Form, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OurJourney() {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    form.setFieldsValue({
      description: sections.map((section) => section.name),
    });
  }, [sections, form]);

  const addSection = () => {
    if (inputValue.trim() !== "") {
      setSections((prev) => [...prev, { id: Date.now(), name: inputValue }]);
      setInputValue("");
    }
  };

  const removeSection = (id) => {
    setSections((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = async (values) => {
    try {
      const payload = {
        year: values.year,
        title: values.title,
        description: sections.map((section) => section.name),
      };

      const response = await axios.post(
        `${baseUrl}/api/v1/user/addjourney`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
      form.resetFields();
      setSections([]);
    } catch (error) {
      toast.error("Failed to submit form!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // Reset Form
  const handleReset = () => {
    form.resetFields();
    setSections([]);
  };
  const showOurJourney = () => {
    navigate("/getOurJourney");
  };
  return (
    <>
      <Header />
      <div className={styles.formMain}>
        <div className={styles.subMain}>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonStyle} onClick={showOurJourney}>
              View All
            </button>
          </div>
          <Form
            form={form}
            initialValues={{
              year: "",
              title: "",
              description: [],
            }}
            onFinish={handleSubmit}
            style={{ paddingBlock: 32, padding: "20px" }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              name="year"
              label="Year"
              rules={[{ required: true, message: "Please enter the year" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter the title" }]}
            >
              <Input />
            </Form.Item>

            {/* Description Section */}
            <Form.Item name="description" label="Description">
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
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

              {/* List of descriptions */}
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
                    width: "100%",
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
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default OurJourney;
