import React, { Component } from "react";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render(){
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ]
    return(
          <div className="container">
                <div
                  className="row align-items-center justify-content-center"
                  style={{ height: "100vh" }}
                  >
                  <div className="col-auto">
                    <Breadcrumb data={breadcrumb} />
                  </div>
                </div>
              </div>
      )
    }
}


// import React, { Component } from "react";
// import {InputDate} from "elements/Form";
// export default class Example extends Component {
//   state = {
//     value: {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   };
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div className="container">
//         <div
//           className="row align-items-center justify-content-center"
//           style={{ height: "100vh" }}
//         >
//           <div className="col-auto">
//             <InputDate
//               max={30}
//               onChange={this.handleChange}
//               name="value"
//               value={this.state.value}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }



// import React from "react";
// import InputNumber from 'elements/Form/InputNumber'
// // import InputNumber from "./index";

// export default class Example extends React.Component {
//   state = {
//     value: "1",
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//     <div className="container">
//         <div className="row align-items-center justify-content-center"
//         style={{height: "100vh"}}>
//             <div className="col-auto">
//                 <InputNumber
//                 max={30}
//                 suffix = " night"
//                 isSuffixPlural
//                 onChange={this.handleChange}
//                 name="value"
//                 value={this.state.value}
//                 />
//             </div>
//         </div>
//     </div>
//     );
//   }
// }

// // import React, { Component } from "react";
// // import InputDate from "elements/Form/InputDate";
// // export default class Example extends Component {
// //   state = {
// //     value: {
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       key: "selection",
// //     },
// //   };
// //   handleChange = (e) => {
// //     this.setState({ [e.target.name]: e.target.value });
// //   };
// //   render() {
// //     console.log(this.state);
// //     return (
// //       <div className="container">
// //         <div
// //           className="row align-items-center justify-content-center"
// //           style={{ height: "100vh" }}
// //         >
// //           <div className="col-auto">
// //             <InputDate
// //               max={30}
// //               onChange={this.handleChange}
// //               name="value"
// //               value={this.state.value}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
