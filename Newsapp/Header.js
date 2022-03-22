import { useEffect, useState } from "react";

import Link from "next/link";
import Modal from "react-modal";
import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const [categories, setCategories] = useState({
    business: false,
    entertainment: false,
    general: true,
    health: false,
    science: false,
    sports: false,
    technology: false,
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userAuth, setUserAuth] = useState(null);

  const getUserPref = async (email) => {
    var categories;
    userAuth !== null &&
      fetch(`http://localhost:8080/getDetails?email=${email}`)
        .then((e) => e.json())
        .then((e) => {
          e !== null && setCategories(e["userPreference"]);
        });
    return categories;
  };

  function openModal() {
    setIsOpen(true);
  }

  const updatePref = async (categories) => {
    if (typeof window !== "undefined")
      if (localStorage.getItem("newsAppCred") !== null) {
        var authVar = JSON.parse(localStorage.getItem("newsAppCred"));
        fetch("http://localhost:8080/updatePreference", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: authVar.email,
            preferences: categories,
          }),
        })
          .then((e) => e.json())
          .then((e) => {
            closeModal();
          });
        getUserPref(categories);
      } else setUserAuth(null);
  };

  function closeModal() {
    if (typeof window !== "undefined")
      if (localStorage.getItem("newsAppCred") !== null) {
        var authVar = JSON.parse(localStorage.getItem("newsAppCred"));
        setCategories(getUserPref(authVar.email));
      }
    setIsOpen(false);
  }

  useEffect(() => {
    verifyAuth();
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "300px",
      borderRadius: "8px",
      backgroundColor: "#000",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const verifyAuth = () => {
    if (typeof window !== "undefined")
      if (localStorage.getItem("newsAppCred") !== null) {
        var authVar = JSON.parse(localStorage.getItem("newsAppCred"));
        setUserAuth(authVar);
        getUserPref(authVar.email);
      } else setUserAuth(null);
  };

  const handleSignOut = () => {
    if (typeof window !== "undefined") localStorage.removeItem("newsAppCred");
    verifyAuth();
  };

  return (
    <div className={styles.header}>
      <Link href={"/"} passHref>
        <h1>News App</h1>
      </Link>
      {userAuth === null ? (
        <Link href={"/login"} passHref>
          <span>Sign In</span>
        </Link>
      ) : (
        <div>
          <span>{userAuth.email}</span>
          <span
            onClick={() => {
              handleSignOut();
            }}
          >
            Logout
          </span>
          <span onClick={openModal}>Settings</span>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Settings"
      >
        <button onClick={closeModal}>close</button>
        <div>
          <h1>Settings</h1>
          {categories !== null &&
            categories !== undefined &&
            Object.keys(categories).map((item, index) => {
              return (
                <>
                  <label>{item}</label>
                  <input
                    type={"checkbox"}
                    checked={categories[item]}
                    onChange={() => {
                      setCategories({
                        ...categories,
                        [item]: !categories[item],
                      });
                    }}
                  />
                  <br />
                </>
              );
            })}
          <button
            onClick={() => {
              updatePref(categories);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
