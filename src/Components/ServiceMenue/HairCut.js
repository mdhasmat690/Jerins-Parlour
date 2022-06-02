import React from "react";
import "./Hair.css";
import Time from "./Time";

const HairCut = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="haih">Hair</h1>

          <p className="hairp mx-auto">
            Stylish hair cuts, gorgeous styling, incredible color services and
            best hair treatments. Choose your dream service!
          </p>
        </div>

        <div className="container">
          <h2 className="container hair_style" style={{ textAlign: "left" }}>
            Hair
          </h2>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col mx-auto">
              <div className="border-0 card">
                <div className="card-body w-75">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">Clipper Cut</h5>
                    <p className="hair_price">Price $39</p>
                  </div>
                  <p className="card-text hair_p">
                    A haircut using clippers to achieve an ultra-short design.
                    (30 min)
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="border-0 card">
                <div className="card-body w-75">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">Kids Haircut</h5>
                    <p className="hair_price">Price $39</p>
                  </div>
                  <p className="card-text hair_p">
                    A haircut on a child age 10 & under. (30 min)
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="border-0 card">
                <div className="card-body w-75">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">Haircut</h5>
                    <p className="hair_price">Price $39</p>
                  </div>
                  <p className="card-text hair_p">
                    A haircut, trim or shape on anyone over the age of 10. (60
                    min)
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="border-0 card">
                <div className="card-body w-75">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">Bang Trim</h5>
                    <p className="hair_price">Price $39</p>
                  </div>
                  <p className="card-text hair_p">
                    A trim on the bang area. Shampoo, conditioner and scalp
                    massage not included. (15 min)
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="border-0 card">
                <div className="card-body w-75">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">Signature Haircut</h5>
                    <p className="hair_price">Price $39</p>
                  </div>
                  <p className="card-text hair_p">
                    A haircut, trim, shape on anyone over the age of 10 with a
                    customized conditioning treatment. (1 hr 15 min)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="hair_parallax"></div>

      <div style={{ backgroundColor: "#F6EBE7" }}>
        <div className="container">
          <br />
          <br />
          <div>
            <h1 className="haih">Makeup</h1>

            <p className="hairp mx-auto">
              Complete your service with beautiful makeup and simply be amazing
              with complete look
            </p>
          </div>

          <br />
          <br />

          <div className="container">
            <h2 className="container hair_style" style={{ textAlign: "left" }}>
              Makeup
            </h2>

            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col mackup_style ">
                <div className="border-0 card mackup_style">
                  <div className="card-body w-75">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">Formal Makeup Application</h5>
                      <p className="hair_price">Price $39</p>
                    </div>
                    <p className="card-text hair_p">
                      Complete your service with this quick touch up, or pop in
                      and meet with an available service professional or retail
                      beauty advisor. (15 min)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mackup_style ">
                <div className="border-0 card mackup_style">
                  <div className="card-body w-75">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">Cocktail Makeup</h5>
                      <p className="hair_price">Price $39</p>
                    </div>
                    <p className="card-text hair_p">
                      Put your fresh face forward. This make up application will
                      have you looking your best. (45 min)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mackup_style ">
                <div className="border-0 card mackup_style">
                  <div className="card-body w-75">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">Complimentary Touch-up</h5>
                      <p className="hair_price">Price $39</p>
                    </div>
                    <p className="card-text hair_p">
                      A make up application that includes enhanced make up
                      techniques for a more dramatic look. (60 min)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mackup_style ">
                <div className="border-0 card mackup_style">
                  <div className="card-body w-75">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">
                        Everyday Makeup Application
                      </h5>
                      <p className="hair_price">Price $39</p>
                    </div>
                    <p className="card-text hair_p">
                      A make up application that includes enhanced make up
                      techniques for a more dramatic look. (60 min)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Time></Time>
    </>
  );
};

export default HairCut;
