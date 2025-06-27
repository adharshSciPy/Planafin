import React, { useState } from 'react';
import styles from "./jobOpening.module.css";
import axios from 'axios';
import baseUrl from '../../baseUrl';
import { Plus, Trash } from 'lucide-react';

function JobOpening() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    workSchedule: "",
    workTime: "",
    jobType: "",
    requiredSkills: [],
  });

  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = () => {
    if (skillInput.trim() && !form.requiredSkills.includes(skillInput)) {
      setForm({
        ...form,
        requiredSkills: [...form.requiredSkills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setForm({
      ...form,
      requiredSkills: form.requiredSkills.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/jobopenings`,
        form,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // console.log("Job opening submitted", response);

      setForm({
        title: "",
        location: "",
        workSchedule: "",
        workTime: "",
        jobType: "",
        requiredSkills: [],
      });
    } catch (error) {
      console.log("Error submitting form", error.response?.data || error);
    }
  };

  return (
    <div className={styles.applicationFormOuter}>
      <form className={styles.applicationFormMain} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Job Opening Details</h2>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Job Title" className={styles.formInput} name="title" value={form.title} onChange={handleChange} required />
            <input type="text" placeholder="Location" className={styles.formInput} name="location" value={form.location} onChange={handleChange} required />
          </div>

          <div className={styles.formRow}>
            <input type="text" placeholder="Work Schedule" className={styles.formInput} name="workSchedule" value={form.workSchedule} onChange={handleChange} required />
            <input type="text" placeholder="Work Time" className={styles.formInput} name="workTime" value={form.workTime} onChange={handleChange} required />
          </div>

          <div className={styles.formRow}>
            <input type="text" placeholder="Job Type" className={styles.fullWidthInput} name="jobType" value={form.jobType} onChange={handleChange} required />
          </div>

          {/* Skills Input */}
          <div className={styles.formLabelWraper}>
            <label className={styles.fileLabel}>Required Skills</label>
            <div className={styles.skillInputWrapper}>
              <input type="text" placeholder="Add skill..." className={styles.fullWidthInput} value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
              <button type="button" className={styles.addSkillBtn} onClick={addSkill}>
                <Plus size={24} />
              </button>
            </div>
          </div>

          {/* Display Added Skills */}
          <div className={styles.skillsList}>
            {form.requiredSkills.map((skill, index) => (
              <div key={index} className={styles.skillTag}>
                {skill}
                <button type="button" onClick={() => removeSkill(index)} className={styles.deleteSkillBtn}>
                  <Trash size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.subimtButtonDiv}>
          <button className={styles.subimtButton} type="submit">
            <span className={styles.subimtButtonSpan}>SUBMIT JOB OPENING</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobOpening;
