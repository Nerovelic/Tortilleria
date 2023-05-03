"use client";
import React, { useState, useEffect } from "react";
import Sucursal1 from "../assets/sucursal.jpg";
import Sucursal2 from "../assets/sucursal2.jpg";
import Sucursal3 from "../assets/sucursal3.jpg";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Sucursal.module.css";

const Sucursal = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const handleCardClick = (index) => {
    if (isMobile) {
      setShowPhoneNumber(showPhoneNumber === index ? false : index);
    } else {
      setSelectedCardIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Sucursales = [
    {
      src: Sucursal1.src,
      nombre: "Nombre Sucursal",
      direccion: "Calle 1, Ensenada B,C",
      color: "red",
      telefono: "+52(646)561-903",
    },
    {
      src: Sucursal2.src,
      nombre: "Nombre Sucursal",
      direccion: "Calle 2, Ensenada B,C",
      color: "gold",
      telefono: "+52(646)261-642",
    },
    {
      src: Sucursal3.src,
      nombre: "Nombre Sucursal",
      direccion: "Calle 3, Ensenada B,C",
      color: "red",
      telefono: "+52(646)320-411",
    },
  ];

  return (
    <div>
      <h4
        className="pt-5 pb-2 font-bold lg:text-[60px] text-[25px] text-[#3C9B35]"
        style={{
          textShadow: "0 0 10px #fff",
          marginLeft: isWideScreen ? "30%" : "auto",
          marginBottom: "24px",
          textAlign: isWideScreen ? "left" : "center",
        }}
      >
        Nuestras Sucursales son:
      </h4>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {Sucursales.map((sucursal, index) => (
          <div
            key={sucursal.src}
            style={{ position: "relative", marginBottom: "24px" }}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => !isMobile && setSelectedCardIndex(index)}
            onMouseLeave={() => !isMobile && setSelectedCardIndex(-1)}
          >
            <Card
              isHoverable={!isMobile}
              style={{
                backgroundImage: `url(${sucursal.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "270px",
                height: "270px",
                borderRadius: "50%",
              }}
              className={styles.circle}
            >
              <div
                className={`${styles.fill} ${styles[sucursal.color]}`}
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: 0.8,
                }}
              >
                {selectedCardIndex === index ||
                (isMobile && showPhoneNumber === index) ? (
                  <p
                    style={{
                      marginTop: "80px",
                      marginBottom: "12px",
                      textAlign: "center",
                      width: "100%",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    {sucursal.telefono}
                  </p>
                ) : null}
              </div>
            </Card>
            <div
              style={{
                marginTop: "12px",
                marginBottom: "12px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Text>{sucursal.nombre}</Text>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#020202aa"
              >
                {sucursal.direccion}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sucursal;
