import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { FaSearch } from "react-icons/fa";
import GameDetails from "../../components/GameDetails";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderSlider from "../../components/HeaderSlider";
import PrimarySidebar from "../../components/PrimarySidebar";
import SecondarySidebar from "../../components/SecondarySidebar";
import DetailSection from "../../components/DetailSection";
import classes from "./GameGuides.module.css";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Card(data) {
  return (
    <Tilt
      options={defaultOptions}
      style={
        data.url
          ? {
              // gridColumn: "span 2/ span 2",
              gridColumnStart: 1,
              gridColumnEnd: 3,
              background:
                "linear-gradient(270deg, rgba(24, 27, 33, 0) 0%, #181b21 100%), url(https://blitz-cdn.blitz.gg/blitz/game-guide/CompsTileBG.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              width: "calc(0.25 * 133rem)",
              position: "relative",
              borderRadius: "10px",
              cursor: "pointer",
              position: "relative",
              gridRow: "span 1",
            }
          : {
              width: "calc(0.25 * 62rem)",
              position: "relative",
              borderRadius: "10px",
              cursor: "pointer",
              position: "relative",
            }
      }
      className={classes.cardContainer}
    >
      {/* {data.url && (
        <img
          src={data.url}
          alt="Cover Imge"
          className={classes.sliderCoverImage}
        />
      )} */}
      <div className={classes.cardIcon}>{data.icon}</div>
      <div className={classes.cardTitle}>{data.title}</div>
      <div className={classes.cardDescription}>{data.description}</div>
    </Tilt>
  );
}

