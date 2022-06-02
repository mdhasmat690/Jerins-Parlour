import React from "react";
import OurProduct from "./OurProduct";

const outTema = [
  {
    name: "Dr. Victoria De Vito   ",
    descrip: "Founder – MD, Facts",
    img: "https://i.ibb.co/Z8TVR5z/Team-1.webp",
  },
  {
    name: "Dr Abul",
    descrip: "Cosmetologist – Master’s of Cosmetology",
    img: "https://i.ibb.co/PZQYQY0/Team-2.webp",
  },
  {
    name: "Dr Hasan",
    descrip: "Hairdresser",
    img: "https://i.ibb.co/cXjXfc3/Team-7.webp",
  },
  {
    name: "Nadia Bake",
    descrip: "Professional Care",
    descrip: "Barber",
    img: "https://i.ibb.co/Xp6mz3W/Team-6.webp",
  },
  {
    name: "Nick Boil",
    descrip: "Nail Specialist",
    img: "https://i.ibb.co/MBdwYHY/Team-4.webp",
  },
  {
    name: "Tajmun ",
    descrip: "PEvent Manager ",
    img: "https://i.ibb.co/jkXbcgg/Team-3.webp",
  },
  {
    name: "Faria Islam",
    descrip: "Nail Specialist",
    img: "https://i.ibb.co/yhMRWGN/Tem-5-jpg-1.webp",
  },
  {
    name: "Nusrat Jahan",
    descrip: "Administrator",
    img: "https://i.ibb.co/hgrgkvK/Team-8-1.webp",
  },
];

const Team = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container mt-5 dd">
        <br />
        <br />

        <h1  className="our_story mb-5">
          Our Team
        </h1>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          {outTema?.map((member, index) => (
            <div key={index} class="col">
              <div class="card h-100 border-0">
                <div style={{ backgroundColor: "#f6ebe7" }}>
                  <img
                    src={member.img}
                    class="card-img-top mx-auto w-75"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h1
                    style={{
                      fontFamily: "Jost",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    class="card-title"
                  >
                    {member.name}
                  </h1>
                  <p
                    style={{
                      color: "#878484",
                      fontFamily: "Jost",
                      fontsize: "14px",
                      fontweight: "300",
                      letterSpacing: "0.02em",
                      lineHeight: "20px",
                    }}
                  >
                    {member.descrip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurProduct></OurProduct>
    </div>
  );
};

export default Team;
