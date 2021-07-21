import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "20/06 as 20:40h",
      description:
        "Eh hoje que vamos chegar ao challenger sem perder uma partida na md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "20/06 as 20:40h",
      description:
        "Eh hoje que vamos chegar ao challenger sem perder uma partida na md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