const GameGuides = () => {
  const [active, setActive] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const tabList = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#E3E5EA"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="6" y="4" width="12" height="16" rx="2"></rect>
          <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2V6ZM4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2V6Z"></path>
        </svg>
      ),
      title: "All Games",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="icon-box"
            d="M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z"
            fill="#D5A038"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.223 3 7 4.167v11.277L6.223 17h8.568l1.044-3h-5.796V3H6.223ZM3.39 10.389A6.6 6.6 0 0 1 6 5.126v2.97a4.59 4.59 0 0 0-.61 2.293c0 .835.222 1.618.61 2.294v2.578l-.14.281a6.599 6.599 0 0 1-2.47-5.153Zm11.222 0c0 .97-.299 1.869-.81 2.611h2.275A6.613 6.613 0 0 0 11 3.853v2.033a4.613 4.613 0 0 1 3.611 4.503Z"
            fill="#0E1015"
          ></path>
        </svg>
      ),
      title: "League of Legends",
      cards: [
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.714 5.786a1.5 1.5 0 0 0-1.5-1.5h-.428a1.5 1.5 0 0 0-1.5 1.5v12.428a1.5 1.5 0 0 0 1.5 1.5h.428a1.5 1.5 0 0 0 1.5-1.5V5.786Zm-9.428 5.143a1.5 1.5 0 0 1 1.5-1.5h.428a1.5 1.5 0 0 1 1.5 1.5v7.285a1.5 1.5 0 0 1-1.5 1.5h-.428a1.5 1.5 0 0 1-1.5-1.5V10.93Zm-6 5.142a1.5 1.5 0 0 1 1.5-1.5h.428a1.5 1.5 0 0 1 1.5 1.5v2.143a1.5 1.5 0 0 1-1.5 1.5h-.428a1.5 1.5 0 0 1-1.5-1.5v-2.143Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Statistics",
          url: "",
          description:
            "View in depth champion stats like win rate, synergies, and more.",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.203 10.267-.005-.003a.874.874 0 0 0-.577-.185H8.51a.096.096 0 0 0-.096.095v1.29c0 .053.043.096.096.096h1.112c.246 0 .435-.07.58-.198a.692.692 0 0 0 .218-.538c0-.283-.083-.455-.216-.557Zm5.807 2.465-.005-.004c-.118-.112-.287-.177-.53-.177h-1.272a.096.096 0 0 0-.096.095v1.18c0 .052.043.095.096.095h1.262c.274 0 .45-.066.558-.17.107-.102.174-.268.174-.53 0-.23-.069-.385-.187-.489Zm-1.807-1.524h1.094c.231 0 .388-.053.493-.139.104-.086.165-.214.165-.412 0-.215-.062-.35-.159-.433-.103-.09-.262-.145-.5-.145h-1.093a.096.096 0 0 0-.096.095v.939c0 .053.043.095.096.095Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.414 2.988a2.847 2.847 0 0 0-2.828 0l-5.743 3.29A2.802 2.802 0 0 0 3.429 8.71v6.582c0 1.002.539 1.929 1.414 2.43l5.743 3.29a2.847 2.847 0 0 0 2.828 0l5.743-3.29a2.802 2.802 0 0 0 1.414-2.43V8.709a2.802 2.802 0 0 0-1.414-2.43l-5.743-3.291ZM6.827 14.983V9.016c0-.231.19-.419.423-.419h2.39c.698 0 1.28.199 1.733.607.456.405.679.951.679 1.62 0 .667-.216 1.213-.659 1.618-.436.406-1.027.6-1.753.6H8.51a.095.095 0 0 0-.097.094v1.847a.42.42 0 0 1-.422.42H7.25a.42.42 0 0 1-.423-.42Zm10.338-.164-.002.001c-.424.401-1.1.582-1.987.582h-2.232a.42.42 0 0 1-.423-.42V9.017c0-.231.19-.419.423-.419h2.511c.613 0 1.12.181 1.504.555.387.364.582.817.582 1.348 0 .508-.191.917-.565 1.217.2.125.37.291.508.496.202.285.3.623.3 1.009 0 .652-.203 1.19-.619 1.597Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Pro Builds",
          url: "",
          description: "See what builds the pros use and watch them live.",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.357 3.428H7.643a2.5 2.5 0 0 0-2.5 2.5v7.26a1 1 0 0 0 .433.824l5.858 4.027a1 1 0 0 0 1.133 0l5.857-4.027a1 1 0 0 0 .433-.824v-7.26a2.5 2.5 0 0 0-2.5-2.5ZM5.143 15.274v1.032c0 .423.208.82.557 1.06l5.572 3.83a1.286 1.286 0 0 0 1.456 0l5.572-3.83c.349-.24.557-.637.557-1.06v-1.032l-6.12 4.208a1.3 1.3 0 0 1-1.473 0l-6.121-4.208Zm6.725-3.33a.285.285 0 0 1 .264 0l1.68.88a.285.285 0 0 0 .412-.3l-.32-1.86a.285.285 0 0 1 .082-.252l1.356-1.317a.285.285 0 0 0-.158-.486l-1.875-.271a.285.285 0 0 1-.214-.156l-.84-1.694a.285.285 0 0 0-.51 0l-.84 1.694a.285.285 0 0 1-.214.156l-1.875.271a.285.285 0 0 0-.158.486l1.356 1.317c.067.065.098.16.082.252l-.32 1.86c-.04.232.204.41.412.3l1.68-.88Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Tier List",
          url: "",
          description:
            "Get the most up to date rankings for all top champions.",
        },
      ],
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="icon-box"
            d="M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z"
            fill="#F59511"
          ></path>
          <path
            d="M13.073 9.963c-.572-.35-.39-.105-.15.126 1.023.966 1.7 1.914 1.952 2.737.164.535.017.861-.227.392-.374-.71-.862-1.257-1.163-1.498-.296-.238-.29-.123-.146.066.583.78.928 1.565.583 2.174-.57.998-2.863.746-5.118-.56-2.87-1.66-4.64-3.931-3.99-5.093.282-.508 1.05-.718 1.958-.64.192.017.181-.046.01-.092-1.082-.287-2.36-.017-2.813.774-.828 1.438 1.1 4.113 4.308 5.972.68.392 1.567.833 2.614 1.183.636.213.545.469-.548.255-1.159-.224-2.604-.83-3.969-1.634-.395-.231-.447-.14-.154.147.273.266.786.672 1.41 1.043 3.185 1.9 7.161 2.398 8.302.413 1.02-1.775-.813-4.516-2.859-5.765Z"
            fill="#0E1015"
          ></path>
          <path
            d="M2.999 3 4.71 6.112h3.734v5.879c-.051-.04.048.038 0 0 .863.656 2.16 1.311 3.112 1.43-.049-.003.05.006 0 0V6.11h3.734L17 3H2.999Z"
            fill="#0E1015"
          ></path>
        </svg>
      ),
      title: "Teamfight Tactics",
      cards: [
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.564 11.76a1.418 1.418 0 0 0-1.414 0l-2.872 1.653a1.408 1.408 0 0 0-.707 1.22v3.305c0 .504.27.969.707 1.22l2.872 1.653c.438.252.977.252 1.414 0l2.872-1.652a1.41 1.41 0 0 0 .707-1.22v-3.306c0-.503-.27-.969-.707-1.22L7.564 11.76Zm10.286 0a1.418 1.418 0 0 0-1.414 0l-2.872 1.653a1.408 1.408 0 0 0-.707 1.22v3.305c0 .504.27.969.707 1.22l2.872 1.653c.437.252.976.252 1.414 0l2.872-1.652a1.41 1.41 0 0 0 .707-1.22v-3.306c0-.503-.27-.969-.707-1.22L17.85 11.76Zm-5.143-9a1.418 1.418 0 0 0-1.414 0L8.421 4.413a1.408 1.408 0 0 0-.707 1.22v3.305c0 .504.27.969.707 1.22l2.872 1.653c.438.252.977.252 1.414 0l2.872-1.652a1.41 1.41 0 0 0 .707-1.22V5.632c0-.503-.27-.969-.707-1.22L12.707 2.76Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          url: "https://blitz-cdn.blitz.gg/blitz/game-guide/CompsTileBG.webp",
          title: "Comps",
          description: "Tap compositions in the meta.",
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 32 32">
              <g clip-path="url(#game-guides-tft-set-a-0)">
                <path d="m12.157 5.332 2.938 6.562h-3.87l3.389 6.65a5.413 5.413 0 0 1 2.798.009l-1.551-4.272h4.198l-1.723-8.936v-.013h-.002v-.008h-6.179l.004.008h-.002ZM15.997 20.56c-.99 0-1.877.446-2.471 1.149a3.238 3.238 0 1 0 5.709 2.088c0-.795-.288-1.522-.762-2.085a3.228 3.228 0 0 0-2.476-1.152Z"></path>
                <path d="M10.979 21.721a5.458 5.458 0 0 1 1.41-1.98L6.796 10.05h5.122l-1.014-2.36H2.878l8.1 14.031ZM20.869 7.69l.416 2.36h3.934l-5.607 9.694a5.43 5.43 0 0 1 1.41 1.985L29.139 7.69h-8.272.002Z"></path>
              </g>
              <defs>
                <clipPath id="game-guides-tft-set-a-0">
                  <path
                    transform="translate(2.878 5.324)"
                    d="M0 0h26.261v21.709H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          ),
          url: "",
          title: "Set 8.5 Update",
          description: "What's new in the latest update.",
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12.354 1.525a.5.5 0 0 0-.707 0l-1.399 1.398a.254.254 0 0 1-.128.07 9.21 9.21 0 0 0-7.168 7.335.245.245 0 0 0 .175.28l1.835.524a.259.259 0 0 0 .323-.211 6.81 6.81 0 0 1 4.191-5.237.245.245 0 0 1 .263.055l1.907 1.907a.5.5 0 0 0 .708 0L14.26 5.74a.245.245 0 0 1 .263-.055 6.81 6.81 0 0 1 4.19 5.237.258.258 0 0 0 .324.21l1.835-.523a.245.245 0 0 0 .175-.28 9.21 9.21 0 0 0-7.168-7.336.254.254 0 0 1-.128-.069l-1.398-1.398ZM10 19c-2.187-.003-3.388-3.09-3.639-4.496-.036-.204-.054-.306-.097-.36C6.222 14.09 6.148 14.06 6 14l-3.532-.93c-.116-.047-.174-.07-.221-.07a.252.252 0 0 0-.23.172C2 13.22 2 13.287 2 13.422c.014 1.26.595 1.61 1.154 1.946.141.085.28.169.41.266l.057.044c.15.114.225.17.202.246-.022.076-.116.076-.306.076H3.5c-.233 0-.35 0-.423.124-.074.124-.036.215.04.397C3.797 18.143 7.303 21 10 21c.552 0 1-.5 1-1s-.448-1-1-1Zm7.639-4.496C17.389 15.91 16.187 18.997 14 19c-.552 0-1 .5-1 1s.448 1 1 1c2.697 0 6.202-2.857 6.883-4.479.076-.182.114-.273.04-.397C20.85 16 20.733 16 20.5 16h-.017c-.172 0-.259 0-.277-.082-.02-.083.052-.123.195-.205l.09-.05c.058-.033.119-.065.18-.098.61-.326 1.329-.71 1.329-2.144 0-.134 0-.201-.017-.249a.252.252 0 0 0-.23-.172c-.047 0-.105.023-.221.07L18 14c-.148.06-.222.09-.264.144-.043.054-.06.156-.097.36Z"></path>
            </svg>
          ),
          url: "",
          title: "Augments",
          description: "Top augments in the meta.",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.714 5.786a1.5 1.5 0 0 0-1.5-1.5h-.428a1.5 1.5 0 0 0-1.5 1.5v12.428a1.5 1.5 0 0 0 1.5 1.5h.428a1.5 1.5 0 0 0 1.5-1.5V5.786Zm-9.428 5.143a1.5 1.5 0 0 1 1.5-1.5h.428a1.5 1.5 0 0 1 1.5 1.5v7.285a1.5 1.5 0 0 1-1.5 1.5h-.428a1.5 1.5 0 0 1-1.5-1.5V10.93Zm-6 5.142a1.5 1.5 0 0 1 1.5-1.5h.428a1.5 1.5 0 0 1 1.5 1.5v2.143a1.5 1.5 0 0 1-1.5 1.5h-.428a1.5 1.5 0 0 1-1.5-1.5v-2.143Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          url: "",
          title: "Statistics",
          description: "Champion, traits and item statistics.",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.203 10.267-.005-.003a.874.874 0 0 0-.577-.185H8.51a.096.096 0 0 0-.096.095v1.29c0 .053.043.096.096.096h1.112c.246 0 .435-.07.58-.198a.692.692 0 0 0 .218-.538c0-.283-.083-.455-.216-.557Zm5.807 2.465-.005-.004c-.118-.112-.287-.177-.53-.177h-1.272a.096.096 0 0 0-.096.095v1.18c0 .052.043.095.096.095h1.262c.274 0 .45-.066.558-.17.107-.102.174-.268.174-.53 0-.23-.069-.385-.187-.489Zm-1.807-1.524h1.094c.231 0 .388-.053.493-.139.104-.086.165-.214.165-.412 0-.215-.062-.35-.159-.433-.103-.09-.262-.145-.5-.145h-1.093a.096.096 0 0 0-.096.095v.939c0 .053.043.095.096.095Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.414 2.988a2.847 2.847 0 0 0-2.828 0l-5.743 3.29A2.802 2.802 0 0 0 3.429 8.71v6.582c0 1.002.539 1.929 1.414 2.43l5.743 3.29a2.847 2.847 0 0 0 2.828 0l5.743-3.29a2.802 2.802 0 0 0 1.414-2.43V8.709a2.802 2.802 0 0 0-1.414-2.43l-5.743-3.291ZM6.827 14.983V9.016c0-.231.19-.419.423-.419h2.39c.698 0 1.28.199 1.733.607.456.405.679.951.679 1.62 0 .667-.216 1.213-.659 1.618-.436.406-1.027.6-1.753.6H8.51a.095.095 0 0 0-.097.094v1.847a.42.42 0 0 1-.422.42H7.25a.42.42 0 0 1-.423-.42Zm10.338-.164-.002.001c-.424.401-1.1.582-1.987.582h-2.232a.42.42 0 0 1-.423-.42V9.017c0-.231.19-.419.423-.419h2.511c.613 0 1.12.181 1.504.555.387.364.582.817.582 1.348 0 .508-.191.917-.565 1.217.2.125.37.291.508.496.202.285.3.623.3 1.009 0 .652-.203 1.19-.619 1.597Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          url: "",
          title: "Pro Builds",
          description: "Recent compositions used by Pro's.",
        },
      ],
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="icon-box"
            d="M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z"
            fill="#FF4655"
          ></path>
          <path
            d="M3.118 4.236 12.29 15.89c.035.044.004.109-.051.109H7.72a.065.065 0 0 1-.051-.025l-4.654-5.846A.068.068 0 0 1 3 10.087v-5.81c0-.063.079-.09.118-.041Zm7.761 7.684 6.004-7.617c.039-.05.117-.022.117.042v5.775c0 .016-.005.03-.015.043l-1.484 1.841a.066.066 0 0 1-.051.025h-4.52c-.055 0-.086-.066-.051-.11Z"
            fill="#0E1015"
          ></path>
        </svg>
      ),
      title: "Valorant",
      cards: [
        {
          url: "",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.714 5.786a1.5 1.5 0 0 0-1.5-1.5h-.428a1.5 1.5 0 0 0-1.5 1.5v12.428a1.5 1.5 0 0 0 1.5 1.5h.428a1.5 1.5 0 0 0 1.5-1.5V5.786Zm-9.428 5.143a1.5 1.5 0 0 1 1.5-1.5h.428a1.5 1.5 0 0 1 1.5 1.5v7.285a1.5 1.5 0 0 1-1.5 1.5h-.428a1.5 1.5 0 0 1-1.5-1.5V10.93Zm-6 5.142a1.5 1.5 0 0 1 1.5-1.5h.428a1.5 1.5 0 0 1 1.5 1.5v2.143a1.5 1.5 0 0 1-1.5 1.5h-.428a1.5 1.5 0 0 1-1.5-1.5v-2.143Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Statistics",
          description: "Most popular Agents, Weapons and Maps.",
        },
        {
          url: "",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7.869v7.741l.227-.029.63.937C20.3 18.153 18.572 21.228 14 22c0 0 2.225-1.307 2-8.531 0 0 2.52-.572 2.023-4.825 0 0-4.144.035-4.69 3.512v4.069c0 .29-.235.525-.525.525h-1.616a.525.525 0 0 1-.525-.525v-4.069c-.558-3.477-4.69-3.535-4.69-3.535C5.491 12.896 8 13.754 8 13.754 7.787 20.978 10 22 10 22c-5.003-.846-6.595-4.507-6.987-5.975a.483.483 0 0 1 .107-.435c.107-.117.213-.152.415-.152H4v-7.57c0-2.137 4.538-5.367 6.743-6.542a2.64 2.64 0 0 1 2.537 0C15.486 2.512 20 5.719 20 7.869Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Agents",
          description: "See all Agent abilities, lineups, insights and more.",
        },
        {
          url: "",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20.572s6.857-4.286 6.857-10.286a6.857 6.857 0 0 0-13.714 0c0 6 6.857 10.286 6.857 10.286Zm0-7.715a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Lineups",
          description:
            "Review the best attacking and defending positions to gain the tactical advantage.",
        },
        {
          url: "",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m22.792 13.674 1.11 2.713c.05.124.078.255.084.389l.013.302c.017.404-.178.787-.514 1.01l-.298.2-1.622 1.123c-.062.042-.126.08-.194.111l-1.938.913a.574.574 0 0 1-.742-.234l-.382-.663a1.348 1.348 0 0 1-.145-.976l.146-.63c.085-.371.07-.759-.047-1.122l-.782-2.444a1.542 1.542 0 0 0-.298-.533l-.083-.097a1.541 1.541 0 0 0-1.28-.534l-.966.069a1.15 1.15 0 0 1-.21-.005l-2.268-.252-1.302-.3a1.156 1.156 0 0 1-.665-.433l-.538-.717-.81-1.318a1.339 1.339 0 0 0-1.14-.637H3.147l-1.15-.122a.77.77 0 0 1-.5-.259l-.64-.733a.578.578 0 0 1-.12-.215L.38 7.082l-.368-1.84a.578.578 0 0 1 .012-.273l.34-1.184a.096.096 0 0 1 .072-.068l.832-.187a.096.096 0 0 0 .056-.036l.342-.455A.096.096 0 0 1 1.752 3l1.636.167c.015.001.03.007.043.015l.485.324a.09.09 0 0 0 .05.016l14.73.483c.067.003.13-.03.167-.085l.411-.617a.193.193 0 0 1 .237-.07l1.086.473a.193.193 0 0 1 .084.07l.528.793.688 1.297a.193.193 0 0 0 .17.103h.358c.224 0 .427.129.523.331l.62 1.317a.385.385 0 0 1-.146.492l-1.41.871a1.349 1.349 0 0 0-.51.57l-.037.078c-.163.344-.173.74-.028 1.092l.235.568 1.12 2.385Zm-9.285-3.976a.998.998 0 0 0-1.077-.747l-.467.052a1.462 1.462 0 0 0-1.3 1.453v.04c0 .268.07.531.202.764l.008.014c.203.355.538.614.932.722l.636.173c.132.036.268.054.405.054h1.144c.405 0 .798-.142 1.11-.401l.085-.072a1.147 1.147 0 0 0 .354-1.243l-.052-.156a1.542 1.542 0 0 0-.229-.437l-.168-.225a.256.256 0 0 0-.205-.102h-.072a.332.332 0 0 0-.316.436c.02.06.022.123.008.184-.022.094-.05.221-.075.342-.05.232-.17.443-.342.605l-.164.153a1.154 1.154 0 0 1-.153.121l-.528.35a.23.23 0 0 1-.166.035l-.156-.026a.18.18 0 0 1-.051-.338.18.18 0 0 0 .058-.045l.367-.441c.173-.208.268-.47.268-.74v-.164c0-.095-.012-.19-.035-.28l-.02-.08Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Weapons",
          description: "See stats for every weapon in the game.",
        },
        {
          url: "",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.786 4.286a2.5 2.5 0 0 0-2.5 2.5v7.928a5 5 0 0 0 5 5h5.428a5 5 0 0 0 5-5V6.786a2.5 2.5 0 0 0-2.154-2.477l-1.274 2.548H14.57l1.286-2.571h-2.143L12.43 6.857h-1.715L12 4.286H9.857L8.571 6.857H6.857l1.286-2.571H6.786Zm7.785 8.142-5.142 3v-6l5.142 3Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Videos",
          description:
            "Learn the best Lineups and Strategies that fit your play style.",
        },
        {
          url: "",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m8.024 15.16-.206-1.016-2.589-1.468a1.91 1.91 0 0 1-1.015-1.35L3.46 7.41a1.909 1.909 0 0 1 1.875-2.265h1.086c.21-.498.703-.86 1.294-.86h8.572a1.4 1.4 0 0 1 1.292.858h1.081a1.909 1.909 0 0 1 1.875 2.264l-.747 3.917a1.91 1.91 0 0 1-1.015 1.35l-2.589 1.465-.206 1.022a1.403 1.403 0 0 1-1.375 1.125h-.776a.429.429 0 0 0-.424.492l.129.857c.031.21.211.365.424.365h1.096c.105 0 .206.038.285.108l.964.857a.429.429 0 0 1-.285.75h-8.03a.429.429 0 0 1-.286-.75l.965-.857A.428.428 0 0 1 8.949 18h1.097a.429.429 0 0 0 .424-.365l.128-.857a.429.429 0 0 0-.424-.492h-.776c-.667 0-1.242-.47-1.374-1.125Zm-2.689-8.3H6.52l.86 5.112L6 11.146a.195.195 0 0 1-.103-.138L5.144 7.09a.195.195 0 0 1 .191-.231Zm13.325-.003h-1.179l-.858 5.11L18 11.143a.195.195 0 0 0 .104-.138l.747-3.917a.195.195 0 0 0-.192-.23Zm-6.773 4.359a.244.244 0 0 1 .227 0l1.443.756c.18.094.39-.059.355-.259l-.275-1.598a.245.245 0 0 1 .07-.217l1.166-1.132a.245.245 0 0 0-.135-.417l-1.612-.234a.245.245 0 0 1-.185-.133l-.721-1.457a.245.245 0 0 0-.439 0l-.722 1.457a.245.245 0 0 1-.184.133l-1.612.234a.245.245 0 0 0-.135.417l1.165 1.132a.245.245 0 0 1 .07.217l-.274 1.598c-.035.2.175.353.354.259l1.444-.756Z"
                fill="currentColor"
              ></path>
            </svg>
          ),
          title: "Leaderboards",
          description:
            "See how you stack up against the best players around the world.",
        },
      ],
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="icon-box"
            d="M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z"
            fill="#F3A722"
          ></path>
          <path
            d="M9.295 2h.435c.302.117.592.279.856.462.084.351.232.725.104 1.084-.109.1-.256.14-.388.201.016.139.039.276.06.413.248-.02.489-.084.732-.13.034-.144.042-.299.134-.42.02.097.036.195.048.293.13.074.257.18.419.164 1.02 0 2.04-.003 3.06 0 .112-.009.166.109.243.17.002-.214.001-.428.011-.642l.12.003c.007.187-.014.38.04.563.056.013.114.017.173.024l.01.22c.313.01.63.03.94-.023.21-.03.422-.01.632-.01.004.074.01.147.024.22-.26.018-.524.036-.783-.007-.415-.05-.829.037-1.243.014-.014.055-.028.11-.04.167-.4.004-.797-.003-1.195-.001-.132-.003-.278.025-.361.135-.117.144-.26.267-.372.414-.036.271.071.534.133.793-.094.034-.188.065-.28.1-.095.293-.058.667-.33.872-.15.111-.282.25-.454.329-.124.055-.258-.002-.384-.02-.468-.07-.855-.354-1.273-.55-.027.112-.058.222-.088.333.126.08.29.15.332.309.064.233.01.477.001.714-.02.217-.026.436-.047.654-.02.211-.144.393-.271.557-.12-.029-.236-.063-.353-.093-.127.268-.022.601.187.801.543.583.837 1.332 1.113 2.063.047.154.208.246.236.408.045.172.11.345.095.526-.021.318-.044.636-.077.952-.022.233-.11.465-.058.7.038.19.062.393-.01.58-.095.235-.094.492-.095.742.004.164.013.345.129.475.137.166.27.339.434.48.203.131.482.132.648.321.053.104.015.225.014.335-.526.079-1.077.085-1.588-.077-.288-.093-.606.066-.882-.09.015-.326.094-.643.211-.947.048-.226-.004-.461-.01-.69-.003-.199-.106-.374-.146-.565-.114-.41-.147-.835-.166-1.258-.025-.207.153-.364.16-.566a.623.623 0 0 0-.103-.513c-.195-.006-.46.045-.57-.162-.228-.335-.451-.674-.68-1.008-.08-.144-.271-.11-.402-.174-.117-.106-.176-.256-.249-.392-.042.155-.1.311-.217.428-.184.183-.25.435-.345.666a2.186 2.186 0 0 0-.152.516c-.025.135-.031.292-.154.38-.18.135-.243.36-.408.508a.882.882 0 0 0-.237.431c-.013.145.029.29-.008.433-.067.26-.212.49-.32.735-.075.172-.114.358-.197.527-.056.118-.198.156-.275.256a1.86 1.86 0 0 0-.217 1.276c.065.172.112.352.072.537-.138.019-.276.041-.415.054h-.43c-.111-.023-.226-.04-.328-.092a1.25 1.25 0 0 1 .005-.729c.1-.354.192-.711.282-1.067.062-.175-.084-.332-.07-.507-.015-.258.147-.47.264-.685.11-.191.07-.422.147-.623.172-.438.498-.795.693-1.222.06-.174-.005-.359.006-.538.015-.34.083-.675.142-1.01.02-.128.062-.264.012-.391a1.021 1.021 0 0 1-.07-.474c.022-.149-.068-.296-.012-.441.03-.123.145-.193.236-.27.017-.505-.17-1.003-.091-1.507.089-.11.233-.148.358-.204a41.238 41.238 0 0 1-.549-.114 2.468 2.468 0 0 1 .064-.606c.067-.31.03-.632.08-.945.008-.08.096-.107.166-.11.166-.011.333-.019.497-.058-.049-.395-.09-.798.001-1.192.087-.464.298-.934.693-1.222.272-.18.665-.288.95-.072l.093-.062a1.493 1.493 0 0 1 .133-1.343c.17-.27.467-.423.765-.516Zm2.668 3.022c-.015.115-.05.23-.163.284.148-.01.299-.009.445-.04l-.01-.253a8.138 8.138 0 0 0-.272.01Zm-.308.325-.051.064c.023.156.141.283.22.418.114-.159.23-.318.34-.48-.17-.008-.34-.02-.51-.002Z"
            fill="#0E1015"
          ></path>
        </svg>
      ),
      title: "CS:GO",
      cards: [],
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="icon-box"
            d="M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z"
            fill="#CB2630"
          ></path>
          <path
            d="m10 2 7.884 13.27-2.5 1.73-4.23-2.885h2.504L10 7.577l-3.63 6.538h2.476L4.616 17l-2.5-1.73L10 2Z"
            fill="#0E1015"
          ></path>
        </svg>
      ),
      title: "Apex Legends",
      cards: [],
    },
  ];
  return (
    <div className={classes.gameGuides}>
      <div className={classes.mainContainer}>
        <div className={classes.primarySidebar}>
          <PrimarySidebar />
        </div>
        <div className={classes.mainWrapper}>
          <div className={classes.mainContent}>
            <div className={classes.searchDiv}>
              <FaSearch
                style={{
                  position: "absolute",
                  top: 22,
                  left: 30,
                  fontSize: 16,
                  color: "#7e828b",
                }}
              />
              <input
                type="text"
                style={{
                  backgroundColor: "hsl(222, 10%, 17%)",
                  color: "hsla(222deg, 5%, 62%)",
                }}
                className={classes.searchInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled
                placeholder="Search"
              />
            </div>
            <h1 className={classes.heading}>Overlays</h1>
            <div className={classes.tabList}>
              {tabList.map((ele, index) => (
                <span
                  key={index}
                  className={`${classes.tab} ${
                    index === active ? classes.active : ""
                  }`}
                  onClick={() => setActive(index)}
                >
                  <span
                    className={`${classes.icon} ${
                      index === active
                        ? classes.activeIcon
                        : classes.notActiveIcon
                    }`}
                  >
                    {ele.icon}
                  </span>{" "}
                  {ele.title}
                </span>
              ))}
            </div>
            {active === 0 ? (
              <div className={classes.allGamesWrapper}>
                {tabList.map((ele, index) => {
                  if (index > 0 && ele?.cards?.length > 0) {
                    return (
                      <div className={classes.categoryList}>
                        <h3 className={classes.categoryHeading}>
                          <span className={classes.categoryIcon}>
                            {ele.icon}
                          </span>
                          {ele.title}
                        </h3>
                        <div className={classes.cardList}>
                          {ele?.cards?.map((card, index) => {
                            console.log("item", card.title);
                            return (
                              <Card
                                key={index}
                                url={card.url}
                                title={card.title}
                                icon={card.icon}
                                description={card.description}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              <div className={classes.allGamesWrapper}>
                {tabList.map((ele, index) => {
                  if (index === active) {
                    return (
                      <div className={classes.categoryList}>
                        <div className={classes.cardList}>
                          {ele?.cards?.length > 0 ? (
                            ele?.cards?.map((card, index) => {
                              console.log("item", card.title);
                              return (
                                <Card
                                  key={index}
                                  url={card.url}
                                  title={card.title}
                                  icon={card.icon}
                                  description={card.description}
                                />
                              );
                            })
                          ) : (
                            <h2>
                              Portal doesn't have Game Guides for {ele.title}{" "}
                              yet
                            </h2>
                          )}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        <div className={classes.secondarySidebar}>
          <SecondarySidebar />
        </div>
      </div>
    </div>
  );
};

export default GameGuides;