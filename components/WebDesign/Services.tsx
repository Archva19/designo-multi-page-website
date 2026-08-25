import ServicesSectionModel from "../Models/Services/ServicesSectionModel";

export default function Services() {
  const SERVICES = [
    {
      id: 1,
      title: "EXPRESS",
      desc: "A multi-carrier shipping website for ecommerce businesses",
      img: "/images/WebDesign/express.webp",
    },
    {
      id: 2,
      title: "TRANSFER",
      desc: "Site for low-cost money transfers and sending money within seconds",
      img: "/images/WebDesign/transfer.webp",
    },
    {
      id: 3,
      title: "PHOTON",
      desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
      img: "/images/WebDesign/photon.webp",
    },
    {
      id: 4,
      title: "BUILDER",
      desc: "Connects users with local contractors based on their location",
      img: "/images/WebDesign/builder.webp",
    },
    {
      id: 5,
      title: "BLOGR",
      desc: "Blogr is a platform for creating an online blog or publication",
      img: "/images/WebDesign/blogr.webp",
    },
    {
      id: 6,
      title: "CAMP",
      desc: "Get expert training in coding, data, design, and digital marketing",
      img: "/images/WebDesign/camp.webp",
    },
  ];
  return (
    <>
      <ServicesSectionModel arr={SERVICES} />
    </>
  );
}
