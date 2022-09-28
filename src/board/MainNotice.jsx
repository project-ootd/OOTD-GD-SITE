// import { Link, useParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MainNotice = ({ contentLimitItem, setContentLimitItem }) => {
//   // const { id } = useParams();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await axios.get(`http://localhost:4000/mainNotice`);
//         setContentLimitItem(data.data);
//       } catch (e) {
//         setError(e);
//       }
//     };
//     getData();
//   }, []);

//   console.log("MainNotice : useEffect 이후의 contentLimitItem[0] 데이터2");
//   console.log(contentLimitItem[0]);
//   console.log("MainNotice : contentLimitItem[0].id");
//   console.log(contentLimitItem[0].id);

//   return (
//     <div>
//       <ul className="notice-list">
//         {/* <li>
//           <Link to={`/NoticeContent/${contentLimitItem[0].id}`}>
//             <span>{contentLimitItem[0]}</span>
//             &nbsp; {contentLimitItem[0].title}
//           </Link>
//         </li>
//         <li>
//           <Link to={`/NoticeContent/${contentLimitItem[1].id}`}>
//             <span>{contentLimitItem[1].id}</span> &nbsp;{" "}
//             {contentLimitItem[1].title}
//           </Link>
//         </li>
//         <li>
//           <Link to={`/NoticeContent/${contentLimitItem[2].id}`}>
//             <span>{contentLimitItem[2].id}</span> &nbsp;{" "}
//             {contentLimitItem[2].title}
//           </Link>
//         </li>
//         <li>
//           <Link to={`/NoticeContent/${contentLimitItem[3].id}`}>
//             <span>{contentLimitItem[3].id}</span> &nbsp;{" "}
//             {contentLimitItem[3].title}
//           </Link>
//         </li>
//         <li>
//           <Link to={`/NoticeContent/${contentLimitItem[1].id}`}>
//             <span>{contentLimitItem[4].id}</span> &nbsp;{" "}
//             {contentLimitItem[4].title}
//           </Link>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default MainNotice;
