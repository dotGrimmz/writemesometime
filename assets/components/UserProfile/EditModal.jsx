import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

const EditModal = (props) => {
  const { open, setOpen } = props;
  const styles = {
    container: {
      flex: 1,
      width: "auto",
    },
    editModal: {
      width: 300,
      padding: 10,
    },
    textInput: {
      borderBottomColor: "#000000",
      borderBottomWidth: 1,
      right: 2,
    },
    btns: {
      paddingBottom: 5,
    },
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Card style={styles.editModal}>
        <Grid
          container
          justify="flex-start"
          direction="column"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography variant="h2"> Edit Profile</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="User Name"
              style={styles.textInput}
            />
          </Grid>
          <Divider orientation="vertical" />
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="First Name"
              style={styles.textInput}
            />
          </Grid>
          <Divider orientation="vertical" />
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Last Name"
              style={styles.textInput}
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          direction="row"
          spacing={2}
          align="center"
        >
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log("this is the submit btn")}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Dialog>
  );
};

export default EditModal;
