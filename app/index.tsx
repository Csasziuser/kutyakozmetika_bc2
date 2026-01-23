import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

interface Foglalas {
  id : number,
  customer_name : string,
  day: string,
  time: string
}

export default function Index() {
  const [nap,setNap] = useState<string>('2026-01-16');
  const [adatok,setAdatok] = useState<Foglalas[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://192.168.76.10:8000/api/foglalasok/${nap}`);
      const data = await response.json();

      const sorted = data.sort((a: Foglalas, b: Foglalas) => a.time.localeCompare(b.time));
      setAdatok(sorted);
    } 
    catch (error) {
      alert("Nem jo!");
    } 
    finally{
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => { getData(); },[nap])
  );

  return (
    <View>
      <View>
        <TextInput
          value={nap}
          onChangeText={setNap}
          placeholder="ÉÉÉÉ-HH-NN"
          placeholderTextColor="lightgrey"
        />
      </View>
      <FlatList
        data={adatok}
        refreshing={loading}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ ({item}) => (
          <View>
            <Text>{item.time} - {item.customer_name}</Text>
            <Text></Text>
          </View>  
        )
        }
      />
    </View>
  );
}
