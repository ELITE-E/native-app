import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={"/product/${product.slug}"}>
      <Pressable>
        <View style={styles.item}>
          <View style={styles.itemImageContainer}>
            <Image
              source={product.heroImage}
              style={styles.itemImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>{product.title}</Text>
            <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "48%",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },

  itemImageContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },

  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    gap: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
