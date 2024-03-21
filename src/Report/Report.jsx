import CardComponent from "../components/card/Card";

function Report() {
  return (
    <>
      <CardComponent
        props={{
          header: "View Students Report",
          description:
            "This is a report for viewing students that takes certain lecture.",
          buttonText: "View Report",
          id: "1"
        }}
      ></CardComponent>

      <CardComponent
        props={{
          header: "View Lectures Report",
          description:
            "This is a report for viewing lectures that has been taken by a certain student.",
          buttonText: "View Report",
          id:"2"
        }}
      ></CardComponent>

      <CardComponent
        props={{
          header: "View Lecture With No Students",
          description:
            "This is a report for viewing lectures that has no students.",
          buttonText: "View Report",
          id:"3"
        }}
      ></CardComponent>

      <CardComponent
        props={{
          header: "View Students With No Lectures",
          description:
            "This is a report for viewing students that has no lectures.",
          buttonText: "View Report",
          id:"4"
        }}
      ></CardComponent>
    </>
  );
}

export default Report;
