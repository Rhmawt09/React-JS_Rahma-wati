import './App.css';
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';

function App() {
  const baseData = {
    nama:"",
    email:"",
    noHandphone:0,
    pendidikan:"",
    kelas:"",
    harapan:""
  }
  const baseError = {
    nama:"",
    email:"",
    noHandphone:0
  }
  const suratKesungguhan = useRef('')
  const [data,setData] = useState(baseData)
  const [error,setError] = useState(baseError)
  const regex = /^[A-Za-z ]*$/
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const noHpRegex = /^[0-9+]{9,}$/

  const handleInput = (e) =>{
    const name = e.target.name
    const value = e.target.value

    if (name==='nama'){
      if(regex.test(value)) {
        setError({
          ...baseError
        })
      }else{
        setError({
          ...baseError,
          nama:'Nama harus berupa huruf'
        })
      }
    }

    if (name==='email'){
      if(emailregex.test(value)) {
        setError({
          ...baseError
        })
      }else{
        setError({
          ...baseError,
          email:'Format Email Salah'
        })
      }
    }

    if (name==='noHandphone'){
      if(noHpRegex.test(value)) {
        setError({
          ...baseError
        })
      }else{
        setError({
          ...baseError,
          noHandphone:'Format Nomor HP Salah'
        })
      }
    }

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    if(error.nama !== ''&&error.email!=='' && error.noHandphone!==0){
      alert('Data pendaftar tidak sesuai')
    }else{
      alert('Data pendaftar '+data.nama+' berhasil diterima')
    }
    resetData()
    event.preventDefault(event)
  }
  const resetData = () =>{
    setData(baseData)
    setError(baseError)
  }

  return (
    <div>
      <h1 className="title">Pendaftaran Peserta Coding Bootcamp</h1>
      <div className='container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Lengkap:</Form.Label>
          <Form.Control name="nama" onChange={handleInput} value={data.nama} required type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control name="email" onChange={handleInput} value={data.email} required type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nomor Handphone:</Form.Label>
          <Form.Control min={9} name="noHandphone" onChange={handleInput} value={data.noHandphone} required type="number" placeholder="" />
        </Form.Group>
        <div className="mb-3">
          <Form.Check.Label>Latar Belakang Pendidikan:</Form.Check.Label><br/>
          <Form.Check
            inline
            label="IT"
            name="pendidikan"
            type="radio"
            value={data.pendidikan}
            id={`inline-radio-1`}
            required
          />
          <Form.Check
            inline
            label="Non IT"
            name="pendidikan"
            type="radio"
            value={data.pendidikan}
            id={`inline-radio-2`}
            required
          />
        </div>
        <div>
          <Form.Label>Kelas Coding yang Dipilih:</Form.Label>
          <Form.Select required aria-label="Default select example">
            <option selected disabled>Pilih Salah Satu Program</option>
            <option value={data.kelas} name="kelas">Coding Backend with Golang</option>
            <option value={data.kelas} name="kelas">Coding Frontend with ReactJS</option>
            <option value={data.kelas} name="kelas">Fullstack Developer</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label>Foto Surat Kesungguhan:</Form.Label>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control refs={suratKesungguhan} required type="file" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Harapan Untuk Coding Bootcamp ini:</Form.Label>
          <Form.Control onChange={handleInput} name="harapan" value={data.harapan} as="textarea" rows={3} />
        </Form.Group>
        {error.nama!=='' ? <span style={{color:'red'}}>{error.nama} <br/></span> : '' }
        {error.email!=='' ? <span style={{color:'red'}}>{error.email} <br/></span> : '' }
        {error.noHandphone!==0 ? <span style={{color:'red'}}>{error.noHandphone} <br/></span> : null }
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button variant="danger" onClick={resetData}>
          Reset
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default App;