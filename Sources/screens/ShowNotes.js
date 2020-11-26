import React, { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NotesContext } from '../Context/NotesContext'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ShowNotes = ({route}, {navigation}) => {

    const {id} = route.params
    const {state} = useContext(NotesContext)
    const data = state.find((record) => {
                    return record.id === id
                })

    return (
        <View style ={{flex: 1, marginTop: 10}}>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity
                    style={{
                        marginVertical:10,
                        // backgroundColor:"blue",
                        width:80,
                        height:80,
                        // alignItems:"center",
                        // justifyContent:"center"
                    }}
                    onPress={()=>navigation.navigate("edit"),{id}}
                >
                        <Icon name="file-document-edit-outline" size={60} color="#0204a8"/>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:22, textAlign:"center"}}>{data.title}</Text>
            <Text style={{fontSize:22, textAlign:"center"}}>{data.content}</Text>
        </View>
    )
}


export default ShowNotes;