import { React, useState } from "react";
import { Button } from "@mui/material";
import './App.css';

export default function DisplayImg() {
  const [storeFile, setStoreFile] = useState('')
  const [storeImg, setStoreImg] = useState('')
  const [view, setView] = useState(false)

  const uploadFile = (e) => {
    setStoreFile(e.target.files[0])
  }
  const uploadImg = (e) => {
    setStoreImg(e.target.files[0])
  }
  const viewImg = (e) => {
    e.preventDefault()
    setView(true)
    console.log('uploadedFile ', storeFile)
  }
  const setImg = (e) => {
    e.preventDefault()
    document.body.style.backgroundImage = `url(${URL.createObjectURL(storeImg)})`
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  return (
    <div>
      <center>
        <form encType='multipart/form-data' className='form'>
          <p id='txt'>Browse and upload a file</p>
          <input type='file' accept='.jpeg' name='file' onChange={uploadFile} />
          <Button type='submit' variant='contained' onClick={viewImg}>Submit</Button>
          <br /> <br />

          <p>Set background image</p>
          <input type='file' accept='.jpeg' name='img' onChange={uploadImg} />
          <Button type='submit' variant='contained' onClick={setImg}>Set Background</Button>
        </form>

        {
          (view) ?
            <img
              style={{ width: "50%" }}
              src={storeFile === "" ? "" : URL.createObjectURL(storeFile)} alt='no preview'
            /> : <> </>
        }

      </center>
    </div>
  )
}