import React, { useState } from 'react'
import styles from './contact.module.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Input } from 'antd';
import { Select } from 'antd';
const { TextArea } = Input;

function ContactUs() {
    const [selectedLocation, setSelectedLocation] = useState("USA");
    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

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
                        <Input placeholder='First Name*' name='firstName' />
                        <Input placeholder='Last Name*' name='lastName' />
                    </div>
                    <div className={styles.inputtwo}>
                        <Input placeholder='Email*' name='email' />
                    </div>
                    <div className={styles.inputone}>
                    <Select className={styles.select}
                            showSearch
                            placeholder="Search to Select"
                            optionFilterProp="label"
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                { value: 'af', label: 'Afghanistan' },
                                { value: 'al', label: 'Albania' },
                                { value: 'dz', label: 'Algeria' },
                                { value: 'ad', label: 'Andorra' },
                                { value: 'ao', label: 'Angola' },
                                { value: 'ag', label: 'Antigua and Barbuda' },
                                { value: 'ar', label: 'Argentina' },
                                { value: 'am', label: 'Armenia' },
                                { value: 'au', label: 'Australia' },
                                { value: 'at', label: 'Austria' },
                                { value: 'az', label: 'Azerbaijan' },
                                { value: 'bs', label: 'Bahamas' },
                                { value: 'bh', label: 'Bahrain' },
                                { value: 'bd', label: 'Bangladesh' },
                                { value: 'bb', label: 'Barbados' },
                                { value: 'by', label: 'Belarus' },
                                { value: 'be', label: 'Belgium' },
                                { value: 'bz', label: 'Belize' },
                                { value: 'bj', label: 'Benin' },
                                { value: 'bt', label: 'Bhutan' },
                                { value: 'bo', label: 'Bolivia' },
                                { value: 'ba', label: 'Bosnia and Herzegovina' },
                                { value: 'bw', label: 'Botswana' },
                                { value: 'br', label: 'Brazil' },
                                { value: 'bn', label: 'Brunei' },
                                { value: 'bg', label: 'Bulgaria' },
                                { value: 'bf', label: 'Burkina Faso' },
                                { value: 'bi', label: 'Burundi' },
                                { value: 'kh', label: 'Cambodia' },
                                { value: 'cm', label: 'Cameroon' },
                                { value: 'ca', label: 'Canada' },
                                { value: 'cv', label: 'Cape Verde' },
                                { value: 'cf', label: 'Central African Republic' },
                                { value: 'td', label: 'Chad' },
                                { value: 'cl', label: 'Chile' },
                                { value: 'cn', label: 'China' },
                                { value: 'co', label: 'Colombia' },
                                { value: 'km', label: 'Comoros' },
                                { value: 'cg', label: 'Congo' },
                                { value: 'cr', label: 'Costa Rica' },
                                { value: 'hr', label: 'Croatia' },
                                { value: 'cu', label: 'Cuba' },
                                { value: 'cy', label: 'Cyprus' },
                                { value: 'cz', label: 'Czech Republic' },
                                { value: 'cd', label: 'Democratic Republic of the Congo' },
                                { value: 'dk', label: 'Denmark' },
                                { value: 'dj', label: 'Djibouti' },
                                { value: 'dm', label: 'Dominica' },
                                { value: 'do', label: 'Dominican Republic' },
                                { value: 'ec', label: 'Ecuador' },
                                { value: 'eg', label: 'Egypt' },
                                { value: 'sv', label: 'El Salvador' },
                                { value: 'gq', label: 'Equatorial Guinea' },
                                { value: 'er', label: 'Eritrea' },
                                { value: 'ee', label: 'Estonia' },
                                { value: 'sz', label: 'Eswatini' },
                                { value: 'et', label: 'Ethiopia' },
                                { value: 'fj', label: 'Fiji' },
                                { value: 'fi', label: 'Finland' },
                                { value: 'fr', label: 'France' },
                                { value: 'ga', label: 'Gabon' },
                                { value: 'gm', label: 'Gambia' },
                                { value: 'ge', label: 'Georgia' },
                                { value: 'de', label: 'Germany' },
                                { value: 'gh', label: 'Ghana' },
                                { value: 'gr', label: 'Greece' },
                                { value: 'gd', label: 'Grenada' },
                                { value: 'gt', label: 'Guatemala' },
                                { value: 'gn', label: 'Guinea' },
                                { value: 'gw', label: 'Guinea-Bissau' },
                                { value: 'gy', label: 'Guyana' },
                                { value: 'ht', label: 'Haiti' },
                                { value: 'hn', label: 'Honduras' },
                                { value: 'hu', label: 'Hungary' },
                                { value: 'is', label: 'Iceland' },
                                { value: 'in', label: 'India' },
                                { value: 'id', label: 'Indonesia' },
                                { value: 'ir', label: 'Iran' },
                                { value: 'iq', label: 'Iraq' },
                                { value: 'ie', label: 'Ireland' },
                                { value: 'il', label: 'Israel' },
                                { value: 'it', label: 'Italy' },
                                { value: 'jm', label: 'Jamaica' },
                                { value: 'jp', label: 'Japan' },
                                { value: 'jo', label: 'Jordan' },
                                { value: 'kz', label: 'Kazakhstan' },
                                { value: 'ke', label: 'Kenya' },
                                { value: 'kr', label: 'South Korea' },
                                { value: 'kw', label: 'Kuwait' },
                                { value: 'la', label: 'Laos' },
                                { value: 'lv', label: 'Latvia' },
                                { value: 'lb', label: 'Lebanon' },
                                { value: 'ls', label: 'Lesotho' },
                                { value: 'lr', label: 'Liberia' },
                                { value: 'ly', label: 'Libya' },
                                { value: 'lt', label: 'Lithuania' },
                                { value: 'lu', label: 'Luxembourg' },
                                { value: 'mg', label: 'Madagascar' },
                                { value: 'mw', label: 'Malawi' },
                                { value: 'my', label: 'Malaysia' },
                                { value: 'mv', label: 'Maldives' },
                                { value: 'ml', label: 'Mali' },
                                { value: 'mt', label: 'Malta' },
                                { value: 'mx', label: 'Mexico' },
                                { value: 'md', label: 'Moldova' },
                                { value: 'mn', label: 'Mongolia' },
                                { value: 'ma', label: 'Morocco' },
                                { value: 'mz', label: 'Mozambique' },
                                { value: 'mm', label: 'Myanmar' },
                                { value: 'na', label: 'Namibia' },
                                { value: 'np', label: 'Nepal' },
                                { value: 'nl', label: 'Netherlands' },
                                { value: 'nz', label: 'New Zealand' },
                                { value: 'ng', label: 'Nigeria' },
                                { value: 'no', label: 'Norway' },
                                { value: 'pk', label: 'Pakistan' },
                                { value: 'ph', label: 'Philippines' },
                                { value: 'pl', label: 'Poland' },
                                { value: 'pt', label: 'Portugal' },
                                { value: 'qa', label: 'Qatar' },
                                { value: 'ro', label: 'Romania' },
                                { value: 'ru', label: 'Russia' },
                                { value: 'sa', label: 'Saudi Arabia' },
                                { value: 'sg', label: 'Singapore' },
                                { value: 'za', label: 'South Africa' },
                                { value: 'es', label: 'Spain' },
                                { value: 'se', label: 'Sweden' },
                                { value: 'ch', label: 'Switzerland' },
                                { value: 'tr', label: 'Turkey' },
                                { value: 'ua', label: 'Ukraine' },
                                { value: 'ae', label: 'United Arab Emirates' },
                                { value: 'gb', label: 'United Kingdom' },
                                { value: 'us', label: 'United States' }
                            ]}
                        />
                        <Input placeholder='Phone*' name='phone' />
                    </div>
                    <div className={styles.inputone}>
                        <Input placeholder='Job Title*' name='jobTitle' />
                        <Input placeholder='Company*' name='company' />
                    </div>
                    <div className={styles.inputtwo}>
                        <TextArea placeholder='Message' rows={4} name='message' />
                    </div>
                    <div className={styles.smalltext}>
                        <p>I agree to the collection and use of my personal information in accordance with the Planafin Privacy Policy.</p>
                    </div>
                    <div className={styles.sendbutton}>
                        <button>SEND MESSAGE</button>
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