import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import image from '../assets/S1.png';
import imagee from '../assets/SS.png';
import { FloatingAction } from "react-native-floating-action";
// import Carousel from 'react-native-reanimated-carousel';

import Carousel from 'react-native-snap-carousel';



const Home = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const handleFilters = () => {
        navigation.navigate('Filters');
    };
    const handleNotification = () => {
        navigation.navigate('Notification');
    };
    const handleCreatePost = () => {
        console.log("Floating Action Button Pressed!");
        navigation.navigate('CreatePost');
    };
    const handleComments = () => {
      //  console.log("Floating Action Button Pressed!");
        navigation.navigate('Comments');
    };
    const sliderWidth = Dimensions.get('window').width;
    const itemWidth = Math.round(sliderWidth * 0.6);

    const entries = [
        { id: 1, title: 'Clothing online', image },
        { id: 2, title: 'Shopuur Store', image: imagee }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <ImageBackground
                source={item.image}
                style={styles.imageBackground}
                imageStyle={styles.imageBorderRadius}
            >
                <Text style={styles.textTitle}>{item.title}</Text>
                <Button
                    title="Join"
                    titleStyle={styles.buttonTitle}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                />
            </ImageBackground>
        </View>
    );



    return (
       <View style={styles.mainContainer}>

            <View style={styles.insidecontainer}>
                <View style={styles.container0}>
                    <Text style={styles.centeredText}>Your Location</Text>
                    <IonicIcon name='chevron-down' size={18} color='gray' ></IonicIcon>
                </View>
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Washington, DC</Text>
                    <View style={styles.containerr}>
                        <Image
                            source={require('../assets/locateIcon.png')}
                            style={styles.image}
                        />
                         <TouchableOpacity activeOpacity={0.7} onPress={handleNotification}>
                        <Image
                            source={require('../assets/Vector.png')}
                            style={styles.image}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container1}>
                    
                    <Image
                        source={require('../assets/profilepic.png')}
                        style={styles.image}
                    />
                    <View style={styles.container2}>
                        <IonicIcon name='search-outline' size={20} ></IonicIcon>

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            onBlur={() => handleBlur('text')}
                            value={text}
                            placeholder="Search Shopuur"
                            placeholderTextColor={'gray'}

                        />

                    </View>
                    <View style={styles.container11}>
                        <TouchableOpacity activeOpacity={0.7} onPress={handleFilters}>
                            <Image
                                source={require('../assets/filter.png')}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.scrollView}>
                <View style={styles.concon}>
                    <View>
                        <Text style={styles.blacky}>Groups near you</Text>
                    </View>
                    <View>
                        <Text style={styles.clr}>See all</Text>
                    </View>
                </View>
                
                
                <Carousel
                data={entries}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                loop={true}
                autoplay={true} 
                autoplayInterval={3000}
            />

                <View style={styles.concon}>
                    <View>
                        <Text style={styles.blacky}>Live Feed</Text>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.contain}>
                        <Image
                            source={require('../assets/PP.png')}
                            style={styles.image}
                        />
                        <View  >

                            <Text style={styles.texxt}>Jessica Arron</Text>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>South Slop</Text>
                                <Text> . {''}7h{''} . </Text>
                                <IonicIcon name='globe-outline' size={12} ></IonicIcon>


                            </View>

                        </View>
                    </View>

                    <View style={styles.container11}>
                        <IonicIcon name='ellipsis-horizontal' size={24} color={'gray'} ></IonicIcon>

                    </View>
                </View>
                
                <View style={styles.tex}>
                    <Text>
                        Hello! I'm looking to buy a new electronic gadget and I'm open to
                        suggestions. I'm looking for something that's versatile and can
                        be used for both work and entertainment. It should have good
                        battery life and be lightweight and portable so I can take it with
                        me on the go.
                    </Text>
                </View>
                <View style={styles.inline}>
                    <View style={styles.iinline}>

                        <Button
                            //onPress={handleSignup} 
                            title="Follow"
                            // iconContainerStyle={{ marginRight: 10 }} 
                            titleStyle={{ color: '#1DCC2E', fontSize: 12 }}
                            buttonStyle={styles.buttonn}
                            containerStyle={styles.buttonnContainer}
                        />
                        <Button
                            //onPress={handleSignup} 
                            title="Message"
                            // iconContainerStyle={{ marginRight: 10 }} 
                            titleStyle={{ fontSize: 12 }}
                            buttonStyle={styles.button}
                            containerStyle={styles.buttonnContainer}
                        />
                    </View>
                    <View style={styles.set}>
                        <IonicIcon name='heart-sharp' size={20} color={'gray'} ></IonicIcon>
                        <Text style={styles.clr}>44</Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={handleComments}>
                        <IonicIcon name='chatbubble-sharp' size={18} color={'gray'} ></IonicIcon>
                        </TouchableOpacity>
                        <Text style={styles.clr}>23</Text>
                        <IonicIcon name='arrow-redo-sharp' size={20} color={'gray'} ></IonicIcon>
                    </View>



                </View>
                
                <View style={styles.container1}>
                    <View style={styles.contain}>
                        <Image
                            source={require('../assets/Adobe.png')}
                            style={styles.iimage}
                        />
                        <View  >

                            <Text style={styles.texxt}>Adobe Experience Cloud</Text>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Sponsored</Text>

                            </View>

                        </View>
                    </View>


                    <View style={styles.container11}>
                        <IonicIcon name='ellipsis-horizontal' size={24} color={'gray'} ></IonicIcon>

                    </View>
                </View>
                <View style={styles.ttexx}>
                <Text style={styles.ttexxt}>Experience League of Advertising</Text>
                <View style={styles.tex}>
                    <Text>Fast-track your Adobe Advertising expertise with step-by- step learning and recommended events.
                    </Text>
                </View>
                </View>
                
               
                <View style={styles.floatcontainer}>
                    <FloatingAction 
                    onPressMain={handleCreatePost}
                    // onPress={handleCreatePost} 
                color='#1DCC2E'
                    />
                </View>
                <View style={styles.container1}>
                    <View style={styles.contain}>
                        <Image
                            source={require('../assets/PP.png')}
                            style={styles.image}
                        />
                        <View  >

                            <Text style={styles.texxt}>Jessica Arron</Text>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>South Slop</Text>
                                <Text> . {''}7h{''} . </Text>
                                <IonicIcon name='globe-outline' size={12} ></IonicIcon>


                            </View>

                        </View>
                    </View>

                    <View style={styles.container11}>
                        <IonicIcon name='ellipsis-horizontal' size={24} color={'gray'} ></IonicIcon>

                    </View>
                </View>
                
                <View style={styles.tex}>
                    <Text>
                        Hello! I'm looking to buy a new electronic gadget and I'm open to
                        suggestions. I'm looking for something that's versatile and can
                        be used for both work and entertainment. It should have good
                        battery life and be lightweight and portable so I can take it with
                        me on the go.
                    </Text>
                </View>
                <View style={styles.inline}>
                    <View style={styles.iinline}>

                        <Button
                            //onPress={handleSignup} 
                            title="Follow"
                            // iconContainerStyle={{ marginRight: 10 }} 
                            titleStyle={{ color: '#1DCC2E', fontSize: 12 }}
                            buttonStyle={styles.buttonn}
                            containerStyle={styles.buttonnContainer}
                        />
                        <Button
                            //onPress={handleSignup} 
                            title="Message"
                            // iconContainerStyle={{ marginRight: 10 }} 
                            titleStyle={{ fontSize: 12 }}
                            buttonStyle={styles.button}
                            containerStyle={styles.buttonnContainer}
                        />
                    </View>
                    <View style={styles.set}>
                        <IonicIcon name='heart-sharp' size={20} color={'gray'} ></IonicIcon>
                        <Text style={styles.clr}>44</Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={handleComments}>
                        <IonicIcon name='chatbubble-sharp' size={18} color={'gray'} ></IonicIcon>
                        </TouchableOpacity>
                        <Text style={styles.clr}>23</Text>
                        <IonicIcon name='arrow-redo-sharp' size={20} color={'gray'} ></IonicIcon>
                    </View>



                </View>
                
                <View style={styles.container1}>
                    <View style={styles.contain}>
                        <Image
                            source={require('../assets/Adobe.png')}
                            style={styles.iimage}
                        />
                        <View  >

                            <Text style={styles.texxt}>Adobe Experience Cloud</Text>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Sponsored</Text>

                            </View>

                        </View>
                    </View>


                    <View style={styles.container11}>
                        <IonicIcon name='ellipsis-horizontal' size={24} color={'gray'} ></IonicIcon>

                    </View>
                </View>
                
                <Text style={styles.ttexxt}>Experience League of Advertising</Text>
                <View style={styles.tex}>
                    <Text>Fast-track your Adobe Advertising expertise with step-by- step learning and recommended events.
                    </Text>
                </View>
                
               
                </ScrollView>
            </View>


            <View style={styles.down}>
                <View style={styles.do}>
                    <IonicIcon name='home-sharp' size={30} color={'gray'} ></IonicIcon>
                    <Text style={styles.NavText}>Home</Text>
                </View>
                <View style={styles.do}>
                    <IonicIcon name='storefront-sharp' size={30} color={'gray'} ></IonicIcon>
                    <Text style={styles.NavText}>Store Search</Text>
                </View>
                <View style={styles.dodo}>
                    <Image
                        source={require('../assets/middle.png')}
                        style={styles.iiimage}
                    />
                    <Text style={styles.NavTextbugdet}>Budget</Text>
                </View>
                <View style={styles.do}>
                    <IonicIcon name='pricetag-sharp' size={30} color={'gray'} ></IonicIcon>
                    <Text style={styles.NavText}>Local Deals</Text>
                </View>
                <View style={styles.do}>
                    <IonicIcon name='chatbubble-ellipses-sharp' size={30} color={'gray'} ></IonicIcon>
                    <Text style={styles.NavText}>Messages</Text>
                </View>


            </View>

        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    
    floatcontainer:{
        
    position: "absolute",
    bottom: 20,
    right: 20,
},
    mainContainer: {
        flex: 1,
         //marginHorizontal: 5,
         //marginVertical: 5,
    },
    insidecontainer: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 15,

    },
    container: {
        flexDirection: 'row',
        gap: 100,
        justifyContent: 'space-between',

    },
    container0: {
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    container1: {
        bottom:10,
        right:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
       // alignItems: 'center',
        //alignItems: 'flex-end', // Aligns "Skip all" to the right of the screen
    },
    contain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Aligns "Skip all" to the right of the screen
    },
    container11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        left:8,
    },
    containerr: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        bottom:6,
        left:10,

    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        width: '70%',
        height: 30,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 30,
        color: '#1DCC2E',
        borderColor: 'gray',

    },
    textt: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10

    },
   


    ttexxt: {
        color: '#4A4A4A',
        fontWeight: 'bold',
       // marginLeft: 10,
       bottom:12,
    },
    centeredText: {
        color: 'gray',
       // marginLeft: 10,
        //marginTop: 10
    },
    centeredTextt: {
        color: 'gray',

    },

    welcomeText: {
        color: '#1DCC2E',
        fontSize: 20,
        //marginHorizontal: 10

    },
    input: {
        flex: 1,
        width: '95%',
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
        color: '#1DCC2E',

    },
    image: {
        borderRadius: 50,
        margin: 10,
    },
    iimage: {
        //width: 34,
        //  height: 34,
        borderRadius: 10,
        margin: 10,
    },
    iiimage: {
        width: 90, // Adjust to fit your image's size
        height: 90,
        resizeMode: 'contain',
    },

    imageBackground: {
    // width: itemWidth,
        height: 180,
        justifyContent: 'flex-end',
        padding: 15,
        width: 200,
        resizeMode: "cover",
       // borderRadius: 50,
        // marginLeft: -20,
        marginLeft:-70
    
    },
