// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Swipper() {
//   const [previous, setPreviousSwiper] = useState<any>(null);
//   const [next, setNext] = useState<any>(null);
//   const pathname = usePathname();
//   if (previous === false) {
//     console.log("asvgahbjk");
//   }

//   const swiper = useSwiper();
//   // Define a type for the object
//   type Fruit = {
//     name: string;
//     color: string;
//   };

//   // Create array with 1000 slides
//   const slides = Array.from({ length: 1000 }).map(
//     (el, index) => `Slide ${index + 1}`
//   );

//   // Array of objects (Fruit)
//   const fruits: Fruit[] = [
//     { name: "Apple", color: "Red" },
//     { name: "Banana", color: "Yellow" },
//     { name: "Orange", color: "Orange" },
//     { name: "Apple", color: "Red" },
//     { name: "Banana", color: "Yellow" },
//     { name: "Orange", color: "Orange" },
//     { name: "Apple", color: "Red" },
//     { name: "Banana", color: "Yellow" },
//     { name: "Orange", color: "Orange" },
//   ];

//   const [mySwiper, setMySwiper] = useState<any>({});

//   return (
//     <>
//       <h2 className={pathname === "/" ? "show" : "hide"}>about</h2>
//       <h2>about</h2>
//       <Swiper
//         spaceBetween={36}
//         slidesPerView={5}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//         onInit={(ev) => {
//           setMySwiper(ev);
//         }}
//       >
//         {fruits.map((fruit, index) => (
//           <SwiperSlide
//             style={{
//               background: "aqua",
//               height: "400px",
//             }}
//             key={index}
//           >
//             {fruit.name} - {fruit.color}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {fruits.length === 0 ? (
//         <button
//           onClick={() => {
//             console.log(mySwiper);
//             mySwiper.slidePrev();
//           }}
//         >
//           previous Condition
//         </button>
//       ) : null}

//       <button
//         disabled={previous === false && next === false ? false : true}
//         onClick={() => {
//           setPreviousSwiper(mySwiper.slidePrev());
//           mySwiper.slidePrev();
//         }}
//       >
//         previous Disable
//       </button>

//       <button
//         onClick={() => {
//           mySwiper.slidePrev();
//         }}
//       >
//         previous
//       </button>

//       <div>
//         <br />
//         <br />
//         <br />

//         <button
//           onClick={() => {
//             mySwiper.slideNext();
//           }}
//         >
//           next Slide
//         </button>

//         <button
//           disabled={next === false ? false : true}
//           onClick={() => {
//             console.log(mySwiper.slideNext());
//             setNext(mySwiper.slideNext());
//           }}
//         >
//           next Slide condition
//         </button>
//       </div>
//     </>
//   );
// }

// Import Swiper React components
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// export default function Swipper() {
//   const [previousDisabled, setPreviousDisabled] = useState(true);
//   const [nextDisabled, setNextDisabled] = useState(false);
//   const pathname = usePathname();
//   const [mySwiper, setMySwiper] = useState<any>({});

//   const swiper = useSwiper();

//   // Define a type for the object
//   type Fruit = {
//     name: string;
//     color: string;
//   };

//   // Create array with 1000 slides
//   const slides = Array.from({ length: 1000 }).map(
//     (el, index) => `Slide ${index + 1}`
//   );

//   // Array of objects (Fruit)
//   const fruits: Fruit[] = [
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Orange', color: 'Orange' },
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Orange', color: 'Orange' },
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Orange', color: 'Orange' },
//   ];

//   return (
//     <>
//       <h2 className={pathname === '/' ? 'show' : 'hide'}>about</h2>
//       <h2>about</h2>
//       <Swiper
//         spaceBetween={36}
//         slidesPerView={5}
//         onSlideChange={(swiper) => {
//           setPreviousDisabled(swiper.isBeginning);
//           setNextDisabled(swiper.isEnd);
//           console.log('slide change');
//         }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onInit={(ev) => {
//           setMySwiper(ev);
//           setPreviousDisabled(ev.isBeginning);
//           setNextDisabled(ev.isEnd);
//         }}
//       >
//         {fruits.map((fruit, index) => (
//           <SwiperSlide
//             style={{
//               background: 'aqua',
//               height: '400px',
//             }}
//             key={index}
//           >
//             {fruit.name} - {fruit.color}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <button
//         disabled={previousDisabled}
//         onClick={() => {
//           mySwiper.slidePrev();
//         }}
//       >
//         previous
//       </button>

