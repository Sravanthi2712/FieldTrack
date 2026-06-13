import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";

export default function VisitHistoryScreen() {

  const [visits, setVisits] = useState([]);

  const fetchVisits = async () => {
    try {
      const response = await fetch(
        "http://10.167.137.110:8000/visits/"
      );

      const data = await response.json();

      console.log(data);

      setVisits(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  return (
    <View style={styles.container}>

      <FlatList
        data={visits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text>
              Customer: {item.customer_name}
            </Text>

            <Text>
              Sales Rep: {item.sales_rep_name}
            </Text>

            <Text>
              Distance: {item.distance_in_meters.toFixed(2)} m
            </Text>

            <Text>
              Check-In Latitude: {item.checkin_latitude}
            </Text>

            <Text>
              Check-In Longitude: {item.checkin_longitude}
            </Text>

            <Text>
              Check-In Time: {item.checkin_time}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
});