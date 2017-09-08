import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import DateTimeField from 'react-bootstrap-datetimepicker';
export  class Home extends React.Component {

    createCustomToolBar = props => {
      return (

        <div style={ { margin: '19px' } }>
          { props.components.btnGroup }
          <div className='col-xs-9 col-sm-5 col-md-12 col-lg-10'>


            { props.components.searchPanel }

          </div>

        </div>


      );
    }

    render() {

    var products = [{
           id: 123,
           name: "Srini Associatyes Pty Ltd",
           price: 14589,
           date:"21-2-2017",
           status:"open"
       },{
           id: 345,
           name: "Shreedas Group Pty Ltd",
           price: 14758,
           date:"21-2-2017",
           status:"open"
       },{
                id: 698,
                name: "Om Shakti (Others)",
                price: 96587,
                date:"21-2-2017",
                 status:"open"
            },{
                     id: 789,
                     name: "North Shore Catering",
                     price: 78456,
                     date:"21-2-2017",
                     status:"open"

                 },{
                          id: 741,
                          name: "Muvva Holding Pty Ltd",
                          price: 25410,
                          date:"21-2-2017",
                         status:"open"
                      },{
                               id: 145,
                               name: "Lotus Mart",
                               price: 50000,
                               date:"21-2-2017",
                               status:"open"
                           }];
      const selectRow = {
        mode: 'checkbox',
        showOnlySelected: true
      };
      const options = {
        toolBar: this.createCustomToolBar
      };
      return (

       <BootstrapTable data={ products }
          options={ options }

          selectRow={ selectRow }
          insertRow
          exportCSV
          search
          deleteRow
          pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Invoice ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Customer Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn dataField='status'>status</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
        </BootstrapTable>



      );
    }
  }

export default Home;