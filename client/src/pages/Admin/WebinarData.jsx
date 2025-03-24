import React, { useState } from "react";
import { Button, Flex, Form, Input, Upload } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  MinusCircleOutlined,
  InboxOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function WebinarData() {
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log("value", values);
  };

  const [inputvalue, setinputvalue] = useState("");
  const [section, setsection] = useState([]);
  const [imageFile, selectedFile] = useState("");
  const handleFileChange = (e) => {
    const selectFile = e.target.files[0];

    if (selectFile) {
        selectedFile(selectFile.name); 
    }
  };
  console.log(imageFile);

  const addSection = () => {
    if (inputvalue.trim() !== "") {
      setsection([...section, inputvalue]);
      setinputvalue("");
    }
  };
  const remove = (index) => {
    setsection(section.filter((_, i) => i !== index));
  };
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ fontSize: "36px" }}>Webinar Data</h1>
      </div>
      <div style={{ padding: "10px", overflow: "hidden" }}>
        <Form
          form={form}
          onFinish={handleSubmit}
          scrollToFirstError={{
            behavior: "instant",
            block: "end",
            focus: true,
          }}
          style={{
            paddingBlock: 32,
          }}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item
            name="Heading"
            label="Heading"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Sessionsummary"
            label="Session summary"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>

          <Form.Item
            name="Aboutpigment:"
            label="About pigment:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item
            name="Aboutthespeaker:"
            label="About the speaker:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>

          <Form.Item name="upload" label="Image Upload">
            <input
              type="file"
              required
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
            }}
          >
            <Flex gap="small">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button danger onClick={() => form.resetFields()}>
                Reset
              </Button>
            </Flex>
          </Form.Item>
        </Form>
        <div>
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
              value={inputvalue}
              onChange={(e) => setinputvalue(e.target.value)}
            />
            <Button
              onClick={() => {
                addSection();
              }}
            >
              Add
            </Button>
          </div>
          <ul
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "50px",
              listStyle: "none",
            }}
          >
            {section.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px",
                }}
              >
                {item}
                <MinusCircleOutlined onClick={() => remove(index)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WebinarData;
