import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from '../../utils/axiosInstance'

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
        <NoteCard 
        title="Judul 1" 
        date="12 January 2023" 
        content="haloo" 
        tags="#Meeting" 
        isPinned={true} 
        onEdit={() => {}} 
        onDelete={() => {}} 
        onPinNote={() => {}} />
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary-blue"
        onClick = {() => {
          setOpenAddEditModal({ isShows: true, type: "add", data:null});
        }}
      >
        <MdAdd classname="text-[32px] text-white" />
      </button>

      <Modal
        isOpen = {openAddEditModal.isShown}
        onRequestClose={() => {}}
        style = {{
          overlay: {
            backgrounColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-15 p-5 overflow-scroll"
      >

        <AddEditNotes />
      </Modal>
    </>
  );
};

export default Home;
