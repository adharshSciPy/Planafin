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

function PlanafinConsulting() {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const payload = {
        subtext: values.subtext,
        title: values.title,
      };

      const response = await axios.post(
        `${baseUrl}/api/v1/user/addPlanafinConsultation`,
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
  };
  const showOurJourney = () => {
    navigate("/PlanafinConsultingAll");
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
              subtext: "",
              title: "",
            }}
            onFinish={handleSubmit}
            style={{ paddingBlock: 32, padding: "20px" }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
          >
            

            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter the title" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="subtext"
              label="Sub Text"
              rules={[{ required: true, message: "Please enter the subtext" }]}
            >
              <Input />
            </Form.Item>

            {/* Description Section */}

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
      <ToastContainer />
    </>
  );
}

export default PlanafinConsulting;
