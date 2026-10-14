import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  course: string;
  deadline: string;
  status: "pending" | "completed";
};

export default function TaskCard({ title, course, deadline, status }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>Lënda: {course}</Text>
      <Text>Afati: {deadline}</Text>
      <Text>Statusi: {status === "pending" ? "Në pritje" : "Përfunduar"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F1F5F9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
