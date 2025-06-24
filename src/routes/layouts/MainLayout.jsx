import React from 'react'
import LeftComp from '../../components/leftComp/LeftComp'
import RightCompTop from '../../components/rightCompTop/RightCompTop'
import RightCompBottom from '../../components/rightCompBottom/RightCompBottom'
import './MainLayout.css'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
      <div className='app'>
        <div className='lc'>
          <LeftComp />
        </div>
        <div className='rc'>
          <div className='right-comp-container'>
            <RightCompTop />
            <Outlet />
            {/* <RightCompBottom /> */}
          </div>
        </div>
      </div>
  )
}

export default MainLayout