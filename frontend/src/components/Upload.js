import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import banner from "../assets/img/medi_foot.jpg";
import backdrop from "../assets/img/backdrop.jpg";
import Footer from "./Footer";
function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [medicineInfo, setMedicineInfo] = useState({
    name: "",
    composition: "",
  });

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post("http://localhost:4500/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const parsedData = JSON.parse(response.data.medicineName);
        setMedicineInfo(parsedData);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        // Handle error
      });
  };

  return (
    <div>
      <NavBar />
      <section id="hero-1785">
        <section id="contact-1388">
          <div className="cs-container my-5 justify-content-center">
            <div
              className="cs-form"
              id="cs-form-1388"
              name="Contact Form"
              method="post"
            >
              <h3 className="cs-h3">Upload Image</h3>
              <label className="cs-label cs-phone">
                Chooose Image
                <input
                  className="cs-input"
                  required
                  id="phone-1388"
                  type="file"
                  onChange={handleFileChange}
                />
              </label>
              <button className="cs-button-solid" onClick={uploadImage}>
                Upload
              </button>
            </div>
          </div>
          
        </section>
        <picture className="cs-background">
                <source media="(max-width: 600px)" srcSet={backdrop} />
                <source media="(min-width: 601px)" srcSet={backdrop} />
                <img loading="lazy" decoding="async" src={backdrop} alt="field" width="1920" height="1200" aria-hidden="true" />
        </picture>
       
      </section>
      <div className="d-flex justify-content-center my-5">
            <h1 style={{ color: "black",fontSize:'55px' }}>
              Insights about <span style={{color:'red'}}>{medicineInfo.medicineName}</span> 
            </h1>
          </div>
      {/* <!-- ============================================ -->
    <!--                  Services                    -->
    <!-- ============================================ --> * */}

      <section id="services-1639">
        <div className="cs-container">
          <ul className="cs-card-group">
            <li className="cs-item " >
              <div className="cs-flex">
                <h2 className="cs-h2">Medicine Name</h2>
                <p className="cs-item-text">
                  The name of the medicine is{" "}
                  <b> {medicineInfo.medicineName}</b>
                  manufactured by <b>{medicineInfo.manufacturer}</b>.
                  {/* Highly experienced staff of more than 100 professionals averaging 29+ years in industry and hands-on knowledge. */}
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-circle-check.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>
            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Composition</h2>
                <p className="cs-item-text">
                  The medicine <b>{medicineInfo.medicineName}</b> consists of{" "}
                  <b>{medicineInfo.composition}</b>.It is not an over-the-counter (OTC) drug and usually requires a prescription to purchase it from any pharmacy.
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-speedometer.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>
            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Uses</h2>
                <p className="cs-item-text">
                The use of <b>{medicineInfo.medicineName}</b> is <b>{medicineInfo.uses}</b>.
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-thumb.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>
            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Side Effects</h2>
                <p className="cs-item-text">
                  Although it is very rare for {medicineInfo.medicineName} side effects to emerge if the medicine is taken according to a doctor's prescription, certain allergic reactions can occur in some people such as:<br/><b>{medicineInfo.side_effects}</b>
          
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-bouy.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- ============================================ -->
    <!--                Side By Side                  -->
    <!-- ============================================ --> */}

      <section id="sbs-1639">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Speciality</span>
            <h2 className="cs-title">Medigen: Your Path to Medical Excellence</h2>
            <picture className="cs-picture">
              {/* <!--Mobile Image--> */}
              <source media="(max-width: 600px)" srcset={banner} />
              {/* <!--Tablet and above Image--> */}
              <source media="(min-width: 601px)" srcset={banner} />
              <img
                loading="lazy"
                decoding="async"
                srcset={banner}
                alt="people"
                width="608"
                height="406"
              />
            </picture>
          </div>
          <div className="cs-stats-group">
            <p className="cs-text">
              Elevate your medical knowledge with our comprehensive Medigen
              course. Whether you're a seasoned professional or just starting
              your medical journey, Medigen provides the tools and resources you
              need to excel in your field.
            </p>
            <p className="cs-text">
              Our expert instructors will guide you through every aspect of
              modern medicine, from foundational principles to cutting-edge
              technologies. Join the thousands of satisfied students who have
              transformed their careers with Medigen.
            </p>
            <p className="cs-text">
              Discover the latest advancements in medicine and unlock new
              opportunities with Medigen.
            </p>
            <ul className="cs-stats">
              <li className="cs-stat">
                <span className="cs-number">475</span>
                <span className="cs-desc">Repeated Viewers</span>
              </li>
              <li className="cs-stat">
                <span className="cs-number">2K</span>
                <span className="cs-desc">Satisfied Users</span>
              </li>
              <li className="cs-stat">
                <span className="cs-number">37</span>
                <span className="cs-desc">Professional Team</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Upload;
