import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";

import NoteCard from "../../components/Cards/NoteCard";

import { MdAdd } from "react-icons/md";

import AddEditNotes from "./AddEditNotes";

import Modal from "react-modal";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,

    type: "add",

    data: null,
  });

  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  // Get User Info

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");

      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();

        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();

    return () => {};
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} />

      <div className="container mx-auto">
        <NoteCard title="Judul 1" date="12 January 2023" content="haloo" tags="#Meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
      </div>

      <AddEditNotes />
    </>
  );
  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="container mx-auto">
        <NoteCard title="Judul 1" date="12 January 2023" content="haloo" tags="#Meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
      </div>

      <AddEditNotes />
    </>
  );
};

export default Home;
