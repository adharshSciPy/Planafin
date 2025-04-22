import React from "react";
import styles from "./project.module.css";
import { Form, Input,Button, Flex, } from "antd";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../../baseUrl";
import axios from "axios";



function Project() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    try {
      const payload = {
        consultants: values.consultants,
        projects: values.projects,
        cases:values.cases
      };

      const response = await axios.post(
        `${baseUrl}/api/v1/user/projectUpdate`,
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
      console.log(payload);
      
    } catch (error) {
      toast.error("Failed to su bmit form!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
        <ToastContainer/>
      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
          <h1>About Us Counter</h1>
        </div>
        <div className="">
          <Form
            form={form}
            initialValues={{
                consultants: "",
                projects: "",
                cases: "",
            }}
            onFinish={handleSubmit}
            style={{ paddingBlock: 32, padding: "20px" }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              name="consultants"
              label="consultants"
              rules={[{ required: true, message: "Please enter the value" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="projects"
              label="projects"
              rules={[{ required: true, message: "Please enter the value" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cases"  
              label="cases"
              rules={[{ required: true, message: "Please enter the value" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6 }} style={{ marginTop: "30px" }}>
              <Flex gap="small">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Project;
