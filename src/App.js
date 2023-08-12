import React from "react";

import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

import "./App.css";

import sdb_cropped from "./imgs/portfolio-items/cropped/schooldatebooks_cropped.webp";
import sew_cropped from "./imgs/portfolio-items/cropped/stem_cropped.webp";
import eventlink_cropped from "./imgs/portfolio-items/cropped/eventlink_cropped.webp";
import ag_cropped from "./imgs/portfolio-items/cropped/ag_cropped.webp";
import sdi_cropped from "./imgs/portfolio-items/cropped/sdi_cropped.webp";
import dbs_cropped from "./imgs/portfolio-items/cropped/dbs_cropped.webp";

import sdb_full from "./imgs/portfolio-items/full/schooldatebooks_full.webp";
import sew_full from "./imgs/portfolio-items/full/stem_full.webp";
import eventlink_full from "./imgs/portfolio-items/full/eventlink_full.webp";
import ag_full from "./imgs/portfolio-items/full/agprinters_full.webp";
import sdi_full from "./imgs/portfolio-items/full/sdi_full.webp";
import dbs_full from "./imgs/portfolio-items/full/dbs_full.webp";

function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "School Datebooks",
      description:
        [<p key="11">School Datebooks is the flagship brand under the SDI Innovations banner. They design, print, sell, and deliver planning calendars for students of all ages (K - College). </p>,<p key="12">Key features:</p>,<ul key="13"><li>Custom form development using JavaScript, HTML, CSS, and PHP to deliver customer quote requests to School Datebook's custom CRM</li><li>SendGrid API integration to handle all website generated emails</li><li>Product finder app built with JavaScript, jQuery, HTML, and CSS to assist customers in finding the perfect planner for their specific needs.</li><li>Custom ordering configuration to apply complex business logic to the Extra Product Options & Add-Ons for WooCommerce plugin</li></ul>],
      link: "https://schooldatebooks.com",
      imgUrl: sdb_full,
      altDesc: "The School Datebooks website homepage",
      croppedUrl: sdb_cropped,
    },
    {
      id: 2,
      title: "STEM Education Works",
      description: [<p key="21">STEM Education Works designs and sells STEM education curriculum, as well as accompanying equipment, to schools of all grade levels. </p>, <p key="22">Key features:</p>,<ul key="23"><li>Custom form development using JavaScript, HTML, CSS, and PHP to deliver customer quote and contact requests to STEM Education Works' custom CRM</li><li>SendGrid API integration to handle all website generated emails</li><li>Ecommerce configuration for all product offerings in WooCommerce</li></ul>],
      link: "https://stemeducationworks.com",
      imgUrl: sew_full,
      altDesc: "The STEM Education Works website homepage",
      croppedUrl: sew_cropped,
    },
    {
      id: 3,
      title: "Eventlink",
      description: [<p key="31">Eventlink is top-tier event scheduling software for athletic departments and main offices around the country.</p>, <p key="32">Key features:</p>, <ul key="33"><li>Custom JavaScript and PHP login process using Eventlink's user API that allowed users to select which version of the application they wished to enter based on their user permissions, and also allowed for users to reset their passwords and recover their username</li><li>Custom contact and quote request forms using the Sendgrid API to generate emails to internal stakeholders</li></ul>],
      link: "https://eventlink.com",
      imgUrl: eventlink_full,
      altDesc: "The Eventlink website homepage",
      croppedUrl: eventlink_cropped,
    },
    {
      id: 4,
      title: "Ag Printers",
      description: [<p key="41">Ag Printers is a front runner in the agriculture industry for 100% compliant marketing and labelling.</p>,<p key="42">Key features:</p>,<ul key="43"><li>Custom form development for customer quote and contact requests using JavaScript, jQuery, HTML, and CSS</li><li>Custom edits of the Bookly plugin that allow the AG Printers team to schedule consultations with their customers. This includes CSS and jQuery customizations to meet their business needs.</li></ul>],
      link: "https://agprinters.com",
      imgUrl: ag_full,
      altDesc: "The Ag Printers website homepage",
      croppedUrl: ag_cropped,
    },
    {
      id: 5,
      title: "SDI Innovations",
      description: [<p key="51">SDI Innovations is the parent company of School Datebooks, Eventlink, STEM Education Works, and AG Printers. They utilize shared Marketing, Manufacturing, I.T. and Product Development to propel their brands to new heights</p>, <p key="52">Key features:</p>, <ul key="53"><li>Custom forms to manage job applications that are stored using PHP and MySQL Databases.</li><li>Custom edits (CSS and jQuery) to the Bookly plugin to allow SDI Innovations HR team to efficiently schedule job interviews.</li><li>General page building using HTML, CSS, and JavaScript</li></ul>],
      link: "https://sdiinnovations.com",
      imgUrl: sdi_full,
      altDesc: "The SDI Innovations website homepage",
      croppedUrl: sdi_cropped,
    },
    {
      id: 6,
      title: "Datebook Store",
      description: [<p key="61">Datebook Store is the ecommerce wing of School Datebooks. Where School Datebooks allows schools to order planners in bulk, Datebook Store allows individuals to purchase the same great planners in smaller quantities.</p>, <p key="62">Key features:</p>, <ul key="63"><li>General page building using HTML, CSS, and JavaScript.</li><li>Custom product configuration within WooCommerce</li></ul>],
      link: "https://datebookstore.com",
      imgUrl: dbs_full,
      altDesc: "The Datebook Store website homepage",
      croppedUrl: dbs_cropped,
    },
  ];

  return (
    <div className="wrapper">
      <Header />
      <Portfolio items={portfolioItems} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
