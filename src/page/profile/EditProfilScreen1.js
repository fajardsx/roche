import React, { Component, createRef } from "react";
import { Image, Button, Form, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BackAppHeaders } from "../../component/headers";
import defaultavatar from "../../assets/default_avatar.jpg";
import { AiOutlineCamera } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../../styles/profileregisterstyle.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Controller } from "swiper/core";
import { ModalConfirmRegister } from "../../modal/ModalComponent";

// install Swiper modules
SwiperCore.use([Pagination, Controller]);
class EditProfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fullscreen: false,
      loading: false,
      slideActive: 0,
      swiper: null,
      showModal: false,
      //register
      input_gender: "Mrs.",
      input_firstname: "",
      input_lastname: "",
      input_akademis: "",
      input_spesialis: "",
      input_email: "",
      input_phone: "",
      //location
      input_praticelocation: "",
    };
    this.modal = createRef();
  }
  handlePreviewClick() {
    const { data, fullscreen } = this.state;
    if (!data) {
      return;
    }
    this.setState({ fullscreen: !fullscreen });
  }
  handleSubmit(event) {
    const { target } = event;
    const { files } = target;
    console.log(files);
    if (files && files[0]) {
      var reader = new FileReader();
      reader.onloadstart = () => this.setState({ loading: true });
      reader.onload = (resulthevent) => {
        console.log(resulthevent);
        this.setState({
          data: resulthevent.target.result,
          loading: false,
        });
      };
      reader.readAsDataURL(files[0]);
    }
  }
  handleNext(event) {
    console.log("next ");
    this.state.swiper.activeIndex = 1;
    this.setState({
      swiper: this.state.swiper,
      slideActive: 1,
    });
  }
  getSwiper(swiper) {
    //console.log("init ", swiper);
    this.setState({
      swiper,
    });
  }
  handleSubmitForm(event) {
    console.log("submit");
    //this.props.history.push("/home");
    this.setState({
      showModal: true,
    });
  }
  handleSubmitFormUser(event) {
    console.log("submit");
    this.props.history.push("/home");
  }
  onSlide = (event) => {
    console.log(event);
    this.setState({
      slideActive: event.activeIndex,
    });
  };
  //
  render() {
    const { data, fullscreen, loading, slideActive } = this.state;
    const backgroundImage = this.state.data ? this.state.data : defaultavatar;
    const previewPic = ["preview", fullscreen ? "preview--fullscreen" : ""].join(" ");
    return (
      <>
        <BackAppHeaders titles={"Personal Data"} />
        {/* {this.page1()} */}
        <div className="profil-header">
          <div className="profil-photo">
            <Image
              src={backgroundImage}
              width="100"
              height="100"
              className="d-inline-block align-center border-w-1px  shadowProfil"
              roundedCircle
            />
            <div className="submit-camera-btn " onClick={this.handlePreviewClick.bind(this)}>
              <input
                id="picm"
                type="file"
                className={"press"}
                accept="image/*"
                onChange={this.handleSubmit.bind(this)}
              />

              {!loading && (
                <label htmlFor="picm">
                  <AiOutlineCamera size="18" color="#fff" />
                </label>
              )}
            </div>
            <div className="profil-photo-name-container">
              <label id="name">dr. Sharon Angela</label>
              <label id="description">Dokter Umum</label>
            </div>
          </div>
        </div>
        {this.pagination()}
        <div
          className="submit-btn-container"
          style={{ justifyContent: "center", padding: "40px 0 40px 0" }}>
          <Button
            onClick={
              slideActive == 0 ? this.handleNext.bind(this) : this.handleSubmitForm.bind(this)
            }
            className="submit-btn"
            style={{ aspectRatio: "0", justifyContent: "center", height: "6vh", width: "80%" }}
            type="submit">
            {slideActive == 0 ? "Next" : "Save"}
          </Button>
        </div>
        <ModalConfirmRegister
          show={this.state.showModal}
          onClose={() => {
            this.setState({
              showModal: false,
            });
          }}
          onSave={this.handleSubmitFormUser.bind(this)}
        />
      </>
    );
  }

  pagination = () => {
    const params = {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    };
    return (
      <div style={{ flex: 1, position: "relative" }}>
        <Swiper
          onSwiper={this.getSwiper.bind(this)}
          onSlideChange={this.onSlide.bind(this)}
          pagination={pagination}
          controller={{ control: this.state.swiper }}
          className="mySwiper">
          <SwiperSlide style={{ width: "100%", height: "auto" }}>{this.page1()} </SwiperSlide>
          <SwiperSlide style={{ width: "100%", height: "auto" }}>{this.page2()} </SwiperSlide>
        </Swiper>
      </div>
    );
  };
  page2 = (props) => {
    const { input_praticelocation } = this.state;
    return (
      <>
        <div className="profil-body">
          <Form>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Practice Location*</Form.Label>
              <Form.Control
                className={`${
                  input_praticelocation.length > 0
                    ? "register-FillBorder2"
                    : "register-noFillBorder2"
                }`}
                value={input_praticelocation}
                onChange={(event) => {
                  let fieldName = event.target.name;
                  let fleldVal = event.target.value;
                  this.setState({
                    input_praticelocation: fleldVal,
                  });
                }}
                type="normal"
                placeholder="e.g Prawijaya Hospital"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Province*</Form.Label>
              <Form.Control
                className={`register-noFillBorder2`}
                type="normal"
                placeholder="Dki Jakarta"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">City*</Form.Label>
              <Form.Control
                className={`register-noFillBorder2`}
                type="normal"
                placeholder="Jakarta Selatan"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Sub-District*</Form.Label>
              <Form.Control
                className={`register-noFillBorder2`}
                type="email"
                placeholder="Kebayoran Baru"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Postcode*</Form.Label>
              <Form.Control
                className={`register-noFillBorder2`}
                type="phone-pad"
                placeholder="12121"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Street Address*</Form.Label>
              <Form.Control
                className={`register-noFillBorder2`}
                type="normal"
                placeholder="Jakarta"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Country*</Form.Label>
              <Form.Control
                className={`register-noFillBorder2`}
                type="normal"
                placeholder="Indonesia "
              />
            </Form.Group>
          </Form>
          {/* <div
            className="submit-btn-container"
            style={{ justifyContent: "center", padding: "40px 0 0 0" }}>
            <Button
              onClick={this.handleSubmit}
              className="submit-btn"
              style={{ aspectRatio: "0", justifyContent: "center", height: "6vh", width: "80%" }}
              type="submit">
              Submit
            </Button>
          </div> */}
          {
            this.addFormTnc()
          }
        </div>
      </>
    );
  };
  page1 = (props) => {
    const {
      input_gender,
      input_firstname,
      input_lastname,
      input_akademis,
      input_spesialis,
      input_email,
      input_phone,
    } = this.state;
    return (
      <>
        <div className="profil-body">
          <div id="title-profil">
            Mohon diisi dengan lengkap nama dan gelar karena akan digunakan untuk sertifikat.
          </div>
          <Form>
            <Form.Group controlId="profil.control1">
              <Form.Row>
                <Col id="profil-title">
                  <Form.Label className="labelTitle">Title*</Form.Label>
                  <Form.Control
                    className={`${
                      input_gender.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                    }`}
                    as="select"
                    value={input_gender}
                    onChange={(event) => {
                      let fieldName = event.target.name;
                      let fleldVal = event.target.value;
                      this.setState({
                        input_gender: fleldVal,
                      });
                    }}>
                    <option>Mrs.</option>
                    <option>Mr.</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label className="labelTitle">First Name*</Form.Label>
                  <Form.Control
                    className={`${
                      input_firstname.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                    }`}
                    type="normal"
                    placeholder="Your Name"
                    value={input_firstname}
                    onChange={(event) => {
                      let fieldName = event.target.name;
                      let fleldVal = event.target.value;
                      this.setState({
                        input_firstname: fleldVal,
                      });
                    }}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Last Name*</Form.Label>
              <Form.Control
                type="normal"
                placeholder="Your Last Name"
                className={`${
                  input_lastname.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                }`}
                value={input_lastname}
                onChange={(event) => {
                  let fieldName = event.target.name;
                  let fleldVal = event.target.value;
                  this.setState({
                    input_lastname: fleldVal,
                  });
                }}
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Gelar Akademis*</Form.Label>
              <Form.Control
                className={`${
                  input_akademis.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                }`}
                value={input_akademis}
                onChange={(event) => {
                  let fieldName = event.target.name;
                  let fleldVal = event.target.value;
                  this.setState({
                    input_akademis: fleldVal,
                  });
                }}
                type="normal"
                placeholder="e.g SpOG"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Spesialisasi*</Form.Label>
              <Form.Control
                className={`${
                  input_spesialis.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                }`}
                value={input_spesialis}
                onChange={(event) => {
                  let fieldName = event.target.name;
                  let fleldVal = event.target.value;
                  this.setState({
                    input_spesialis: fleldVal,
                  });
                }}
                type="normal"
                placeholder="i.g (Sp.A,Ap.P,Sp.Pd,Sp. PD-KHOM)"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Email*</Form.Label>
              <Form.Control
                className={`${
                  input_email.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                }`}
                value={input_email}
                onChange={(event) => {
                  let fieldName = event.target.name;
                  let fleldVal = event.target.value;
                  this.setState({
                    input_email: fleldVal,
                  });
                }}
                type="email"
                placeholder="e.g name@example.com"
              />
            </Form.Group>
            <Form.Group controlId="profil.control2">
              <Form.Label className="labelTitle">Phone Number*</Form.Label>
              <Form.Control
                className={`${
                  input_phone.length > 0 ? "register-FillBorder" : "register-noFillBorder"
                }`}
                value={input_phone}
                onChange={(event) => {
                  let fieldName = event.target.name;
                  let fleldVal = event.target.value;
                  this.setState({
                    input_phone: fleldVal,
                  });
                }}
                type="phone-pad"
                placeholder="e.g 087878888888"
              />
            </Form.Group>
          </Form>
        </div>
      </>
    );
  };
  addFormTnc = () => (
    <Form>
      <Form.Group controlId="formCheckTnc" className="mb-3">
        <Form.Check type="checkbox" id={`check-api-checkbox`}>
          <Form.Check.Input type={"checkbox"} />
          <Form.Check.Label className="text-left checkboxlabel">
            I have read, understand and agree that personal information will be collected, stored
            and used in accordance with Roche Indonesia Privacy Policy for the below purposes.
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id={`check-api-checkbox`}>
          <Form.Check.Input type={"checkbox"} />
          <Form.Check.Label className="text-left checkboxlabel">
            I consent to receive communications from Roche Indonesia and its affiliates regarding
            (1) Roche's products and services; (2) Roche sponsored programs, events and initiatives;
            (3) customer feedback; and (4) medical and educational information through email, SMS,
            Calls, direct mail and others communication channels.
          </Form.Check.Label>
        </Form.Check>
        {/* <Form.Text className="text-left checkboxlabel">
          Dengan melakukan klik pada tombol "Daftar", saya setuju dengan{" "}
          <span>Syarat & Ketentuan</span> layanan di Roche
        </Form.Text> */}
      </Form.Group>
    </Form>
  );
}

export default EditProfilScreen;
