import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ReactMarkdown from "react-markdown";
import "./App.css";
import data from "./data";

const mainColor = "rgb(0, 117, 167)";

const SectionPlain = ({ title, children }) => (
  <section>
    {title && <h2 style={{ fontSize: "14pt", margin: 0 }}>{title}</h2>}
    <p style={{ fontSize: "9pt", margin: "2mm 0" }}>{children}</p>
  </section>
);

const SectionHeader = ({ title }) => (
  <h2
    style={{
      borderTop: "1px solid lightgrey",
      borderBottom: "1px solid lightgrey",
      fontSize: "14pt",
      margin: 0,
      color: mainColor,
    }}
  >
    {title}
  </h2>
);

const List = ({ items }) => (
  <ul style={{ margin: 0, fontSize: "9pt" }}>
    {items.map((dot, idx) => (
      <li key={idx}>
        <ReactMarkdown>{dot}</ReactMarkdown>
      </li>
    ))}
  </ul>
);

const SectionWorkItem = ({ workItem }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1mm",
      padding: "2mm 0",
    }}
  >
    <h3 style={{ margin: 0, fontSize: "13pt" }}>{workItem.title}</h3>
    {workItem.company && workItem.dates && (
      <h4
        style={{
          margin: "0",
          fontSize: "11pt",
          fontStyle: "italic",
          fontWeight: "normal",
        }}
      >
        {`${workItem.company} | ${workItem.dates}`}
      </h4>
    )}
    {workItem.dots && <List items={workItem.dots} />}
  </div>
);

const SectionWork = ({ title, items }) => (
  <section>
    <SectionHeader title={title} />
    {items.map((item) => (
      <SectionWorkItem workItem={item} />
    ))}
  </section>
);

const SectionSkills = ({ items }) => (
  <section
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1mm",
      padding: "2mm 0",
    }}
  >
    <SectionHeader title="Technical Skills" />
    <List items={items} />
  </section>
);

const SideHeader = ({ title }) => (
  <h3
    style={{
      background: "red",
      margin: "3mm -5mm",
      padding: "2mm 5mm",
      background: "#0003",
    }}
  >
    {title}
  </h3>
);

const InfoRow = ({ title, value, valueSize }) => (
  <div>
    <strong style={{ fontSize: "11pt" }}>{title}</strong>
    <div style={{ fontSize: valueSize ?? "11pt" }}>{value}</div>
  </div>
);

const SideList = ({ items }) => (
  <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          fontSize: "12pt",
          background: mainColor,
          color: "white",
          width: "55mm",
          padding: "5mm",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "28pt", margin: 0 }}>Krzysztof Pniak</h1>
        <h2 style={{ fontSize: "14pt" }}>Senior Developer</h2>
        <img src="/profile.png" style={{ width: "100%" }} />
        <SideHeader title="Personal Info" />
        <div style={{ display: "flex", flexDirection: "column", gap: "2mm" }}>
          <InfoRow title="Email" value="krzysztof.pniak@gmail.com" />
          <InfoRow title="Phone" value="+48 506 803 802" />
          <InfoRow
            title="Linkedin"
            value="https://www.linkedin.com/in/krzysztofpniak"
            valueSize="8pt"
          />
          <InfoRow
            title="Github"
            value="https://github.com/krzysztofpniak"
            valueSize="8pt"
          />
        </div>
        <SideHeader title="Languages" />
        <SideList items={data.languages} />
        <SideHeader title="Hobbies" />
        <SideList items={data.hobbies} />
      </div>
      <div
        style={{
          background: "white",
          flex: 1,
          padding: "5mm",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SectionPlain>{data.header}</SectionPlain>
        <SectionWork title="Work History" items={data.work} />
        <SectionSkills items={data.skills} />
        <SectionWork title="Education" items={data.education} />
        <div style={{ flex: 1 }} />
        <footer style={{ fontSize: "6.5pt", fontStretch: "extra-condensed" }}>
          I hereby consent to my personal data being processed by Onsights for
          the purpose of considering my application for the advertised vacancy.
        </footer>
      </div>
    </>
  );
}

export default App;
