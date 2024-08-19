import { Box, Button, MenuItem, Modal, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import moment from "moment";
import "moment/locale/pt-br";
import * as React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("pt-br");

const localizer = momentLocalizer(moment);

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Event {
  title: string;
  start: Date;
  end: Date;
}

export default function CalendarComponent() {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [open, setOpen] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [collaborator, setCollaborator] = React.useState("");
  const [eventType, setEventType] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setSelectedEvent(null);
    setCollaborator("");
    setEventType("");
  };

  const handleSelectSlot = (slotInfo: any) => {
    setSelectedDate(dayjs(slotInfo.start));
    handleOpen();
  };

  const handleSelectEvent = (event: Event) => {
    setIsEditing(true);
    setSelectedEvent(event);
    const [collaborator, eventType] = event.title.split(" - ");
    setCollaborator(collaborator);
    setEventType(eventType);
    handleOpen();
  };

  const handleAddEvent = () => {
    const newEvent: Event = {
      title: `${collaborator} - ${eventType}`,
      start: selectedDate!.toDate(),
      end: selectedDate!.add(1, "hour").toDate(),
    };
    setEvents([...events, newEvent]);
    handleClose();
  };

  const handleEditEvent = () => {
    setEvents(
      events.map((event) =>
        event === selectedEvent
          ? {
              ...event,
              title: `${collaborator} - ${eventType}`,
              start: selectedDate!.toDate(),
              end: selectedDate!.add(1, "hour").toDate(),
            }
          : event
      )
    );
    handleClose();
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event !== selectedEvent));
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ height: "80vh" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          culture="pt-BR"
          messages={{
            next: "Próximo",
            previous: "Anterior",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            agenda: "Agenda",
            date: "Data",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "Não há eventos nesta faixa",
            showMore: (total) => `+ Ver mais (${total})`,
          }}
          formats={{
            timeGutterFormat: () => "",
          }}
          components={{
            timeGutterHeader: () => null,
          }}
        />
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>{isEditing ? "Editar Evento" : "Adicionar Evento"}</h2>
          <Select label="Colaborador" fullWidth value={collaborator} onChange={(e) => setCollaborator(e.target.value as string)} sx={{ mb: 2 }}>
            <MenuItem value="Bia">Bia</MenuItem>
            <MenuItem value="Duda">Duda</MenuItem>
            <MenuItem value="Guga">Guga</MenuItem>
            <MenuItem value="Jeff">Jeff</MenuItem>
            <MenuItem value="Haag">Haag</MenuItem>
            <MenuItem value="Gilli">Gilli</MenuItem>
          </Select>
          <Select label="Tipo de Evento" fullWidth value={eventType} onChange={(e) => setEventType(e.target.value as string)} sx={{ mb: 2 }}>
            <MenuItem value="Remoto">Remoto</MenuItem>
            <MenuItem value="Presencial">Presencial</MenuItem>
          </Select>
          {isEditing ? (
            <>
              <Button variant="contained" color="primary" onClick={handleEditEvent} sx={{ mr: 2 }}>
                Editar Evento
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDeleteEvent}>
                Apagar Evento
              </Button>
            </>
          ) : (
            <Button variant="contained" color="primary" onClick={handleAddEvent}>
              Adicionar Evento
            </Button>
          )}
        </Box>
      </Modal>
    </LocalizationProvider>
  );
}
