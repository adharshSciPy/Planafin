import React, { useState, useEffect } from 'react'
import styles from './contact.module.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Input, message } from 'antd';
import { Select } from 'antd';
import baseUrl from '../../baseUrl';
import axios from 'axios';
const { TextArea } = Input;

function ContactUs() {
    const [selectedLocation, setSelectedLocation] = useState("USA");
    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",
        jobTitle: "",
        company: "",
        message: ""
    })

    const handleChange = (e) => {
        if (e && e.target) {
            setForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                country: e
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/api/v1/user/contactus`, form)
            // console.log("contact res", response)
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                country: "",
                phone: "",
                jobTitle: "",
                company: "",
                message: ""
            })


        } catch (error) {
            console.log("Error", error.response?.data || error)
        }
    }


    const mapLinks = {
        USA: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5662.335387197314!2d-106.95495!3d44.797771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fb1a56bea141%3A0x4466852561573acc!2sPlanafin%20Technologies!5e0!3m2!1sen!2sin!4v1742377091930!5m2!1sen!2sin",
        UAE: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7224.629831578328!2d55.380772!3d25.125042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651fa2fb48a5%3A0x86fc042c6636f3e5!2sPlanafin%20Fze!5e0!3m2!1sen!2sin!4v1742377230442!5m2!1sen!2sin",
        India: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.3870937257273!2d77.677479!3d12.92223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e2c611ceb5%3A0x5ac751551f39dad4!2sBrindavan%20Sapthagiri!5e0!3m2!1sen!2sin!4v1742377289276!5m2!1sen!2sin"
    };



    return (
        <div className={styles}>
            <Header />
            <div className={styles.contactus}>
                <div className={styles.content}>
                    <div className={styles.contacttext}>
                        <h1>Contact Us Today</h1>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Get started and connect with our expert team to explore the benefits, allow us to help you to improve your business performance.</p>
                    </div>
                </div>
                <div className={styles.inputfield}>
                    <div className={styles.inputone}>
                        <Input placeholder='First Name*' name='firstName' value={form.firstName} onChange={handleChange} />
                        <Input placeholder='Last Name*' name='lastName' value={form.lastName} onChange={handleChange} />
                    </div>
                    <div className={styles.inputtwo}>
                        <Input placeholder='Email*' name='email' value={form.email} onChange={handleChange} />
                    </div>
                    <div className={styles.inputone}>
                        <Select className={styles.select}
                            showSearch
                            placeholder="Select Country"
                            name="country"
                            value={form.country} 
                            onChange={handleChange}
                            optionFilterProp="label"
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                { value: 'Afghanistan', label: 'Afghanistan' },
                                { value: 'Albania', label: 'Albania' },
                                { value: 'Algeria', label: 'Algeria' },
                                { value: 'Andorra', label: 'Andorra' },
                                { value: 'Angola', label: 'Angola' },
                                { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
                                { value: 'Argentina', label: 'Argentina' },
                                { value: 'Armenia', label: 'Armenia' },
                                { value: 'Australia', label: 'Australia' },
                                { value: 'Austria', label: 'Austria' },
                                { value: 'Azerbaijan', label: 'Azerbaijan' },
                                { value: 'Bahamas', label: 'Bahamas' },
                                { value: 'Bahrain', label: 'Bahrain' },
                                { value: 'Bangladesh', label: 'Bangladesh' },
                                { value: 'Barbados', label: 'Barbados' },
                                { value: 'Belarus', label: 'Belarus' },
                                { value: 'Belgium', label: 'Belgium' },
                                { value: 'Belize', label: 'Belize' },
                                { value: 'Benin', label: 'Benin' },
                                { value: 'Bhutan', label: 'Bhutan' },
                                { value: 'Bolivia', label: 'Bolivia' },
                                { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
                                { value: 'Botswana', label: 'Botswana' },
                                { value: 'Brazil', label: 'Brazil' },
                                { value: 'Brunei', label: 'Brunei' },
                                { value: 'Bulgaria', label: 'Bulgaria' },
                                { value: 'Burkina Faso', label: 'Burkina Faso' },
                                { value: 'Burundi', label: 'Burundi' },
                                { value: 'Cambodia', label: 'Cambodia' },
                                { value: 'Cameroon', label: 'Cameroon' },
                                { value: 'Canada', label: 'Canada' },
                                { value: 'Cape Verde', label: 'Cape Verde' },
                                { value: 'Central African Republic', label: 'Central African Republic' },
                                { value: 'Chad', label: 'Chad' },
                                { value: 'Chile', label: 'Chile' },
                                { value: 'China', label: 'China' },
                                { value: 'Colombia', label: 'Colombia' },
                                { value: 'Comoros', label: 'Comoros' },
                                { value: 'Congo', label: 'Congo' },
                                { value: 'Costa Rica', label: 'Costa Rica' },
                                { value: 'Croatia', label: 'Croatia' },
                                { value: 'Cuba', label: 'Cuba' },
                                { value: 'Cyprus', label: 'Cyprus' },
                                { value: 'Czech Republic', label: 'Czech Republic' },
                                { value: 'Democratic Republic of the Congo', label: 'Democratic Republic of the Congo' },
                                { value: 'Denmark', label: 'Denmark' },
                                { value: 'Djibouti', label: 'Djibouti' },
                                { value: 'Dominica', label: 'Dominica' },
                                { value: 'Dominican Republic', label: 'Dominican Republic' },
                                { value: 'Ecuador', label: 'Ecuador' },
                                { value: 'Egypt', label: 'Egypt' },
                                { value: 'El Salvador', label: 'El Salvador' },
                                { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
                                { value: 'Eritrea', label: 'Eritrea' },
                                { value: 'Estonia', label: 'Estonia' },
                                { value: 'Eswatini', label: 'Eswatini' },
                                { value: 'Ethiopia', label: 'Ethiopia' },
                                { value: 'Fiji', label: 'Fiji' },
                                { value: 'Finland', label: 'Finland' },
                                { value: 'France', label: 'France' },
                                { value: 'Gabon', label: 'Gabon' },
                                { value: 'Gambia', label: 'Gambia' },
                                { value: 'Georgia', label: 'Georgia' },
                                { value: 'Germany', label: 'Germany' },
                                { value: 'Ghana', label: 'Ghana' },
                                { value: 'Greece', label: 'Greece' },
                                { value: 'Grenada', label: 'Grenada' },
                                { value: 'Guatemala', label: 'Guatemala' },
                                { value: 'Guinea', label: 'Guinea' },
                                { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
                                { value: 'Guyana', label: 'Guyana' },
                                { value: 'Haiti', label: 'Haiti' },
                                { value: 'Honduras', label: 'Honduras' },
                                { value: 'Hungary', label: 'Hungary' },
                                { value: 'Iceland', label: 'Iceland' },
                                { value: 'India', label: 'India' },
                                { value: 'Indonesia', label: 'Indonesia' },
                                { value: 'Iran', label: 'Iran' },
                                { value: 'Iraq', label: 'Iraq' },
                                { value: 'Ireland', label: 'Ireland' },
                                { value: 'Israel', label: 'Israel' },
                                { value: 'Italy', label: 'Italy' },
                                { value: 'Jamaica', label: 'Jamaica' },
                                { value: 'Japan', label: 'Japan' },
                                { value: 'Jordan', label: 'Jordan' },
                                { value: 'Kazakhstan', label: 'Kazakhstan' },
                                { value: 'Kenya', label: 'Kenya' },
                                { value: 'South Korea', label: 'South Korea' },
                                { value: 'Kuwait', label: 'Kuwait' },
                                { value: 'Laos', label: 'Laos' },
                                { value: 'Latvia', label: 'Latvia' },
                                { value: 'Lebanon', label: 'Lebanon' },
                                { value: 'Lesotho', label: 'Lesotho' },
                                { value: 'Liberia', label: 'Liberia' },
                                { value: 'Libya', label: 'Libya' },
                                { value: 'Lithuania', label: 'Lithuania' },
                                { value: 'Luxembourg', label: 'Luxembourg' },
                                { value: 'Madagascar', label: 'Madagascar' },
                                { value: 'Malawi', label: 'Malawi' },
                                { value: 'Malaysia', label: 'Malaysia' },
                                { value: 'Maldives', label: 'Maldives' },
                                { value: 'Mali', label: 'Mali' },
                                { value: 'Malta', label: 'Malta' },
                                { value: 'Mexico', label: 'Mexico' },
                                { value: 'Moldova', label: 'Moldova' },
                                { value: 'Mongolia', label: 'Mongolia' },
                                { value: 'Morocco', label: 'Morocco' },
                                { value: 'Mozambique', label: 'Mozambique' },
                                { value: 'Myanmar', label: 'Myanmar' },
                                { value: 'Namibia', label: 'Namibia' },
                                { value: 'Nepal', label: 'Nepal' },
                                { value: 'Netherlands', label: 'Netherlands' },
                                { value: 'New Zealand', label: 'New Zealand' },
                                { value: 'Nigeria', label: 'Nigeria' },
                                { value: 'Norway', label: 'Norway' },
                                { value: 'Pakistan', label: 'Pakistan' },
                                { value: 'Philippines', label: 'Philippines' },
                                { value: 'Poland', label: 'Poland' },
                                { value: 'Portugal', label: 'Portugal' },
                                { value: 'Qatar', label: 'Qatar' },
                                { value: 'Romania', label: 'Romania' },
                                { value: 'Russia', label: 'Russia' },
                                { value: 'Saudi Arabia', label: 'Saudi Arabia' },
                                { value: 'Singapore', label: 'Singapore' },
                                { value: 'South Africa', label: 'South Africa' },
                                { value: 'Spain', label: 'Spain' },
                                { value: 'Sweden', label: 'Sweden' },
                                { value: 'Switzerland', label: 'Switzerland' },
                                { value: 'Turkey', label: 'Turkey' },
                                { value: 'Ukraine', label: 'Ukraine' },
                                { value: 'United Arab Emirates', label: 'United Arab Emirates' },
                                { value: 'United Kingdom', label: 'United Kingdom' },
                                { value: 'United States', label: 'United States' }
                            ]}

                        />
                        <Input placeholder='Phone*' name='phone' value={form.phone} onChange={handleChange} />
                    </div>
                    <div className={styles.inputone}>
                        <Input placeholder='Job Title*' name='jobTitle' value={form.jobTitle} onChange={handleChange} />
                        <Input placeholder='Company*' name='company' value={form.company} onChange={handleChange} />
                    </div>
                    <div className={styles.inputtwo}>
                        <TextArea placeholder='Message' rows={4} name='message' value={form.message} onChange={handleChange} />
                    </div>
                    <div className={styles.smalltext}>
                        <p>I agree to the collection and use of my personal information in accordance with the Planafin Privacy Policy.</p>
                    </div>
                    <div className={styles.sendbutton}>
                        <button onClick={handleSubmit}>SEND MESSAGE</button>
                    </div>
                </div>

                <div className={styles.location}>
                    <div className={styles.locationtab}>
                        <div className={`${styles.firstlocation} ${selectedLocation === "USA" ? styles.selected : ""
                            }`}
                            onClick={() => handleLocationClick("USA")}>
                            <h2>USA Office</h2>
                            <div className={styles.locationDetails}>
                                <h3>+44 0123 46789</h3>
                                <h3>connect@planafin.com</h3>
                                <h3>30 N Gould St Ste N Sheridan WY 82801</h3>
                            </div>
                        </div>
                        <div className={`${styles.secondlocation} ${selectedLocation === "UAE" ? styles.selected : ""
                            }`}
                            onClick={() => handleLocationClick("UAE")}>
                            <h2>UAE Office</h2>
                            <div className={styles.locationDetails}>
                                <h3>+971 503210586</h3>
                                <h3>connect@planafin.com</h3>
                                <h3>#156, Techno Hub, Dubai Silicon Oasis, UAE</h3>
                            </div>
                        </div>
                        <div className={`${styles.thirdlocation} ${selectedLocation === "India" ? styles.selected : ""
                            }`}
                            onClick={() => handleLocationClick("India")}>
                            <h2>India Office</h2>
                            <div className={styles.locationDetails}>
                                <h3>+91 9886759625</h3>
                                <h3>connect@planafin.com</h3>
                                <h3>A4, Brindavan Sapthagiri, Bellandur, Near Trinity Meadows, Bangalore-560103</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mapcontainer}>
                        <div className={styles.map}>
                            <iframe
                                src={mapLinks[selectedLocation]}
                                style={{ border: "0", marginTop: "50px" }}
                                allowFullScreen=""
                                loading="lazy"
                                width="1000"
                                height="600"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>

    )

}

export default ContactUs