import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function AddFlight() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [airline, setAirlineName] = React.useState("");
  const [flightNumber, setFlightNumber] = React.useState("");
  const [gate, setGate] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [departureTime, setDepartureTime] = React.useState("");
  const [arrivalTime, setArrivalTime] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleAirlineChange = (event) => {
    setAirlineName(event.target.value);
    console.log("check date: ", event.target.value);
  };
  const handleFlightNumberChange = (event) =>
    setFlightNumber(event.target.value);
  const handleGateChange = (event) => setGate(event.target.value);
  const handleDestinationChange = (event) => setDestination(event.target.value);
  const handleDepartureTimeChange = (event) =>
    setDepartureTime(event.target.value);
  const handleArrivalTimeChange = (event) => setArrivalTime(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/flight", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput), // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data failed to update");
  }

  const handleSubmit = (variables) => {
    const toInput = {
      airline,
      flightNumber,
      gate,
      destination,
      departureTime,
      arrivalTime,
      status,
    };
    sampleFunc(toInput);
    setAirlineName("");
    setFlightNumber("");
    setGate("");
    setDestination("");
    setDepartureTime("");
    setArrivalTime("");
    setStatus("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Modify Flight Data
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="airline"
                value={airline}
                label="Airline"
                name="airline"
                autoComplete="airline"
                onChange={handleAirlineChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="flightNumber"
                name="flightNumber"
                variant="outlined"
                required
                fullWidth
                value={flightNumber}
                id="flightNumber"
                label="Flight Number"
                onChange={handleFlightNumberChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="destination"
                value={destination}
                label="Destination"
                name="destination"
                autoComplete="destination"
                onChange={handleDestinationChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gate"
                value={gate}
                label="Gate"
                name="gate"
                autoComplete="gate"
                onChange={handleGateChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departureTime"
                value={departureTime}
                label="Departure Time"
                name="departureTime"
                autoComplete="departureTime"
                onChange={handleDepartureTimeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="arrivalTime"
                value={arrivalTime}
                label="Arrival Time"
                name="arrivalTime"
                autoComplete="arrivalTime"
                onChange={handleArrivalTimeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="status"
                value={status}
                label="Status"
                name="status"
                autoComplete="status"
                onChange={handleStatusChange}
              />
            </Grid>
          </Grid>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventdefault="true"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Search
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/">View Flight Data</Link>
            </Grid>
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </Container>
  );
}
