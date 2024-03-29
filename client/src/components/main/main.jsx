// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
function Main() {
  const [logos, setLogos] = useState([]);

  // useEffect(() => {

  //     await updateData(id, state, setState);
  //     const interval = setInterval(async () => {
  //       if (logos[0].generating) {
  //         // await updateData(id, state, setState); // API call
  //       }
  //     }, 60000);

  //     //update function would be like:
  //     function updateData(id, state, setState) {
  //       ...
  //       return API.get("/url");
  //     }
  //   }, []);
  const [brand, setBrand] = useState("");
  const [theme, setTheme] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      theme: e.target[0].value,
      brand: e.target[1].value,
    };
    console.log(data);
    // setData((d) => ({
    //     ...d,
    //     theme: e.target[0].value,
    //     brand: e.target[1].value
    //   }));

    const dataGot = await fetch(`http://172.16.50.58:5000/api/v1/new`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer bf73b1bc9bbb422dbb1dbe0639e334b0`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(dataGot);
    console.log("dataGot");
    const logo = await dataGot.json();
    setLogos((l) => [...l, logo]);
    console.log(logo);
    console.log(logos);
    //    const {dataGot} =
    //    axios.post("http://172.16.50.58:5000/api/v1/new", data,  {
    //         headers: {
    //           Authorization: `Bearer bf73b1bc9bbb422dbb1dbe0639e334b0`,
    //           "Content-Type": "multipart/form-data",
    //         },
    //       })
    //       .then((response) => {
    //         console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //       console.log(dataGot);
  }

  function handleTheme(e) {
    setTheme(e.target.value);
  }
  function handleBrand(e) {
    setBrand(e.target.value);
  }
  return (
    <>
      <section style={{width: '20rem', height:'10vh'}} className="">
        <form onSubmit={handleSubmit} className="">
          <div className="mb-3">
            <label htmlFor="theme" className="form-label">
              Logo theme
            </label>
            <input
              onChange={handleTheme}
              type="text"
              className="form-control w-25"
              id="theme"
              aria-describedby="emailHelp"
              value={theme}
            />
            {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Logo brand
            </label>
            <input
              type="text"
              onChange={handleBrand}
              className="form-control w-25"
              id="brand"
              value={brand}
            />
          </div>
          {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Main;
