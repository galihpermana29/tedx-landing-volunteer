import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SectionOne = lazy(() =>
  import('@/pages/section-one').then((module) => ({
    default: module.SectionOne,
  }))
);

const SectionTwo = lazy(() =>
  import('@/pages/section-two').then((module) => ({
    default: module.SectionTwo,
  }))
);
const SectionThree = lazy(() =>
  import('@/pages/section-three').then((module) => ({
    default: module.SectionThree,
  }))
);
const SectionFour = lazy(() =>
  import('@/pages/section-four').then((module) => ({
    default: module.SectionFour,
  }))
);

const SectionFive = lazy(() =>
  import('@/pages/section-five').then((module) => ({
    default: module.SectionFive,
  }))
);
const SectionSix = lazy(() =>
  import('@/pages/section-six').then((module) => ({
    default: module.SectionSix,
  }))
);

const Navbar = lazy(() =>
  import('@/components/navbar').then((module) => ({
    default: module.Navbar,
  }))
);

const Footer = lazy(() =>
  import('@/components/footer').then((module) => ({
    default: module.Footer,
  }))
);
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
