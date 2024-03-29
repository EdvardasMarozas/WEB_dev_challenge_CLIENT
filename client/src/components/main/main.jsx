import { useState, useEffect } from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
function Main() {
  let auth = false;
  const token = localStorage.getItem('token')
  if(token === 'bf73b1bc9bbb422dbb1dbe0639e334b0'){
    auth = true
  } 
  const [brand, setBrand] = useState("");
  const [theme, setTheme] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      theme: e.target[0].value,
      brand: e.target[1].value,
    };
    const dataGot = await fetch(`http://172.16.50.58:5000/api/v1/new`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer bf73b1bc9bbb422dbb1dbe0639e334b0`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const logo = await dataGot.json();
    console.log(logo);
  }
  function handleTheme(e) {
    setTheme(e.target.value);
  }
  function handleBrand(e) {
    setBrand(e.target.value);
  }
  return (
    <>{(auth) ?
      <><Header /><section>
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
              value={theme} />
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
              value={brand} />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </section><Footer /></>
      : 'UNAUTHORIZED'}
    </>
  );
}

export default Main;
