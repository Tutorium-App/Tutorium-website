import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Faq() {
  return (
    <div className="faqMain">
      <h2>
        Frequently <br />
        <span className="highlight">Asked</span> <br />
        Questions
      </h2>
      <div className="faq_container">
        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            How do I earn from Tutorium?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              lineHeight: "1.5rem",
            }}
          >
            Join Tutorium as a tutor and upload useful tutorial services and
            videos. Choose your own prices and get paid anytime a student books
            your services or buys you videos.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            Is Tutorium free to use?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              lineHeight: "1.5rem",
            }}
          >
            Tutorium is absolutely free for both tutors and students. Our goal
            is to connect the right student to the right tutor without them
            paying to use the platform.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            Is Tutorium in all Universities?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              lineHeight: "1.5rem",
            }}
          >
            Just like big things, we want to start small. Tutorium is currently
            available just in UMaT, School of Railway and Infrastructure
            Development.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            How do students book a tutor?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              lineHeight: "1.5rem",
            }}
          >
            Students can browse through available tutors and services, select
            the ones that meet their needs, and book sessions or purchase videos
            directly through the platform.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            How do I become a tutor on Tutorium?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              lineHeight: "1.5rem",
            }}
          >
            Download the Tutorium Tutor's App, sign up, and complete the tutor
            application process. Once approved, you can start creating and
            offering your tutorial services and videos.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            Can I get a refund for a tutorial service?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              lineHeight: "1.5rem",
            }}
          >
            <b>Yes</b>, you are eligible for a refund. Tutorium embraces
            integrity. To request a refund, just use our app and place a refund
            request, and we'll process it for you.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
