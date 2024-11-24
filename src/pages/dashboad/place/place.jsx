import React from 'react';

import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import Add_place from './add_place/add_place';
import EditePlace from './edite place/editePlace';

export default function Place() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD PLACE"
        component1 = {<Add_place/>}
        component2BtnName = "UPDATE PLACE"
        component2 = {<EditePlace/>}
        />
    </div>

  )




}


