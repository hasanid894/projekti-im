import { StyleSheet, Text, View } from "react-native";
import TaskCard from "../components/TaskCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CampusFlow</Text>
      <Text style={styles.subtitle}>Detyrat e mia</Text>

      <TaskCard
        title="Përfundimi i laboratorit"
        course="Mobile Development"
        deadline="14.10.2026"
        status="pending"
      />

      <TaskCard
        title="Përgatitja për test"
        course="Big Data"
        deadline="20.10.2026"
        status="pending"
      />

      <TaskCard
        title="Leximi i materialeve"
        course="Software Engineering"
        deadline="12.10.2026"
        status="completed"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    color: "#64748B",
  },
});
