import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  course: string;
  deadline: string;
  status: "pending" | "completed";
};

export default function TaskCard({ title, course, deadline, status }: Props) {
  const [currentStatus, setCurrentStatus] = useState(status);

  const toggleStatus = () => {
    setCurrentStatus((previousStatus) =>
      previousStatus === "pending" ? "completed" : "pending",
    );
  };
  return (
    <Pressable onPress={toggleStatus} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>Lënda: {course}</Text>
      <Text>Afati: {deadline}</Text>
      <Text>
        Statusi: {currentStatus === "pending" ? "Në pritje" : "Përfunduar"}
      </Text>
    </Pressable>
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