imageBorderRadius: {
        borderRadius: 10,
    },
    searchBar: {
        marginBottom: 10,
    },
    inputContainer: {
        backgroundColor: '#f0f0f0',
    },
    mContainer: {
        flexDirection: 'row',
        marginLeft: 50,
        // backgroundColor: "white",
        // resizeMode:"cover",
        // //boxShadow:"black",
        // //borderColor:"black",
        // marginVertical: 10,
        // marginHorizontal: 10,
        // borderRadius: 30,
        // maxHeight: 170,
        // maxwidth: 180,

        justifyContent: 'center',
        //alignItems: 'center',
    },
  slide: {
        //borderRadius: 10,
        //overflow: 'hidden',
        //shadowColor: '#000',
        //shadowOpacity: 0.3,
        //shadowRadius: 10,
        //elevation: 5,
        //paddingHorizontal:-10,
        //paddingVertical:20,
    },
      textTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        //bottom:10,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        //marginLeft: 1,
        marginTop: 1,
        //marginHorizontal:1,
        marginVertical:40,
    },
    // slide1: {
    //     flexDirection: 'row',
    //     //marginVertical: 20,    // Arrange items in a row
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-end',
    //     // flex: 1,
    //     // justifyContent: 'center',
    //     //alignItems: 'center',

    // },
    // slide2: {
    //     flexDirection: 'row',
    //     //marginVertical: 20,    // Arrange items in a row
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-end',
    // },
    buttonn: {
        backgroundColor: 'transparent',
        //borderColor: 'red',
        // borderHeight: 10,
        borderRadius: 5,
        //fontSize:20,
        borderColor: '#1DCC2E',
        borderWidth: 1,
        //marginVertical: ,

    },
    buttonnContainer: {
        width: 90,
        // marginHorizontal: 5,
        paddingHorizontal: 5,
        padding: 0,

        //marginTop: 70
        height: 35,
    },

    button: {
        backgroundColor: '#1DCC2E',
        //borderColor: 'transparent',
        //borderHeight: 10,
        borderRadius: 5,
        //marginVertical: 10,

    },
    buttonContainer: {
        height: 40,
        width: 160,
        //marginHorizontal: 20,
        //marginTop: 90,
        //paddingHorizontal:5,
         paddingTop:10,
         width: '100%',
        alignSelf: 'center',
        //marginTop: 10,

    },
    buttonTitle: {
        bottom:1,
        fontSize: 11,
        color: 'white',
    },
    con: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#1DCC2E'
    },
    tex: {
        //margin: 5,
        bottom: 10
       // fontSize:20,
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        //marginTop: 5,



    },
    iinline: {
        flexDirection: 'row',
        marginBottom: 10,

    },
    clr: {
        color: '#1DCC2E',
        // marginRight:3,
        alignItems: 'flex-end',



    },
    set: {
        flexDirection: 'row',
        gap: 10,
        // alignItems: 'flex-end',
        //justifyContent: 'space-between',

    },
    down: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
         padding: 10,
        height:80,
       position: 'absolute', // Makes it fixed on the screen
        bottom: 0, // Positions it at the bottom
        width: '100%', // Full width of the screen
        backgroundColor: 'white', // Optional background color for clarity
        borderTopWidth: 1, // Optional border for a top divider
        borderTopColor: 'white',
    },
    do: {
        flexDirection: 'column', // Ensures icon and text are stacked vertically
        alignItems: 'center', // Centers items horizontally
        justifyContent: 'center', // Centers items vertically
        //padding: 8,
    },
    dodo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //marginVertical:10,
        //marginTop:20,
        // position:"relative",
        bottom: 14,

    },
    concon: {
        flexDirection: 'row',
        marginBottom: 10,
        //gap: 100,
        justifyContent: 'space-between',
    },
    blacky: {
        fontWeight: 'bold',
        color: '#4A4A4A',
        fontSize: 18,
        fontStyle: 'italic',
        
    },
    NavText: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: 'gray',

    },
    NavTextbugdet: {
        marginTop: -5,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: 'gray',
    },
    ttexx:{
marginBottom:20,
    },

});
