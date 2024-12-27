import React from 'react';


import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import AddPopularDestinations from './add popular destinations/addPopularDestinations';
import EditPopularDestinations  from './edit popular destinations/editPopularDestinations';

export default function Place() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD POPULAR PLACE"
        component1 = {<AddPopularDestinations/>}
        component2BtnName = "UPDATE POPULAR PLACE"
        component2 = {<EditPopularDestinations/>}
        />
    </div>

  )




}