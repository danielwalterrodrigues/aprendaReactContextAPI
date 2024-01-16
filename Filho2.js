import React, { useContext } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ContextTotal from "./Context"

const Filho2 = () => {	
    const [total, setTotal] = useContext(ContextTotal)

	return(
        <View style={{backgroundColor: '#FFCC00', padding: 20, margin: 20}}>
            <Text>
                O valor no Filho 2 é {total}
            </Text>

            <TouchableOpacity onPress={()=>{setTotal(0)}} style={{backgroundColor: '#ffffff', marginTop: 10, padding: 10}}>
                <Text>Clique pra voltar pra 0</Text>
            </TouchableOpacity>
        </View>
	)
}

export default Filho2