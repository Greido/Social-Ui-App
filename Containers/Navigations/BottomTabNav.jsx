import { View, Text, Platform } from 'react-native'
import React from 'react'
import {SimpleLineIcons, Fontisto, MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {COLORS} from '../../constants'
import { Create, Home, Messages, Profile, Settings } from '../Screens'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarHideOneKeyboard:true,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        backgroundColor:COLORS.white
    }
}

const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon:({focsed})=>{
                        return(
                            <SimpleLineIcons
                                name='home'
                                size={24}
                                color={focsed ? COLORS.primary : COLORS.black}
                            />
                        )
                    }
                }}
            />

                <Tab.Screen
                                name='Messages'
                                component={Messages}
                                options={{
                                    tabBarIcon:({focsed})=>{
                                        return(
                                            <MaterialCommunityIcons
                                                name='message-text-outline'
                                                size={24}
                                                color={focsed ? COLORS.primary : COLORS.black}
                                            />
                                        )
                                    }
                                }}
                            />

                <Tab.Screen
                    name='Create'
                    component={Create}
                    options={{
                        tabBarIcon:({focsed})=>{
                            return(
                                <View
                                    style={{
                                        alignItems:'center',
                                        justifyContent:'center',
                                        backgroundColor: COLORS.primary,
                                        height: Platform.OS == 'ios' ? 50 : 60,
                                        width: Platform.OS == 'ios' ? 50 : 60,
                                        top:Platform.OS == 'ios' ? -10 : -20,
                                        borderRadius:Platform.OS == 'ios' ? 25 : 30,
                                        borderWidth:2,
                                        borderColor:COLORS.white
                                        
                                    }}
                                >
                                    <Fontisto
                                        name='plus-a'
                                        size={24}
                                        color={COLORS.white}
                                    />
                                </View>
                            )
                        }
                    }}
                />

                <Tab.Screen
                    name='Settings'
                    component={Settings}
                    options={{
                        tabBarIcon:({focsed})=>{
                            return(
                                <MaterialIcons
                                    name='settings'
                                    size={24}
                                    color={focsed ? COLORS.primary : COLORS.black}
                                />
                            )
                        }
                    }}
                    />

                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon:({focsed})=>{
                            return(
                                <MaterialIcons
                                    name='person-outline'
                                    size={24}
                                    color={focsed ? COLORS.primary : COLORS.black}
                                />
                            )
                        }
                    }}
                    />
        </Tab.Navigator>
    )
}

export default BottomTabNav