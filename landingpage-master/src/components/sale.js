import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateTimeField from 'react-bootstrap-datetimepicker';
export class Sale extends React.Component{

   render(){
   return(
<div>

   <div className="row">
       <div className= "col-md-2">
      <DateTimeField />
      <dropdown/>
       </div>
       </div>

  </div>
   );

   }

   }
   export default Sale;