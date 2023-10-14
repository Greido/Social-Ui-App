import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {COLORS,FONTS} from '../../constants'
import {MaterialIcons} from '@expo/vector-icons'





const Settings = ({navigation}) => {

    const navigateToEditProfile = () =>{
        navigation.navigate("EditProfile")
    }

    const navigateToSecurity = () =>{
        console.log("Security function")
    }

    const navigateToNotifications = () =>{
        console.log("Notifications function")
    }
    
    const navigateToPrivacy = () =>{
        console.log("Privacy function")
    }


    const navigateToSubscription = () =>{
        console.log("Subscriptions function")
    }

    const navigateToSupport = () =>{
        console.log("Help & Support function")
    }

    const navigateToTermsAndPolicies = () =>{
        console.log("Terms and Policies function")
    }

    const navigateToFreeSpace = () =>{
        console.log("Free Space function")
    }

    const navigateToDataSaver = () =>{
        console.log("Data Saver function")
    }


    const navigateToReportProblem = () =>{
        console.log("Report a problem")
    }
    

    const navigateToAddAccount = () =>{
        console.log("Add Account")
    }


    const logout = () =>{
        console.log("Log out")
    }

    const accountItems = [
        {icon: 'person-outline',text:"Edit Profile",action:navigateToEditProfile},
        {icon: 'security', text: "Security", action: navigateToSecurity},
        {icon: 'notifications-none', text:"Notifications", action: navigateToNotifications},
        {icon: 'lock-outline',text:"Privacy",action: navigateToPrivacy}
    ]





    const supportItems = [
        {icon:"credit-card",text:"My Subscriptions",action: navigateToSubscription},
        {icon:"help-outline",text:"Help & Support",action: navigateToSupport},
        {icon:"info-outline",text:"Terms and Policies",action: navigateToTermsAndPolicies}
    ]


    const cacheCelularItems = [
        {icon:"delete-outline",text:"Free up space", action: navigateToFreeSpace},
        {icon:"save-alt",text:"Data Saver", action: navigateToDataSaver}
    ]

    
    const actionItems = [
        {icon:"outlined-flag",text:"Report a problem", action: navigateToReportProblem},
        {icon:"people-outline",text:"Add Account", action: navigateToAddAccount},
        {icon:"logout",text:"Log out", action: logout }
    ]

    const renderSettingsItem = ({icon,text,action}) => (
        <TouchableOpacity
            onPress={action}
            style={{
                flexDirection:"row",
                alignItems:"center",
                paddingVertical:8,
                paddingLeft:12,
                backgroundColor: COLORS.gray
            }}
        >
            <MaterialIcons name={icon} size={24} color="black"/>
            <Text style={{
                marginLeft:36,
                ...FONTS.semiBold,
                fontWeight:600,
                fontSize:16
            }}>{text}</Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor: COLORS.white
        }}>
        
            <View
                style={{
                    marginHorizontal:12,
                    flexDirection:'row',
                    justifyContent:'center'
                }}>

                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{
                        position:'absolute',
                        left:0
                    }}>
                        <MaterialIcons
                        name='keyboard-arrow-left'
                        size={24}
                        color={COLORS.black}
                        />

                        
                </TouchableOpacity>
                <Text style={{...FONTS.h3}}>Settings</Text>
            </View>

        <ScrollView style={{marginHorizontal:12, marginBottom:80}}>
            {/* Account Settings */}
            
            <View style={{marginBottom:12}}>
                    <Text style={{...FONTS.h4,marginVertical:10,marginLeft:20}}>Account</Text>
                    <View style={{
                        borderRadius:12,
                        padding:10,
                        margin:10,
                        backgroundColor:COLORS.gray
                    }}>
                        {
                            accountItems.map((item,index)=>(
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
            </View>



            {/* Support and About Settings */}

            <View style={{marginBottom:12}}>
                    <Text style={{...FONTS.h4,marginVertical:10,marginLeft:20}}>Support & About</Text>
                    <View style={{
                        borderRadius:12,
                        padding:10,
                        margin:10,
                        backgroundColor:COLORS.gray
                    }}>
                        {
                            supportItems.map((item,index)=>(
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
            </View>
            
            {/* Cache and Celular settings */}
            <View style={{marginBottom:12}}>
                    <Text style={{...FONTS.h4,marginVertical:10,marginLeft:20}}>Cache & Cellular</Text>
                    <View style={{
                        borderRadius:12,
                        padding:10,
                        margin:10,
                        backgroundColor:COLORS.gray
                    }}>
                        {
                            cacheCelularItems.map((item,index)=>(
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
            </View>

            {/* Actions Settings */}
            <View style={{marginBottom:12}}>
                    <Text style={{...FONTS.h4,marginVertical:10,marginLeft:20}}>Acctions</Text>
                    <View style={{
                        borderRadius:12,
                        padding:10,
                        margin:10,
                        backgroundColor:COLORS.gray
                    }}>
                        {
                            actionItems.map((item,index)=>(
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default Settings