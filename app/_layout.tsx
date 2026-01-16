import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {backgroundColor: 'darkblue', borderTopColor: 'grey'},
        tabBarActiveTintColor: 'lightblue',
        tabBarInactiveTintColor: 'red',
        headerStyle: {backgroundColor: 'yellow'},
        headerTintColor: 'black'
        }
    }>
      <Tabs.Screen name="index" 
                  options={{title: "Foglalások", tabBarIcon:({color}) => <Ionicons name="calendar" size={24} color={color}/>}}/>
      <Tabs.Screen name="post" 
                  options={{title: "Új foglalás", tabBarIcon:({color}) => <Ionicons name="add-circle" size={24} color={color}/>}}/>
    </Tabs>
  )
    
}
