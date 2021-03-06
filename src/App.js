import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CheckIcon from "@material-ui/icons/Check";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DepartureBoardIcon from "@material-ui/icons/DepartureBoard";
import DirectionsIcon from "@material-ui/icons/Directions";
import TimerIcon from "@material-ui/icons/Timer";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import TelegramIcon from "@material-ui/icons/Telegram";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ReplayIcon from "@material-ui/icons/Replay";
import DnsIcon from "@material-ui/icons/Dns";

const homeListItems = (
  <div>
    <ListSubheader inset>Inicio</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="#1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="#2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="#3" />
    </ListItem>
  </div>
);

const processListItems = (
  <div>
    <ListSubheader inset>Procesos</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="#1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="#2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="#3" />
    </ListItem>
  </div>
);

const queriesListItems = (
  <div>
    <ListSubheader inset>Consultas</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="Asistencias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="Conectados" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DepartureBoardIcon />
      </ListItemIcon>
      <ListItemText primary="Monitoreo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Recorridos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimerIcon />
      </ListItemIcon>
      <ListItemText primary="Tiempos de control" />
    </ListItem>
  </div>
);

const confListItems = (
  <div>
    <ListSubheader inset>Configuración</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DirectionsBusIcon />
      </ListItemIcon>
      <ListItemText primary="Cambiar nro vehículo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TelegramIcon />
      </ListItemIcon>
      <ListItemText primary="Enviar conf. inicial" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PinDropIcon />
      </ListItemIcon>
      <ListItemText primary="Enviar paraderos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddLocationIcon />
      </ListItemIcon>
      <ListItemText primary="Enviar ptos de control" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DnsIcon />
      </ListItemIcon>
      <ListItemText primary="Paraderos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReplayIcon />
      </ListItemIcon>
      <ListItemText primary="Reset" />
    </ListItem>
  </div>
);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        trys
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%"
  },
  toolbar: {
    backgroundColor: "#17a2b8",
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Control de Buses
          </Typography>
          <AccountCircle />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{homeListItems}</List>
        <Divider />
        <List>{processListItems}</List>
        <Divider />
        <List>{queriesListItems}</List>
        <Divider />
        <List>{confListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
