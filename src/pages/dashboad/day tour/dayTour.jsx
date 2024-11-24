import React from 'react';


import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import AddDayTour from './add day tour/addDayTour';
import DaytourEdite from './edite day tour/daytourEdite';

export default function Place() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD DAY TOUR"
        component1 = {<AddDayTour/>}
        component2BtnName = "UPDATE DAY TOUR"
        component2 = {<DaytourEdite/>}
        />
    </div>

  )




}

