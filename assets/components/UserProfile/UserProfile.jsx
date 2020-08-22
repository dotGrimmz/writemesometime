import React, { useState } from "react";
import EditModal from "./EditModal";
import { Tooltip, Avatar } from "react-native-elements";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

const UserProfile = (props) => {
  const { userCredentials, setAvatarInitials } = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [removeAcct, setRemoveAcct] = useState(false);

  const styles = {
    cardStyles: {
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "center",
      padding: 2,
    },
    editBtn: {
      padding: 5,
    },
    fullName: {
      paddingRight: 40,
    },
    avatar: {
      paddingLeft: 30,
    },
    divider: {
      padding: 10,
    },
    divider2: {
      width: "80%",
    },
  };
  return (
    <>
      <Card containerStyle={styles.cardStyles}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={4} style={styles.avatar}>
            <Avatar
              rounded
              raised
              overlayContainerStyle={{ backgroundColor: "green" }}
              activeOpacity={0.7}
              title={setAvatarInitials(userCredentials.userName)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2">{userCredentials.userName}</Typography>
          </Grid>
          <Grid item xs={2} style={styles.fullName}>
            <Typography variant="body1" align="right">
              {userCredentials.firstName + " " + userCredentials.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} style={styles.divider}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="caption" align="center">
              Total Likes .. feature to soon be implemented
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={styles.divider}>
            <Divider variant="middle" style={styles.divider2} />
          </Grid>
          <Grid xs={12} item align="center" style={styles.editBtn}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setOpenEdit(true)}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid item xs={12}>
        <EditModal open={openEdit} setOpen={setOpenEdit} />
      </Grid>
    </>
  );
};

export default UserProfile;
