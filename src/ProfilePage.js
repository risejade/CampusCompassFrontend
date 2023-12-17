import axios from "axios";
import React, {  useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./CCcss/ProfilePage.css";

const UploadAvatar = ({ userId, token, username, avatarUrl, setisUserUpdated }) => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);

  const toggle = () => {
    setModal(!modal);
  };

  const handleFileChange = ({ target: { files } }) => {
    if (files?.length) {
      const { type } = files[0];
      if (type === "image/png" || type === "image/jpeg") {
        setFile(files[0]);
      } else {
        toast.error("Accept only png and jpeg image types are allowed*", {
          hideProgressBar: true,
        });
      }
    }
  };

  const upateUserAvatarId = async (avatarId, avatarUrl) => {
    try {
      await axios.put(
        `http://localhost:8080/usercampus/update${userId}`,
        { avatarId, avatarUrl },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      );
      setisUserUpdated(true);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("File is required*", {
        hideProgressBar: true,
      });
      return;
    }

    try {
      const files = new FormData();
      files.append("files", file);
      files.append("name", `${username} avatar`);

      const {
        data: [{ id, url }],
      } = await axios.post(`http://localhost:3000/api/upload`, files, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      });
      upateUserAvatarId(id, url);
      setFile(null);
      setModal(false);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <Button size="sm" onClick={toggle}>
        {`${avatarUrl ? "Change" : "Upload"} picture`}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{`${
          avatarUrl ? "Change" : "Upload"
        } your avatar`}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={handleFileChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Upload
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const Profile = ({ token }) => {
  const [user, setUser] = useState({});
  const [isUserUpdated, setisUserUpdated] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/usercampus/getAllUsercampus`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        setUser(data);
        setisUserUpdated(false);
      } catch (error) {
        console.log({ error });
      }
    };
    getProfileData();
  }, [token, isUserUpdated]);

  return (
    <div className="userprofile">
      <div className="avatar">
        <div className="avatar-wrapper">
          {user.avatarUrl ? (
            <img
              className="avatar-image"
              src={`http://localhost:3000${user.avatarUrl}`}
              alt={`${user.username} avatar`}
            />
          ) : (
            <div className="default-avatar">
              <IoPersonCircleOutline className="avatar-icon" />
            </div>
          )}
          <UploadAvatar
            token={token}
            userId={user.id}
            username={user.username}
            avatarUrl={user.avatarUrl}
            setisUserUpdated={setisUserUpdated}
          />
        </div>
      </div>
      <div className="profilebody">
        <p className="profile-info">
          <span className="info-label">Name:</span> {user.username}
        </p>
        <p className="profile-info">
          <span className="info-label">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;