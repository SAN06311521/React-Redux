import React,{ useState, useContext } from 'react';
import { StyleSheet, Text, View, Flatlist, TouchableOpacity, TextInput } from 'react-native';
import {NotesContext} from '../Context/NotesContext';

const EditNotes = ({navigation,route}) => {

    const {id} = route.params;
    const {state,dispatch} = useContext(NotesContext);
    const PerticularNote = state.find((record) => {
        return record.id === id
    })
    const [title, setTitle] = useState(PerticularNote.title);
    const [content, setContent] = useState(PerticularNote.content);

    return (
        <View style={{flex: 1, margin: 7}}>
            <Text style={{fontSize: 27, fontWeight:"bold", fontStyle:"italic", textDecorationLine: "underline"}}>Edit the Title</Text>
            <TextInput 
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={style.desc}
            />
            <Text style={{fontSize: 23, fontStyle:"italic", textDecorationLine: "underline"}}>Edit/Update your Content here: </Text>
            <TextInput 
                value={content}
                onChangeText={(text) => setContent(text)}
                style={style.descContent}
                numberOfLines={5}
                multiline={true}
            />
            <TouchableOpacity
                style={{
                    backgroundColor:"#00a4d1",
                    padding:15,
                    borderRadius:50,
                    marginTop: 50,
                    marginHorizontal: 30
                }}
                // onPress={() => {
                //     dispatch({ type:"EDIT", payload:{id:id,title:title,content:content}})
                //     navigation.navigate("notes")
                // }}
            >
                <Text style={{fontSize:28, color:"white", textAlign:"center"}}>Update/Edit</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    desc: {
        fontSize: 22,
        borderWidth: 1,
        borderColor: "#7e939c",
        marginVertical: 10
    },
    descContent: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#7e939c",
        marginVertical: 10
    }
})

export default EditNotes;