// Icons
import Face4Icon from "@mui/icons-material/Face4";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
// Navigation
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Styles
import styles from "./Bottom.module.css";

const Bottom = () => {
  const [pagina] = useState(window.location.pathname);
  const navigate = useNavigate();
  return (
    <div className={styles.bottom}>
      <Face4Icon
        className={pagina === "/Residentes" ? styles.clicked : styles.unclicked}
        onClick={() => navigate("/Residentes")}
      />
      <GroupsIcon
        className={
          pagina === "/Profissionais" ? styles.clicked : styles.unclicked
        }
        onClick={() => navigate("/Profissionais")}
      />
      <PersonAddIcon
        className={pagina === "/Usuarios" ? styles.clicked : styles.unclicked}
        onClick={() => navigate("/Usuarios")}
      />
      <NotificationsIcon
        className={pagina === "/Alertas" ? styles.clicked : styles.unclicked}
        onClick={() => navigate("/Alertas")}
      />
    </div>
  );
};

export default Bottom;
