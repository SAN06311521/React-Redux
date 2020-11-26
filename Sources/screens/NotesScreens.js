import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {NotesContext} from '../Context/NotesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotesScreens = ({navigation}) => {
    const {state,dispatch} = useContext(NotesContext)
    return (
        <View style={{flex: 1}}>
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
                    
                    onPress={() => navigation.navigate("create")}
                >
                        <Icon name="my-library-add" size={60} color="#0204a8"/>
                </TouchableOpacity>
            </View>
            
            {/* <Button title="Add Notes Here!" onPress={() => dispatch({type:"ADD NOTES HERE!"})}/> */}
            <FlatList
                data={state}
                keyExtractor={item => item.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={()=> navigation.navigate("show", {id: item.id})}
                        >
                            <View style={{
                                flexDirection:"row",
                                justifyContent:"space-between",
                                marginHorizontal:10,
                                padding:15,
                                elevation:5,
                                marginBottom:8,
                                backgroundColor:"white"
                            }}>   
                            <Text style={{fontSize: 22}}>{item.title}</Text>
                            <Icon name="delete" size={30}
                                onPress={()=>dispatch({type:"REMOVE", payload:item.id})}
                            />
                            </View>
                        </TouchableOpacity>
                        
                    )
                }}
            />
        </View>
    );
}

export default NotesScreens;