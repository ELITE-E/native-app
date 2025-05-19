import { FlatList, StyleSheet, View, Text } from "react-native";
// import { PRODUCTS } from "../../../appassets/products";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../components/product-list-item";
import { ListHeader } from "../components/list-header";
import React from "react";

const Home = () => {
  return (
    <View>
      {/* <ListHeader /> */}
      {/* <View style={{ padding: 10 }} /> */}
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <View>
            <ProductListItem product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
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
