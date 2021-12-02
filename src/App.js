import './App.css';
import Header from './MyComponents/Header';
import {Templates} from './MyComponents/Templates';
import {Footer} from './MyComponents/Footer';
import AddTemplate from './MyComponents/AddTemplate';

function App() {

  let templates = [
    {
      sno: 1,
      img: "https://image.shutterstock.com/image-vector/vector-medical-banner-pharmacy-template-600w-2043622106.jpg",
      title: "Diwali template",
      des: "Completion of an emergency contraception training course approved by the American Council of Pharmaceutical Education (ACPE), curriculum-based programs from an ACPE-accredited college of pharmacy, applicable state or local health department programs, or programs recognized by the board of pharmacy upon hire"
    },
    {
      sno: 2,
      img: "https://image.shutterstock.com/image-vector/healthcare-medical-bottles-set-medicine-600w-1212203548.jpg",
      title: "December Template ",
      des: "Valid state pharmacist license (or must meet education requirement(s) for state licensure)"
    },
    {
      sno: 3,
      img: "https://image.shutterstock.com/image-vector/healthcare-medical-bottles-set-medicine-600w-1212203554.jpg",
      title: "Discount Template",
      des: "The best job descriptions provide two or three sentences that will introduce the prospective pharmacists to your company, culture, and working environment. This is where you can sell your facility to job seekers and set yourself apart from competing job listings."
    },
    {
      sno: 4,
      img: "https://media.istockphoto.com/vectors/pharmacy-medications-research-website-banner-template-vector-id1155869774",
      title: "template two",
      des: "Serves patients by preparing medications, giving pharmacological information to multidisciplinary health care team, and monitoring patient drug therapies."
    },
    {
      sno: 5,
      img: "https://media.istockphoto.com/vectors/pharmaceutical-research-web-banner-template-vector-id1155869446?s=612x612",
      title: "template two",
      des: "Develops hospital staff’s pharmacological knowledge by participating in clinical programs and training pharmacy staff, students, interns, externs, residents, and health care professionals."
    },
    {
      sno: 6,
      img: "https://image.shutterstock.com/image-vector/healthcare-medical-bottles-set-medicine-600w-1212203554.jpg",
      title: "template two",
      des: "Develops hospital staff’s pharmacological knowledge by participating in clinical programs and training pharmacy staff, students, interns, externs, residents, and health care professionals."
    },
    {
      sno: 7,
      img: "https://media.istockphoto.com/vectors/pharmaceutical-research-web-banner-template-vector-id1155869446?s=612x612",
      title: "template two",
      des: "Develops hospital staff’s pharmacological knowledge by participating in clinical programs and training pharmacy staff, students, interns, externs, residents, and health care professionals."
    }
  ]
  return (
    <div className="App">
      <Header title="My Templates" searchBar={true}/>
      {/* <AddTemplate/> */}
      <Templates templates = {templates}/>
      <Footer/>
    </div>
  );
}

export default App;
