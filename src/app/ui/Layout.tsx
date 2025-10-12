import { StyleSheet, } from "react-native";
import { Text, View  } from "react-native-web";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    
    return <View style={styles.root}>
        <View style={styles.header}>
            <Link style={styles.navLink} to="/"><Text>Home</Text></Link>
            <Link style={styles.navLink} to="/privacy"><Text>Privacy</Text></Link>
            <Link style={styles.navLink} to="/intro">Intro</Link>
            <Link style={styles.navLink} to="/about">About</Link>
            <Link style={styles.navLink} to="/cart">
                <Text>In Cart: 2</Text>
            </Link>
            <Link style={styles.navLink} to="/login">Login</Link>
            <Link style={styles.navLink} to="/login">Register</Link>
        </View>
        <View style={styles.main}><Outlet /></View>
        <View style={styles.footer}>
            <Text>&copy; IT Step, 2025</Text>
        </View>
    </View>;
}


const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "100vh"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  navLink: {
    textDecorationLine: "none",
  },
  main: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1
  },
  footer: {
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});
