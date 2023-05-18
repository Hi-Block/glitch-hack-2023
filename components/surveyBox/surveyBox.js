// import React from "react";
import styles from "./SurveyBox.module.css";

// const SurveyBox = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.titleBox}>
//         <h2 className={styles.title}>Completed Survey</h2>
//         <img
//           className={styles.titleSearch}
//           src="Search.png"
//           alt="Search Icon"
//         />
//         <img
//           className={styles.titleFilter}
//           src="Filter list.png"
//           alt="Filter Icon"
//         />
//       </div>
//       <table className={styles.list}>
//         <tr className={styles.header}>
//           <th>Survey Name</th>
//           <th>Prerequisites</th>
//           <th>End Date</th>
//           <th>Reward Amount</th>
//           <th>Progress</th>
//           <th>Action</th>
//         </tr>
//         <tr className={styles.line}>
//           <td>데이터1</td>
//           <td>데이터2</td>
//           <td>데이터3</td>
//           <td>데이터2</td>
//           <td>데이터3</td>
//           <td>
//             <button>hi</button>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default SurveyBox;

const SurveyBox = () => {
  // 가상의 Survey 데이터 예시
  const surveyData = [
    {
      surveyName: "Survey 1",
      prerequisites: "Prequisites 1",
      endDate: "2023-05-31",
      rewardAmount: "$10",
      progress: "75%",
    },
    {
      surveyName: "Survey 2",
      prerequisites: "Prequisites 2",
      endDate: "2023-06-15",
      rewardAmount: "$15",
      progress: "50%",
    },
    // 추가적인 Survey 데이터들...
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Completed Survey</h2>
        <img
          className={styles.titleSearch}
          src="Search.png"
          alt="Search Icon"
        />
        <img
          className={styles.titleFilter}
          src="Filter list.png"
          alt="Filter Icon"
        />
      </div>
      <table className={styles.list}>
        <thead>
          <tr className={styles.header}>
            <th>Survey Name</th>
            <th>Prerequisites</th>
            <th>End Date</th>
            <th>Reward Amount</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {surveyData.map((survey, index) => (
            <tr className={styles.line} key={index}>
              <td>{survey.surveyName}</td>
              <td>{survey.prerequisites}</td>
              <td>{survey.endDate}</td>
              <td>{survey.rewardAmount}</td>
              <td>{survey.progress}</td>
              <td>
                <button>Button</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyBox;
