import { FlatList, StyleSheet, View, Text } from "react-native";
// import { PRODUCTS } from "../../../appassets/products";
import { PRODUCTS } from "../../../assets/products";
import React from "react";

const Home = () => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <View></View>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<Text>Products</Text>}
        contentContainerStyle={styles.FlatListContent}
        columnWrapperStyle={styles.FlatListColumn}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  FlatListContent: {
    paddingBottom: 20,
  },
  FlatListColumn: {
    justifyContent: "space-between",
  },
});
