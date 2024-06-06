import { View } from "react-native";
import { Title } from "./Title";
import { Option } from "./Option";
import { Switch } from "./Switch";
import { useState } from "react";
import { Checkbox } from "./Checkbox";


export function Preference(){
  const [isEnable, setIsEnable] = useState(false)
  return(
    <View className="w-full">
      <Title>Preferences</Title>

      <Option>
        <Option.Icon icon="dark-mode"/>
        <Option.Title>Dark mode</Option.Title>
        <Switch onValueChange={setIsEnable} value={isEnable}/>
      </Option>
    
      <Option>
        <Option.Icon icon="email"/>
        <Option.Title>Public Email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  )
}