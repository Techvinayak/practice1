// import { useState } from "react";
import { useState } from 'react';
import './home.css';

export default function Homepage() {
   const [nme, setNme] = useState("");
   const [age, setAge] = useState("");
   const [showNmeError, setShowNmeError] = useState(false);
   const [showAgeError, setShowAgeError] = useState(false);
   const [submitted, setSubmitted] = useState("");

   const validate = () => {
      const ageNum = parseInt(age);

      if (nme.trim() === "") setShowNmeError(true);
      else setShowNmeError(false);

      if (isNaN(ageNum) || ageNum < 10) setShowAgeError(true);
      else setShowAgeError(false);

      return nme.trim() !== "" && !isNaN(ageNum) && ageNum >= 10;
   };

   const handleSubmit = () => {
      if (validate()) {
         setSubmitted(`Name: ${nme}, Age: ${age}`);
         setNme("");
         setAge("");
      } else {
         setSubmitted("");
      }
   };

   return (
      <>
         <label>Enter name: </label>
         <input type="text" value={nme} onChange={(e) => setNme(e.target.value)} />
         <br />
         <p className={`error ${showNmeError ? "visible" : ""}`}>Please fill name field</p>
         <br />

         <label>Enter age: </label>
         <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
         <br />
         <p className={`error ${showAgeError ? "visible" : ""}`}>Error: Age should be at least 10</p>
         <br />

         <button type="button" onClick={handleSubmit}>Submit</button> 

         <br /><br />

         <p>Submitted: {submitted}</p>
      </>
   );
}



  