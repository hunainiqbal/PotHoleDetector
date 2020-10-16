import React from 'react';
import { View, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//  import Home from './homeStack';
import Login from '../PotHoleDetector/Login'
import Report from '../PotHoleDetector/Report';
import Register from '../PotHoleDetector/Register';
import Menu from '../PotHoleDetector/Menu';
import TestApp from '../PotHoleDetector/TestApp';
import Support from '../PotHoleDetector/Support';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            {/* <Avatar.Image
                                source={require('../assets/timer.jpg'
                                )}
                                size={50}
                            /> */}
                            <View style={{marginLeft:15, flexDirection:"column"}}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>CAR NUMBER</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() =>{props.navigation.navigate('Menu')}}
                />
                    <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="account-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() =>{props.navigation.navigate('Register')}}
                />
                     <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="bookmark-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Bookmark"
                    onPress={() =>{props.navigation.navigate('Register')}}
                />
                    <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="incognito"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Explore"
                    onPress={() =>{props.navigation.navigate('TestApp')}}
                />
                    
                    <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="account-check-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Support"
                    onPress={() =>{props.navigation.navigate('Support')}}
                />
                    </Drawer.Section>
                    <Drawer.Section title="preferences">
                        <TouchableRipple onPress={() =>{toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                               
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) =>(
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() =>{props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})