import React from "react";
import LogoAdmin from "../../../assets/admin-img/undraw_metrics_re_6g90.svg";
import "../../../assets/css/styleku.css";
import Logo from "../../../assets/admin-img/undraw_aircraft_re_m05i.svg";
import { useNavigate } from "react-router-dom";
import TableMaskapai from "../maskapai/Ant";

function Maskapai() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="main-container d-flex">
        <div className="sidebar" id="side_nav">
          <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
            <h1 className="fs-4">
              <span className="text-white text-center control-terbang">
                <img src={LogoAdmin} alt="" width="100px" />
              </span>
            </h1>
          </div>
          <ul className="list-unstyled px-2">
            <li
              className="beruang px-3 py-2 d-block"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <i className="fal fa-home bear"></i> Dashboard
            </li>
            <li className="beruang px-3 py-2">
              <i className="fal fa-user-headset bear"></i> Admin
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/maskapai");
              }}
            >
              <i className="fal fa-plane-departure bear"></i> Maskapai
            </li>
            <li className="beruang px-3 py-2">
              <i className="fal fa-solar-panel bear"></i> Airport
            </li>
            <div className="container-fluid">
              <button className="btn-logout">
                <i className="fal fa-sign-out-alt"> Logout </i>
              </button>
            </div>
          </ul>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <div className="d-flex justify-content-between d-block">
                <img
                  src={Logo}
                  alt=""
                  width="100px"
                  class="navbar-brand fs-4 px-2 py-0"
                />
              </div>
              <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fal fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto d-md-none">
                  <li className="nav-item nav-link">Dashboard</li>
                  <li className="nav-item nav-link">Admin</li>
                  <li
                    className="nav-item nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/maskapai");
                    }}
                  >
                    Maskapai
                  </li>
                  <li className="nav-item nav-link">Airport</li>
                  <li className="nav-item nav-link">
                    <button className="btn btn-dark">
                      <i className="fal fa-sign-out-alt"> Logout </i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="dashboard-content px-3 pt-4 my-content">
            <h2 className="fs-5">Maskapai</h2>
            {/* content Maskapai */}
            <TableMaskapai />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Maskapai;