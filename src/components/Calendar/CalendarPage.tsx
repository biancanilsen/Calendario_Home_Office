import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import HeaderComponent from "../Header/Header";
import CalendarComponent from "./Calendar";

export default function CalendarPage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* display flex */}
        <div style={{ height: "80vh", paddingTop: "64px", width: "80vw", alignItems: "center" }}>
          <CalendarComponent></CalendarComponent>
        </div>
      </LocalizationProvider>
    </>
  );
}
