import React, { useContext, useEffect } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ContextTotal from "./Context"

const Filho1 = () => {	
    const [total, setTotal] = useContext(ContextTotal)

	return(
        <View style={{backgroundColor: '#ffb900', padding: 20, margin: 20}}>
            <Text>
                O valor no Filho 1 é {total}
            </Text>

            <TouchableOpacity onPress={()=>{setTotal(99)}} style={{backgroundColor: '#ffffff', marginTop: 10, padding: 10}}>
                <Text>Clique pra trocar pra 99</Text>
            </TouchableOpacity>
        </View>
	)
}

export default Filho1