import React, { useState } from "react";
import classes from "./Card.module.css";
import { AiFillSetting } from "react-icons/ai";
import { Tilt } from "react-tilt";
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
} from "@chakra-ui/react";
const Card = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
    speed: 3000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <div key={props.key} className={classes.card}>
        <Tilt
          options={defaultOptions}
          style={{ height: "153px", width: "238px" }}
        >
          <div className={classes.imageContainer}>
            <img
              src={props.url ? props.url : empty}
              className={classes.image}
              onClick={() => {
                onOpen();
              }}
            />
            <div className={classes.settingIcon}>
              <AiFillSetting style={{ fontSize: 20, color: "#999ca3" }} />
            </div>
          </div>
        </Tilt>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
            fontSize: "calc(0.25 * 4em)",
            fontWeight: 700,
          }}
        >
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
      <Modal onClose={onClose} size="full" isOpen={isOpen} styleConfig>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
