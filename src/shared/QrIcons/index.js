import React, { Component } from "react";

import {
  Camera,
  Calendar,
  Contact,
  Wifi,
  Link,
  Geo,
  Book,
  QrCode,
  Email,
  TextDoc,
  Tel,
  Chat,
  Info,
  Payment,
  Event,
  ContactBook,
  Location,
  Rupee,
  Setting,
  EmailDetails,
  HashMarkLogo,
} from "../Icons";

const QrIcons = ({ type, size, color, stroke }) => {
  if (type == "SETTINGS") return <Setting size={size} color={color} />;
  if (type == "CAMERA") return <Camera size={size} color={color} />;
  if (type == "BOOK") return <Book size={size} color={color} />;
  if (type == "WIFI") return <Wifi size={size} />;
  if (type == "ISBN") return <Book size={size} />;
  if (type == "URL") return <Link size={size} color={color} />;
  if (type == "TEXT") return <TextDoc size={size} />;
  if (type == "GEO") return <Geo size={size} color={color} />;
  if (type == "PHONE") return <Tel size={size} color={color} stroke={stroke} />;
  if (type == "SMS") return <Chat size={size} />;
  if (type == "CONTACT_INFO") return <Contact size={size} />;
  if (type == "CALENDAR_EVENT") return <Calendar size={size} />;
  if (type == "EMAIL") return <Email size={size} color={color} />;
  if (type == "PAYMENT") return <Payment size={size} />;
  if (type == "WARNING") return <Payment size={size} />;
  if (type == "UPI") return <Rupee size={size} />;
  if (type == "BHIM") return <Rupee size={size} />;
  if (type == "EVENT") return <Event size={size} />;
  if (type == "CONTACTBOOK") return <ContactBook size={size} />;
  if (type == "LOCATION") return <Location size={size} />;
  if (type == "MONEY") return <Rupee size={size} />;
  if (type == "EMAILDETAILS") return <EmailDetails size={size} />;
  if (type == "HASHMARK") return <HashMarkLogo size={size} />;
  return <QrCode size={size} stroke={stroke} />;
};

export default QrIcons;
