import React, { Suspense } from 'react'
import Fallback from '../Components/Fallback';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
// import Blogs from '../Pages/Blogs/index-old';
import BlogList from '../Pages/Blogs';
import Page1 from '../Pages/Services/InnerServices/Page1';
import Page2 from '../Pages/Services/InnerServices/Page2';
import Page3 from '../Pages/Services/InnerServices/Page3';

const AppRoutes = () => {

  return (

    <>
      <Suspense fallback={<Fallback />}>

        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/services'
            element={<Services />}
          />
          <Route path="/services/brand-identity"
            element={<Page1 />} />
          <Route path="/services/lean-agile"
            element={<Page2 />} />
          <Route path="/services/innovation"
            element={<Page3 />} />

          <Route
            path='/about'
            element={<About />}
          />

          <Route path="/blog"
            element={<BlogList />}>
            {/* <Route path=":blogId" element={<BlogList />} /> */}
          </Route>

          <Route
            path='/contact'
            element={<Contact />}
          />



        </Routes>

      </Suspense>

    </>
  )
}
export default AppRoutes