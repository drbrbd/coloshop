import React from 'react';
import style from './Contact.module.css';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import Map from './Map';

const Contact = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.contactSec}>
          <div className={style.contact}>
            <h4>Don't be a Stranger </h4>
            <h5>Just Say Hello</h5>
            <p>Feel Free To Get In Touch</p>
            <h6>Need help</h6>
            <p>devrbh23@gmail.com</p>
            <h6>Feel Like Talking</h6>
            <p>9843561293</p>
            <div>
              <AiFillTwitterCircle className={style.icon}></AiFillTwitterCircle>
              <FaFacebook className={style.icon}></FaFacebook>
              <FaLinkedin className={style.icon}></FaLinkedin>
              <FaInstagram className={style.icon}></FaInstagram>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Map></Map>
      </div>
    </>
  );
};

export default Contact;
