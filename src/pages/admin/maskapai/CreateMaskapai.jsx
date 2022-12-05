import React from "react";
import LogoAdmin from "../../../assets/admin-img/undraw_metrics_re_6g90.svg";
import Logo from "../../../assets/admin-img/undraw_aircraft_re_m05i.svg";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/styleAdmin.css";
import { useState } from "react";
import { createNewAirline } from "../../../redux/actions/airlineActions";
import Swal from "sweetalert2";

function CreateMaskapai() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // handle create
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    setErrors([]);
    setIsLoading(true);
    const createStatus = await createNewAirline(formData, setErrors);
    if (createStatus) {
      Swal.fire({
        title: "Success",
        text: "add airline success",
        icon: "success",
      });
    }
    setIsLoading(false);
  };

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
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/airport");
              }}
            >
              <i className="fal fa-solar-panel bear"></i> Airport
            </li>
          </ul>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand-lg bg-white">
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
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item nav-link  phone d-md-none yui">
                    Dashboard
                  </li>
                  <li className="nav-item nav-link phone d-md-none yui">
                    Admin
                  </li>
                  <li
                    className="nav-item nav-link phone d-md-none yui"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/maskapai");
                    }}
                  >
                    Maskapai
                  </li>
                  <li className="nav-item nav-link phone d-md-none yui">
                    Airport
                  </li>
                  <li className="nav-item nav-link phone">
                    <button className="btn btn-danger btn-sm">
                      <i className="fal fa-power-off text-light"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="dashboard-content px-3 pt-4 my-content">
            <div className="card">
              <div className="card-header">
                <div className="card-title text-center">Tambahkan Maskapai</div>
                <div className="ms-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/maskapai");
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="row mb-3">
                    <div className="col-lg-3">
                      <label className="form-label">Nama Maskapai</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Nama Airline"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Nomor Telepon</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="+62877-0987"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <h6 className="err">{errors}</h6>
                      <br />
                    </div>
                    <div className="text-end">
                      {isLoading ? (
                        <button
                          className="btn btn-success btn-lg- ms-2"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          >
                            Loading...
                          </span>
                        </button>
                      ) : (
                        <React.Fragment>
                          <button
                            className="btn btn-success btn-sm"
                            type="submit"
                          >
                            Submit
                          </button>
                        </React.Fragment>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateMaskapai;
