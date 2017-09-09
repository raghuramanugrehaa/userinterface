import React from "react";
export class Data extends React.Component{
render(){
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
  return(products);
  }
  }
