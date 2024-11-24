import React from 'react';

import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import AddTourCategory from '../add Tour Catergory/addTourCategory';
import TcEdite from '../edite tour category/tcEdite';

export default function TourCategory() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD TOUR CATEGORY"
        component1 = {<AddTourCategory/>}
        component2BtnName = "UPDATE TOUR CATEGORY"
        component2 = {<TcEdite/>}
        />
    </div>

  )




}


