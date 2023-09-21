import Table from "./components/Table";
import mockDataTable from "./data/mock-data";
import "normalize.css/normalize.css";
import dayjs from "dayjs";
import {
  StyledMainParagraph,
  StyledTime,
  StyledPrice,
  StyledIsFraud,
  StyledIsNotFraud,
} from "./styles/StyledComponent";

function App() {
  const ReferralEvent = ({ row: { original } }) => {
    return (
      <>
        <StyledMainParagraph>Purchase</StyledMainParagraph>
        <StyledTime>
          {dayjs(original.event.time).format("MM/DD/YYYY")} at{" "}
          {dayjs(original.event.time).format("h:mm A")} PDT
        </StyledTime>
        <StyledPrice>${original.event.price.toFixed(2)}</StyledPrice>
      </>
    );
  };

  const Advocate = ({ row: { original } }) => {
    return (
      <>
        <StyledMainParagraph>{original.advocate}</StyledMainParagraph>
        <p>Advocate</p>
      </>
    );
  };

  const Friend = ({ row: { original } }) => {
    return (
      <>
        <StyledMainParagraph>{original.friend}</StyledMainParagraph>
        <p>Friend</p>
      </>
    );
  };

  const Status = ({ row: { original } }) => {
    switch (original.status) {
      case "Pending":
      case "Approved":
        return (
          <>
            <StyledMainParagraph>{original.status}</StyledMainParagraph>
            <StyledIsNotFraud>Passed fraud checks</StyledIsNotFraud>
          </>
        );
      case "Flagged":
      case "Blocked":
      case "Voided":
        return (
          <>
            <StyledMainParagraph>{original.status}</StyledMainParagraph>
            <StyledIsFraud>Marked as fraud</StyledIsFraud>
          </>
        );
      default:
        return <p>undefined</p>;
    }
  };

  const columns = [
    {
      header: "Referral event",
      accessorKey: "event",
      cell: ReferralEvent,
    },
    {
      header: "Advocate",
      accessorKey: "advocate",
      cell: Advocate,
    },
    {
      header: "Friend",
      accessorKey: "friend",
      cell: Friend,
    },
    {
      header: "Referral Status",
      accessorKey: "status",
      cell: Status,
    },
  ];

  return (
    <div className="App">
      <main className="main">
        <h2>Referrals - {mockDataTable.length}</h2>
        <Table mockDataTable={mockDataTable} columns={columns} />
      </main>
    </div>
  );
}

export default App;
