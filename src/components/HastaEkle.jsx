import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const HastaEkle = ({
  liste,
  setListe,
  selected,
  setSelected,
  doktor,
  deleteListeCard,
}) => {
  const [hasta, setHasta] = useState({
    id: "",
    text: "",
    day: "",
    bittiMi: false,
    doktor: `${selected[0].doctorName}`,
  });

  const handleInputChange = (e) => {
    setHasta({ ...hasta, text: e.target.value });
  };

  const handleDateChange = (e) => {
    setHasta({ ...hasta, day: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setListe([...liste, hasta]);
  };
  console.log(hasta);

  return (
    <div className="filter-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hastaName">Patient Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="hastaName"
            placeholder="Please write your name"
          />
          <label htmlFor="day-time">Day & Time</label>
          <input
            onChange={handleDateChange}
            type="datetime-local"
            className="form-control"
            defaultValue={`${new Date().toISOString().slice(0, 16)}`}
          />

          <button className="btn" type="submit">
            Save {selected[0].doctorName} Appointment
          </button>
        </div>
      </form>

      <div >
        {doktor ||
          liste
            .filter((item) => item.doktor === selected[0].doctorName)
            .map((x) => (
              <div style={{maxWidth:"23rem"}}
                onDoubleClick={() =>
                  setListe(
                    liste.map((a) =>
                      a.id === x.id ? { ...a, bittiMi: !a.bittiMi } : a
                    )
                  )
                }
                key={x.id}
                className={x.bittiMi ? "liste-card2" : "liste-card1"}
              >
                <div>
                  <h3>
                    <BsPerson
                      style={{
                        color: "purple",
                        fontSize: "1.2rem",
                        marginRight: "1rem",
                      }}
                    />
                    {x.text}
                  </h3>
                  <h5>
                    <BsCalendarDate
                      style={{
                        color: "purple",
                        fontSize: "1.2rem",
                        marginRight: "1rem",
                      }}
                    />
                    {x.day}
                  </h5>
                  <h4>
                    <FaUserDoctor
                      style={{
                        color: "purple",
                        fontSize: "1.2rem",
                        marginRight: "1rem",
                      }}
                    />{" "}
                    {x.doktor}
                  </h4>
                </div>

                <div>
                  <RiDeleteBinLine
                    onClick={() => deleteListeCard(x.id)}
                    style={{ color: "red", fontSize: "1.2rem" }}
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HastaEkle;
