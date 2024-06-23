import React, { useState, useContext, useEffect, useRef } from "react";
import EXIF from "exif-js";
import PopupMap from "./PopupMap";
import PopupLayout from "./PopupLayout";
import { AddressContext } from "../../contexts/AddressContext";
import DefaultImage from '../../assets/NewFiles/images/01.jpg';

const UploadComponent = () => {
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [plantedOn, setPlantedOn] = useState("");
  const [error, setError] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { address, setAddress } = useContext(AddressContext);
  const [imageURL, setImageURL] = useState(DefaultImage);

  const fileUploadRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const cachedURL = URL.createObjectURL(file);
    setImageURL(cachedURL);

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        EXIF.getData(img, async function () {
          const lat = EXIF.getTag(this, "GPSLatitude");
          const lon = EXIF.getTag(this, "GPSLongitude");
          if (lat && lon) {
            const latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
            const lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "W";
            const latitude =
              (lat[0] + lat[1] / 60 + lat[2] / 3600) *
              (latRef === "N" ? 1 : -1);
            const longitude =
              (lon[0] + lon[1] / 60 + lon[2] / 3600) *
              (lonRef === "W" ? -1 : 1);

            setCoordinates({ latitude, longitude });

            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setLocation(data.display_name);
            setAddress(data.display_name);
          } else {
            setLocation("");
            setError("No geotags found in the image.");
          }
        });
      };
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    // Update location when address context changes
    setLocation(address);
  }, [address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !label || !location || !plantedOn) {
      setError("Please provide all required information.");
      return;
    }

    const currentDate = new Date(); // Get current date in YYYY-MM-DD format

    const formData = {
      imageURL,
      image: image.name,
      label,
      location,
      coordinates,
      plantedOn,
      uploadedOn: currentDate, // Automatically set the current date as the upload date
    };

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    // Ensure existingData is an array
    const updatedData = Array.isArray(existingData) ? existingData : [];
    // Append the new form data to the existing data
    updatedData.push(formData);
    // Save the updated data back to local storage
    localStorage.setItem("formData", JSON.stringify(updatedData));

    // Clear the context and reset form fields after submission
    setImage(null);
    setLabel("");
    setLocation("");
    setCoordinates(null);
    setAddress("");
    setPlantedOn("");
    setError("");
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div>
        <section className="bg-image pt-40 pb-40">
          <div className="container">
            <h2
              className="wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay=".2s"
            >
              Upload Tree
            </h2>
          </div>
        </section>

        <section className="contact pt-60 pb-60">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="content bg-image">
                  <h2>
                    Have something in mind? <br />
                    Let's talk.
                  </h2>
                  <p>
                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim.
                  </p>
                  <div className="arry">
                    <img src="/images/icon/arry.png" alt="" />
                  </div>
                  <ul>
                    <li>
                      <a
                        href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-location-dot"></i> 407 Payal
                        Complex, B/s VSE, Sayajigunj, Vadodara-390005
                      </a>
                    </li>
                    <li>
                      <a href="tel:1-732-798-0976">
                        <i className="fa-solid fa-phone-volume"></i>+91 9898 034
                        029
                      </a>
                    </li>
                    <li>
                      <a href="mailto:company.info@mail.com">
                        <i className="fa-solid fa-envelope"></i>info@encoraa.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-area">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={fileUploadRef}
                    />

                    <input
                      type="text"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      placeholder="Label"
                    />

                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />

                    <input
                      type="date"
                      value={plantedOn}
                      onChange={(e) => setPlantedOn(e.target.value)}
                      placeholder="Planted On"
                    />

                    <div>
                      <button
                        type="button"
                        className="fa-solid"
                        onClick={openPopup}
                        style={{
                          paddingRight: "55px",
                          paddingLeft: "55px",
                          marginBottom: "10px",
                          backgroundColor: "#476A77",
                        }}
                      >
                        📍
                      </button>
                      <PopupLayout
                        component={PopupMap}
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                      />
                    </div>
                    <button>
                      Submit
                      <i className="fa-solid fa-arrow-right-long" />
                    </button>
                    {error && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginBottom: "10px",
                          textAlign: "center",
                        }}
                      >
                        {error}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UploadComponent;
