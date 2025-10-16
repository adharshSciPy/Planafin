import React, { useState, useEffect } from "react";
import { Form, Input, Upload, Button, Space, Tag, Card, Popconfirm } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from "../../../baseUrl";
import styles from "./AddKpo.module.css"

function AddKpo() {
    const [features, setFeatures] = useState([]);
    const [featureInput, setFeatureInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [kpoList, setKpoList] = useState([]);
    const [form] = Form.useForm();

    // 🔹 Fetch KPO details from backend
    const fetchKPOs = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/v1/user/kpoDetails`);
            console.log(res)
            setKpoList(res.data?.data || []);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch KPO details");
        }
    };

    useEffect(() => {
        fetchKPOs();
    }, []);

    // ➤ Handle feature add/remove
    const handleAddFeature = () => {
        if (featureInput.trim()) {
            setFeatures([...features, featureInput.trim()]);
            setFeatureInput("");
        }
    };

    const handleRemoveFeature = (feature) => {
        setFeatures(features.filter((f) => f !== feature));
    };

    // ➤ Convert Upload event to fileList for AntD Form
    const normFile = (e) => {
        if (Array.isArray(e)) return e;
        return e?.fileList;
    };

    // ➤ Handle form submit
    const handleSubmit = async (values) => {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("subTitle", values.subTitle || "");
            formData.append("description", values.description);
            formData.append("features", features.join(",")); // backend splits or accepts array

            // ✅ Append icon & image files
            if (values.icon?.[0]?.originFileObj) {
                formData.append("icon", values.icon[0].originFileObj);
            }
            if (values.image?.[0]?.originFileObj) {
                formData.append("image", values.image[0].originFileObj);
            }

            const res = await axios.post(
                `${baseUrl}/api/v1/user/createKpo`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (res.status === 200) {
                console.log(res)
                toast.success("KPO Created Successfully!");
                form.resetFields();
                setFeatures([]);
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    // ➤ Delete KPO
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                `${baseUrl}/api/v1/user/deleteKpo/${id}`
            );
            if (res.status === 200) {
                console.log(res)
                toast.success("KPO deleted successfully!");
                fetchKPOs();
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to delete KPO");
        }
    };

    return (
        <>
            <div
                style={{
                    maxWidth: 700,
                    margin: "80px auto",
                    padding: 24,
                    background: "#b9a9a9ff",
                    borderRadius: 10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
            >
                <ToastContainer position="bottom-right" autoClose={3000} />
                <h2 style={{ textAlign: "center", marginBottom: 20 }}>Create KPO</h2>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    encType="multipart/form-data"
                >
                    {/* Title */}
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: "Please enter title" }]}
                    >
                        <Input placeholder="Enter title" />
                    </Form.Item>

                    {/* Subtitle */}
                    <Form.Item name="subTitle" label="Subtitle">
                        <Input placeholder="Enter subtitle" />
                    </Form.Item>

                    {/* Description */}
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: "Please enter description" }]}
                    >
                        <Input.TextArea rows={4} placeholder="Enter description" />
                    </Form.Item>

                    {/* Features */}
                    <Form.Item label="Features">
                        <Space.Compact style={{ width: "100%" }}>
                            <Input
                                value={featureInput}
                                onChange={(e) => setFeatureInput(e.target.value)}
                                placeholder="Enter a feature"
                                onPressEnter={handleAddFeature}
                            />
                            <Button onClick={handleAddFeature} type="primary">
                                Add
                            </Button>
                        </Space.Compact>

                        <div style={{ marginTop: 10 }}>
                            {features.map((f, i) => (
                                <Tag
                                    key={i}
                                    closable
                                    onClose={() => handleRemoveFeature(f)}
                                    style={{ marginBottom: 8 }}
                                >
                                    {f}
                                </Tag>
                            ))}
                        </div>
                    </Form.Item>

                    {/* Upload Icon */}
                    <Form.Item
                        name="icon"
                        label="Upload Icon"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload beforeUpload={() => false} maxCount={1} listType="picture">
                            <Button icon={<UploadOutlined />}>Select Icon</Button>
                        </Upload>
                    </Form.Item>

                    {/* Upload Image */}
                    <Form.Item
                        name="image"
                        label="Upload Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload beforeUpload={() => false} maxCount={1} listType="picture">
                            <Button icon={<UploadOutlined />}>Select Image</Button>
                        </Upload>
                    </Form.Item>

                    {/* Submit */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Create KPO
                        </Button>
                    </Form.Item>
                </Form>

            </div>


            {/* Display Created KPOs */}
            <h3 className={styles.createdKPOs}>KPO Details</h3>
            <div className={styles.kpoGrid}>
                {kpoList.map((kpo) => (
                    <Card
                        className={styles.kpoCard}
                        key={kpo._id}
                        title={kpo.title}
                        cover={
                            kpo.image && (
                                <img
                                    src={`${baseUrl}${kpo.image.startsWith("/") ? kpo.image : "/" + kpo.image}`}
                                    alt="KPO"
                                    className={styles.kpoImage}
                                />
                            )
                        }
                        actions={[
                            <Popconfirm
                                title="Are you sure to delete this KPO?"
                                onConfirm={() => handleDelete(kpo._id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <DeleteOutlined key="delete" style={{ color: "red" }} />
                            </Popconfirm>,
                        ]}
                    >
                        <div className={styles.kpoContent}>
                            <p><strong>Subtitle:</strong> {kpo.subTitle}</p>
                            <p><strong>Description:</strong> {kpo.description}</p>
                            <div>
                                <strong>Features:</strong>
                                <ul>
                                    {kpo.features?.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

        </>
    );
}

export default AddKpo;
