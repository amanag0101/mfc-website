import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./event.module.css";

export const Event = () => {
  const slides = [
    "slide-image@2x.png",
    "rectangle-3014@2x.png",
    "rectangle-36@2x.png",
  ];

  const [year, setYear] = useState("2023");
  const [slideIndex, setSlideIndex] = useState(0);
  const slideContent = [
    {
      heading: "Event 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum tempore consequuntur culpa asperiores error non eligendi nesciunt cum, quasi earum, harum porro enim. Ea exercitationem beatae corporis nostrum sint.",
    },
    {
      heading: "Event 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum tempore consequuntur culpa asperiores error non eligendi nesciunt cum, quasi earum, harum porro enim. Ea exercitationem beatae corporis nostrum sint.",
    },
    {
      heading: "Event 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum tempore consequuntur culpa asperiores error non eligendi nesciunt cum, quasi earum, harum porro enim. Ea exercitationem beatae corporis nostrum sint.",
    }
  ];

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) setSlideIndex(slides.length - 1);
    else setSlideIndex(slideIndex - 1);
  };

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className={styles.events}>
      <h1 className={styles.heading}>Events</h1>

      <div className={styles.about}>
        <p>
          MFC VIT Boasts A Wide Array Of Successful Events Conducted Throughout
        </p>
        <p>The Year Including Speaker Sessions With Renowned Technocrats,</p>
        <p>Competitive Coding Events, And Many More.</p>
      </div>

      <div className={styles.year_select}>
        <FormControl>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            size="small"
            className="bg-orange"
            labelId="year-select-label"
            id="year-select"
            value={year}
            onChange={handleChange}
          >
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.carousel}>
        {/* <p className={styles.slide_count}>{slideIndex + 1} / {slides.length}</p> */}
        <div className={styles.content}>
          <p className={styles.prev_slide} onClick={prevSlide}>
            {"<"}
          </p>
          <img className={styles.col_1} src={slides[slideIndex + 0]} />
          <div className={styles.col_2}>
            <h1>{slideContent[slideIndex].heading}</h1>
            <p>
              {slideContent[slideIndex].description}
            </p>
          </div>
          <p className={styles.next_slide} onClick={nextSlide}>
            {">"}
          </p>
        </div>
        <Button className={styles.register}>Register</Button>
      </div>
    </div>
  );
};
