import React, { useState, useContext, useEffect, useRef } from "react";
import EXIF from "exif-js";
import PopupMap from "./PopupMap";
import PopupLayout from "./PopupLayout";
import { AddressContext } from "../../contexts/AddressContext";
import DefaultImage from "../../assets/NewFiles/images/01.jpg";

const UploadComponent = () => {
  const [image, setImage] = useState(null);
  const [treeName, settreeName] = useState("");
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
    if (!image || !treeName || !location || !plantedOn) {
      setError("Please provide all required information.");
      return;
    }

    const currentDate = new Date(); // Get current date in YYYY-MM-DD format

    const formData = {
      imageURL,
      image: image.name,
      treeName,
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
    settreeName("");
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
                <div className="content bg-image-upload">
                  <h2>
                   Plant Upload Procedure                    
                  </h2>

                  <p>Kindly provide clear picture and geo location detail of plant images for higher accuracy.Watch the tutorial video for more information.
                  </p>
                   
                  <ul>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>On your device, enable the location service. </li>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>Verify that the camera has access to the location service.  </li>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>Take pictures of plants with your phone. </li>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>Check the image file details in your phone's gallery to see if the location is present in the captured images. </li>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>For fast processing, copy the original photos to the computer. (Optional)</li>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>Upload plant photos using the file uploader provided on this page</li>
                    <li><img className="pe-2" src="/images/icon/leaf.png" alt="icon" style={{display:"inline"}}/>Our Team will Verify the image in First Come First Serve manner and will approve it for public listing</li>

                  </ul>

                  <div className="col-lg-12">
                    <div class="container-youtube">
                      <iframe title="ytvideo" class="responsive-iframe" src="https://www.youtube.com/embed/AkbGz3CYvqE?&loop=1&autoplay=1&controls=0"></iframe>
                    </div>
                  </div>  

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
                      value={treeName}
                      onChange={(e) => settreeName(e.target.value)}
                      placeholder="Tree Name"
                    />

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="text"
                        placeholder="Select Location From Map"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        readOnly
                        style={{
                          flex: "1",
                          marginRight: "10px",
                        }}
                      />
                      <button
                        type="button"
                        className="fa-solid"
                        onClick={openPopup}
                        style={{
                          height: "60px",
                          paddingRight: "55px",
                          paddingLeft: "55px",
                          marginBottom: "20px",
                          backgroundColor: "#3E6294",
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

                    <input
                      type="datetime-local"
                      value={plantedOn}
                      onChange={(e) => setPlantedOn(e.target.value)}
                      placeholder="Planted On"
                    />

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
