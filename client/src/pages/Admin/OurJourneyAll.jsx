import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import { Card } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ourJourneyAll.module.css";
import { DeleteTwoTone } from "@ant-design/icons";
import { Modal } from 'antd';

function OurJourneyAll() {
  const [journeyData, setjourneyData] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/journeyDetails`);
      setjourneyData(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
          {journeyData.map((item, index) => (
            <Card
              key={index}
              size="small"
              title="Details"
              style={{ width: 300 }}
              extra={
                <button className={styles.cardButton} onClick={showModal}>
                  <DeleteTwoTone />
                </button>
              }
            >
              <h3 className={styles.ourjourh3}>{item.year || "loading"}</h3>
              <p className={styles.ourjourp}>{item.title}</p>
              <ul>
                {item.description.map((desc, index) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </Card>
            
          ))}
          
        </div>
        <Modal
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>Are you sure want to delete the data</p>
          </Modal>
      </div>
      <Footer />
    </>
  );
}

export default OurJourneyAll;