//       <button
//         disabled={nextDisabled}
//         onClick={() => {
//           mySwiper.slideNext();
//         }}
//       >
//         next Slide
//       </button>
//     </>
//   );
// }

// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles

// export default function Swipper() {
//   const [previousDisabled, setPreviousDisabled] = useState(true);
//   const [nextDisabled, setNextDisabled] = useState(false);
//   const pathname = usePathname();
//   const [mySwiper, setMySwiper] = useState<any>({});

//   const swiper = useSwiper();

//   // Define a type for the object
//   type Fruit = {
//     name: string;
//     color: string;
//   };

//   // Create array with 1000 slides
//   const slides = Array.from({ length: 1000 }).map(
//     (el, index) => `Slide ${index + 1}`
//   );

//   // Array of objects (Fruit)
//   const fruits: Fruit[] = [
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Orange', color: 'Orange' },
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Orange', color: 'Orange' },
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Orange', color: 'Orange' },
//   ];

//   return (
//     <>
//       <h2 className={pathname === '/' ? 'show' : 'hide'}>about</h2>
//       <h2>about</h2>
//       <Swiper
//         spaceBetween={36}
//         slidesPerView={5}
//         breakpoints={{
//           450: {
//             slidesPerView: 2,
//             spaceBetween: 9.82,
//           },
//           550: {
//             slidesPerView: 3,
//             spaceBetween: 9.82,
//           },
//           1300: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//           1399: {
//             slidesPerView: 5,
//             spaceBetween: 35,
//           },
//         }}
//         onSlideChange={(swiper) => {
//           setPreviousDisabled(swiper.isBeginning || slides.length <= 5);
//           setNextDisabled(swiper.isEnd || slides.length <= 5);
//         }}
//         onSwiper={(swiper) => setMySwiper(swiper)}
//         onInit={(ev) => {
//           setMySwiper(ev);
//           setPreviousDisabled(ev.isBeginning || slides.length <= 5);
//           setNextDisabled(ev.isEnd || slides.length <= 5);
//         }}
//       >
//         {fruits.map((fruit, index) => (
//           <SwiperSlide
//             style={{
//               background: 'aqua',
//               height: '400px',
//             }}
//             key={index}
//           >
//             {fruit.name} - {fruit.color}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <button
//         disabled={previousDisabled}
//         onClick={() => {
//           mySwiper.slidePrev();
//         }}
//       >
//         previous
//       </button>

//       <button
//         disabled={nextDisabled}
//         onClick={() => {
//           mySwiper.slideNext();
//         }}
//       >
//         next Slide
//       </button>
//     </>
//   );
// }

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export default function Swipper() {
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const pathname = usePathname();
  const [mySwiper, setMySwiper] = useState<any>({});

  const swiper = useSwiper();

  // Define a type for the object
  type Fruit = {
    name: string;
    color: string;
  };

  // Array of objects (Fruit)
  const fruits: Fruit[] = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Orange', color: 'Orange' },
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Orange', color: 'Orange' },
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Orange', color: 'Orange' },
  ];

  return (
    <>
      <h2 className={pathname === '/' ? 'show' : 'hide'}>about</h2>
      <h2>about</h2>
      <Swiper
        spaceBetween={35}
        slidesPerView={5}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 9.82,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 9.82,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1399: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
        }}
        onSlideChange={(swiper) => {
          setPreviousDisabled(swiper.isBeginning || swiper.slides.length <= 1);
          setNextDisabled(swiper.isEnd || swiper.slides.length <= 1);
        }}
        onSwiper={(swiper) => setMySwiper(swiper)}
        onInit={(ev) => {
          setMySwiper(ev);
          setPreviousDisabled(ev.isBeginning || ev.slides.length <= 1);
          setNextDisabled(ev.isEnd || ev.slides.length <= 1);
        }}
      >
        {fruits.map((fruit, index) => (
          <SwiperSlide
            style={{
              background: 'aqua',
              height: '400px',
            }}
            key={index}
          >
            {fruit.name} - {fruit.color}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        disabled={previousDisabled}
        onClick={() => {
          mySwiper.slidePrev();
        }}
      >
        previous
      </button>

      <button
        disabled={nextDisabled}
        onClick={() => {
          mySwiper.slideNext();
        }}
      >
        next Slide
      </button>
    </>
  );
}
