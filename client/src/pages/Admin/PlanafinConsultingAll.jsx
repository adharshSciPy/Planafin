import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import { Card } from "antd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ourJourneyAll.module.css";
import { DeleteTwoTone } from "@ant-design/icons";
import { Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";


function PlanafinConsultingAll() {
  const [journeyData, setjourneyData] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectId, setSelectedId] = useState();

  const showModal = (id) => {
    setSelectedId(id);
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const response = await axios.delete(
        `${baseUrl}/api/v1/user/deletePlanafinConsultation/${selectId}`
      );
      if (response.status === 200) {
        toast.success("successfully deleted Our Journey data", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setjourneyData((prevData)=>prevData.filter((item)=>item.id !== selectId))
        await getData()
      setOpen(false);

      }
    } catch (error) {
      toast.success("Error while deleting Our Journey data", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
    finally {
      setConfirmLoading(false);
    } 
  };
  const handleCancel = () => {
    setOpen(false);
    setSelectedId(null);

  };
  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/user/getPlanafinConsultation`);
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
                <button
                  className={styles.cardButton}
                  onClick={() => {
                    showModal(item._id);
                  }}
                >
                  <DeleteTwoTone />
                </button>
              }
            >
              <h3 className={styles.ourjourh3}>{item.title || "loading"}</h3>
              <p className={styles.ourjourp}>{item.subtext || "loading"}</p>
              
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

export default PlanafinConsultingAll;
