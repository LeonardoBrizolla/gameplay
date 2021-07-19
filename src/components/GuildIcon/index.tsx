import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://imgr.search.brave.com/0pIU4_DQwGpkaDzm6LBcqIlN8RrATKjN9OUVs3VK9CM/fit/512/512/no/1/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9w/YXBpcnVzLXRlYW0v/cGFwaXJ1cy1hcHBz/LzUxMi9kaXNjb3Jk/LWljb24ucG5n";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
