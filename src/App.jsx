import "./App.css";
import Company from "./components/Company";
import ExamplesWork from "./components/ExamplesWorks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Reviews from "./components/Reviews";
import Service from "./components/Service";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <Company />
      <Service />
      <ExamplesWork />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
