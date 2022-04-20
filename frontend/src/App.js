import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Services from "./Components/Services";
import BloodDonationForm from "./Components/BloodDonationForm";
import PlasmaDonationForm from "./Components/PlasmaDonationFrom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Oxygen from "./Components/Oxygen";
import Blood from "./Components/Blood";
import BloodRequestForm from "./Components/BloodRequestForm";
import Plasma from "./Components/Plasma";
import PlasmaRequestForm from "./Components/PlasmaRequestForm";
import Medicine from "./Components/medicine";
import Doctor from "./Components/Doctor";
import BedsRequest from "./Components/Beds";
import AnimalCare from "./Components/AnimalCare";
import VaccinationCenter from "./Components/VaccinationCenter";
import FreeFood from "./Components/FreeFoodService";
import VolunteerForm from "./Components/VolunteerForm";
import SignUp from "./Components/user/SignUp";
import SignIn from "./Components/user/SignIn";
import UserDashboard from "./Components/user/UserDashboard";
import ServicesPage from "./Components/ServicesPage";
import AdminDashboard from "./Components/user/AdminDashboard";
import SOxygenReq from "./Components/admin/OxygenReq";
import HospitalBedReqs from "./Components/admin/HospitalBeds";
import BlloDonReqs from "./Components/admin/BloodDonReq";
import BloodsReqs from "./Components/admin/BloodsReq";
import MedsReqs from "./Components/admin/MedReqs";
import DocsReqs from "./Components/admin/DoctorReq";
import AnimalsReqs from "./Components/admin/AnimalReqs";
import FoodsReqs from "./Components/admin/FoodReqs";
import VolunteersReq from "./Components/admin/VolunteerReqs";
import Gallery from "./Components/Gallery";
import NoMatch from "./Components/NoMatch";
import FreeLegal from "./Components/Legal";
import EduHelp from "./Components/Education";
import LegalReqs from "./Components/admin/LegalReqs";
import EduReqs from "./Components/admin/EduReqs";
import UploadImageForm from "./Components/admin/UploadImageForm";
import AddEventForm from "./Components/admin/AddEventForm";
import Events from "./Components/Event";
import UpdateEventForm from "./Components/admin/UpdateEventForm";
import UpdateImageForm from "./Components/admin/UpdateImageForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Services} />
        <Route path="/donate-blood" exact component={BloodDonationForm} />
        <Route path="/request-blood" exact component={BloodRequestForm} />
        <Route path="/donate-plasma" exact component={PlasmaDonationForm} />
        <Route path="/request-plasma" exact component={PlasmaRequestForm} />
        <Route path="/oxygen" exact component={Oxygen} />
        <Route path="/medicines" exact component={Medicine} />
        <Route path="/need-doctor" exact component={Doctor} />
        <Route path="/request-bed" exact component={BedsRequest} />
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/animal-care" exact component={AnimalCare} />
        <Route path="/free-food-service" exact component={FreeFood} />
        <Route path="/join-us" exact component={VolunteerForm} />
        <Route path="/blood" exact component={Blood} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/vaccination-center" component={VaccinationCenter} />
        <Route path="/plasma" component={Plasma} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/service" component={ServicesPage} />
        <Route path="/soxygenreq" component={SOxygenReq} />
        <Route path="/shosbedreqs" component={HospitalBedReqs} />
        <Route path="/sblooddonreqs" component={BlloDonReqs} />
        <Route path="/sbloodreqs" component={BloodsReqs} />
        <Route path="/smedreqs" component={MedsReqs} />
        <Route path="/sdocreqs" component={DocsReqs} />
        <Route path="/sanimalreqs" component={AnimalsReqs} />
        <Route path="/sfoodreqs" component={FoodsReqs} />
        <Route path="/slegalreqs" component={LegalReqs} />
        <Route path="/sedureqs" component={EduReqs} />
        <Route path="/legal-help" component={FreeLegal} />
        <Route path="/edu-help" component={EduHelp} />
        <Route path="/svolunteerreqs" component={VolunteersReq} />
        <Route path="/uploadimage" component={UploadImageForm} />
        <Route path="/addevent" component={AddEventForm} />
        <Route path="/updateevent" component={UpdateEventForm} />
        <Route path="/updateimage" component={UpdateImageForm} />
        <Route path="/events" component={Events} />
        <Route path="*" component={NoMatch} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
