import React, { useEffect, useState } from "react";
import styles from "./anaplanCounter.module.css";
import { Input, Button } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from "../../../baseUrl";
import { Card } from "antd";

function AnaplanCounter() {
  const fields = { counter: "", title: "" };
  const [form, setForm] = useState(fields);
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        counter: form.counter,
        title: form.title,
      };
      if (isEditing) {
        // update
        const result = await axios.put(
          `${baseUrl}/api/v1/user/updateAnaplan/${editId}`,
          payload
        );
        if (result) {
          toast.success("Successfully Updated");
        }
      } else {
        // add new
        const result = await axios.post(
          `${baseUrl}/api/v1/user/addAnaplanCounter`,
          payload
        );
        if (result) {
          toast.success("Successfully Submitted");
        }
      }
      setForm(fields);
      setIsEditing(false);
      setEditId(null);
      serviceData(); // refresh list
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  const serviceData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/getAnaplanDetails`);
      console.log("data", res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    serviceData();
  }, []);

  const updateHandler = async (item) => {
    setForm({ counter: item.counter, title: item.title });
    setEditId(item._id);
    setIsEditing(true);
  };

  const deleteHandler = async (id) => {
    try {
      const deleted = await axios.delete(
        `${baseUrl}/api/v1/user/deleteAnaplan/${id}`
      );
      setData((prevData) => prevData.filter((item) => item._id !== id));
      toast.success("Deleted Successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className={styles.solutioncountermain}>
        <div className={styles.solutioncounter}>
          <h1>Service Counter</h1>
          <Input
            name="counter"
            value={form.counter}
            placeholder="Count *"
            onChange={handleChange}
          />
          <Input
            name="title"
            value={form.title}
            placeholder="Title *"
            onChange={handleChange}
          />
          {/* <Button type="primary" onClick={handleSubmit}>Submit</Button> */}
          <Button type="primary" onClick={handleSubmit}>
            {isEditing ? "Update" : "Submit"}
          </Button>
        </div>
      </div>
      <div className={styles.servicecard}>
        {data.map((item, index) => (
          <Card key={index} style={{ width: 300 }}>
            <h2>{item.title}</h2>
            <h1>{item.counter}</h1>
            <div className={styles.cardbutton}>
              <Button onClick={() => updateHandler(item)}>Edit</Button>
              <Button onClick={() => deleteHandler(item._id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AnaplanCounter;
