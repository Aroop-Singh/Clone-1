import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Carousel from "./Carousel"

function App() {
  return (
    <BrowserRouter>

      
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/Courses" element={<Courses />} />
          <Route path="/Test Series" element={<TestSeries />} />
          <Route path="/Classroom" element={<Classroom />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Study Materials" element={<StudyMaterial />} />
          <Route path="/Scolarships" element={<Scolarships />} />
          <Route path="/ALLENeStore" element={<ALLENeStore />} />
          <Route path="/More" element={<More />} />
          <Route path="/Call" element={<Call />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Tallentex" element={<Tallentex />} />



          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return <div className='layout' style={{height: "100vh"}}>
    <div className='header'>

      <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/627px-ALLEN_Career_Institute_logo.svg.png?20230622120943" alt="Allen logo" style={{width: 91, height: 26, }} /></Link>

      <Link to="/Courses"><div style={{paddingLeft: 20}}>Courses </div></Link>
      <Link to="/Test Series"><div style={{paddingLeft: 20}}>Test Series</div></Link>
      <Link to="/Classroom"><div style={{paddingLeft: 20}}>Classroom</div></Link>
      <Link to="/Results"><div style={{paddingLeft: 20}}>Results</div></Link>
      <Link to="/Study Materials"><div style={{paddingLeft: 20}}>Study Materials</div></Link>
      <Link to="/Scolarships"><div style={{paddingLeft: 20}}>Scolarships</div></Link>
      <Link to="/ALLENeStore"><div style={{paddingLeft: 20}}>ALLEN  E-Store</div></Link>
      <Link to="/More"><div style={{paddingLeft: 20}}>More</div></Link>

      <Link to="/Call"><button id="callButton">📞</button></Link>
      <Link to="/Login"><button id="LoginButton">Login</button></Link>


    </div>

    <Link to="tallentex">
    <div className='banner' style={{backgroundColor: '#1369c4', display: 'flex'}}>
      <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1742470224/xrn4kdjcvqwryagi0q0r.png?_upload_ref=ic_img_tool&__ar__=1.00" alt="announcement" style={{width: 50, height: 50, marginLeft: 10, marginRight: 10}}/>
      <div style={{paddingRight: 640}}>
        <span style={{display: 'flex'}}>
          <h5 style={{color: 'yellow', paddingTop: 7, paddingBottom: 5}}>INDIA'S BIGGEST EXAM IS LIVE</h5> 
          <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733741024/lpbkzdbke54wl6cevwjo.svg?_upload_ref=ic_img_tool&__ar__=1.06" alt="announcement" style={{width: 22, height: 22, paddingTop: 0}}/> 
        </span>
         <p style={{fontWeight: 'bold', color: 'white'}}> If your child is in Class 5-10, register for TALLENTEX now ›</p>

      </div>



      <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733810195/zey5b8tscj7ribv0xga4.svg?_upload_ref=ic_img_tool&__ar__=1.04" alt="announcement" style={{width: 32, height: 32, marginLeft: 0, marginTop: 10}}/>

    </div>
    </Link>


      <div className='body'>
        <Outlet />
      </div>
      
    <div className='footer'>
      footer
      Footer | Contact Us
    </div>
    
  </div>
}

function ErrorPage() {
  return <div>Gandmare</div>
}

function Landing() {
  return <div>
    Welcome to Allen
    <Carousel />
  </div>
}

function Courses() {
  return <div>Displaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses hereDisplaying courses here</div>
}

function TestSeries() {
  return <div>Displaying TestSeries here</div>
}

function Classroom() {
  return <div>Displaying Classroom here</div>
}

function Results() {
  return <div>Displaying Results here</div>
}

function StudyMaterial() {
  return <div>Displaying StudyMaterials here</div>
}

function Scolarships() {
  return <div>Displaying Scolarships  here</div>
}

function ALLENeStore() {
  return <div>Displaying ALLEN E-Store here</div>
}

function More() {
  return <div>Displaying More stuffs here</div>
}

function Call() {
  return <div>Hello apka kya naam h? Mera kya kaam h</div>
}

function Login() {
  return <div>bsdk login kyu krna h tereko</div>
}

function Tallentex() {
  return <div>Bachpan ka mkb kr do aur kya</div>
}

export default App
