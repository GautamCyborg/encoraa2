import React, { useState } from 'react';

const EditProfile = () => {
  const [user, setUser] = useState({
    profilePicture: '/path/to/profile/picture.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser({ ...editedUser });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEditedUser((prev) => ({ ...prev, profilePicture: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileSection}>
        <div style={styles.profilePictureWrapper}>
          <img 
            src={isEditing ? editedUser.profilePicture : user.profilePicture} 
            alt="Profile" 
            style={styles.profilePicture} 
          />
          {isEditing && (
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleProfilePictureChange} 
              style={styles.fileInput}
            />
          )}
        </div>
        <div style={styles.profileInfo}>
          {isEditing ? (
            <>
              <input 
                type="text" 
                name="name" 
                value={editedUser.name} 
                onChange={handleChange} 
                style={styles.input}
              />
              <input 
                type="email" 
                name="email" 
                value={editedUser.email} 
                onChange={handleChange} 
                style={styles.input}
              />
            </>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </>
          )}
        </div>
        <div style={styles.buttonContainer}>
          {isEditing ? (
            <>
              <button onClick={handleSave} style={styles.button}>Save</button>
              <button onClick={handleCancel} style={styles.button}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit} style={styles.button}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    backgroundColor: '#f4f4f4',
  },
  profileSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  profilePictureWrapper: {
    position: 'relative',
    marginBottom: '20px'
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  fileInput: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    cursor: 'pointer'
  },
  profileInfo: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

export default EditProfile;
