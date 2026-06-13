import * as Location from "expo-location";
import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

export default function CheckInScreen() {

  const [customerId, setCustomerId] = useState("");
  const [salesRepId, setSalesRepId] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getCurrentLocation = async () => {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Location permission denied");
      return;
    }

    const location =
      await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

    setLatitude(
      location.coords.latitude.toString()
    );

    setLongitude(
      location.coords.longitude.toString()
    );
  };

  const checkIn = async () => {
    try {

      const response = await fetch(
        "http://10.167.137.110:8000/visits/check-in/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer_id: parseInt(customerId),
            sales_rep_id: parseInt(salesRepId),
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.success) {
        Alert.alert(
          "Success",
          `Distance: ${data.distance} meters`
        );
      } else {
        Alert.alert(
          "Failed",
          data.message
        );
      }

    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error",
        "Unable to check in"
      );
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Customer ID"
        value={customerId}
        onChangeText={setCustomerId}
        style={styles.input}
      />

      <TextInput
        placeholder="Sales Rep ID"
        value={salesRepId}
        onChangeText={setSalesRepId}
        style={styles.input}
      />

      <TextInput
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
        //editable={false}
        style={styles.input}
      />

      <TextInput
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLatitude}
        //editable={false}
        style={styles.input}
      />

      <Button
        title="Get Current Location"
        onPress={getCurrentLocation}
      />

      <Button
        title="Check In"
        onPress={checkIn}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});