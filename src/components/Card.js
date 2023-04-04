import React, { useState } from "react";
import classes from "./Card.module.css";
import { AiFillSetting } from "react-icons/ai";
import empty from "../Assets/Images/empty.jpeg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
const Card = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div key={props.key} className={classes.card}>
        <div className={classes.imageContainer}>
          <img src={props.url ? props.url : empty} className={classes.image} onClick={()=>{
            onOpen();
          }
          }
          />
          <div className={classes.settingIcon}>
            <AiFillSetting style={{ fontSize: 20, color: "#999ca3" }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={classes.title}>{props.title}</p>
        </div>
        <div className={classes.chipList}>
          {props?.chips.map((ele) =>
            ele.title.map((title) => (
              <>
                {ele.isNew && (
                  <span
                    className={classes.chip}
                    style={{ color: "#30d9d3", background: "#162f32" }}
                  >
                    New
                  </span>
                )}
                <span className={classes.chip}>{title}</span>
              </>
            ))
          )}
        </div>
        <div className={classes.descriptionWrapper}>
          <p className={classes.description}>{props.description}</p>
        </div>
      </div>
      {/* <Modal onClose={onClose} size="full" isOpen={isOpen} styleConfig>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default Card;
