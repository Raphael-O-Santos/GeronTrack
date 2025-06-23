import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Bottom = () => {
  const styleIcon = { fontSize: "2.5em", color: "#0077B6" };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#CAF0F8",
        padding: "1em 1em 0 1em",
        borderRadius: "0 0 1em 1em",
      }}
    >
      <PersonIcon sx={styleIcon} />
      <GroupsIcon sx={styleIcon} />
      <AccountCircleIcon sx={styleIcon} />
      <NotificationsIcon sx={styleIcon} />
    </div>
  );
};

export default Bottom;
