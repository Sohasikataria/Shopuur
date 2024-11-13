import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Comments = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} style={styles.backButton}>
                    <IonicIcon name='chevron-back-outline' size={20} color='gray' ></IonicIcon>
                </TouchableOpacity>
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
                    <Text style={styles.text}> 44 people liked!</Text>

                </View>
                <View style={styles.set}>
                    <IonicIcon name='heart-sharp' size={20} color={'#1DCC2E'} ></IonicIcon>
                    <Text style={styles.clr}>44</Text>
                    <IonicIcon name='chatbubble-sharp' size={18} color={'gray'} ></IonicIcon>                        
                    <Text style={styles.clr}>2</Text>
                    <IonicIcon name='arrow-redo-sharp' size={20} color={'gray'} ></IonicIcon>
                </View>



            </View>



            <View style={styles.comment}>
                <View style={styles.contain1}>
                    <Image
                        source={require('../assets/PP.png')}
                        style={styles.image}
                    />
                    {/* <View style={styles.combine}> */}
                    <View style={styles.container123}>

                        <Text style={styles.texxt}>Julia Jane</Text>
                        <Text>{''}. {''}</Text>
                        <Text style={styles.hrs}>Mcnair</Text>

                    </View>

                </View>

                <View style={styles.container11}>
                    <IonicIcon name='ellipsis-horizontal' size={24} color={'gray'} ></IonicIcon>

                </View>
            </View>

            {/* <View style={styles.combine}> */}

                <View style={styles.ccontainerText}>
                    <Text style={styles.ttex}>
                        I strongly recommend Macbook pro 21 with 16 inches
                        screen. I'm personally using it and it's the best machine in
                        budget.
                    </Text>


                {/* </View> */}
            </View>
            <View style={styles.inline0}>
                <View style={styles.inline1}>
                    <Text style={styles.hrs}> 18h</Text>
                    <IonicIcon name='heart-sharp' size={20} color={'#1DCC2E'} ></IonicIcon>
                    <Text style={styles.clr}>1</Text>

                </View>
                <View style={styles.sett}>
                    <Text>Like</Text>
                    <Text> Reply </Text>
                    <Text>Share </Text>
                </View>



            </View>



            <View style={styles.comment}>
                <View style={styles.contain1}>
                    <Image
                        source={require('../assets/PP.png')}
                        style={styles.image}
                    />
                    {/* <View style={styles.combine}> */}
                    <View style={styles.container123}>

                        <Text style={styles.texxt}>Josh Little</Text>
                        <Text>{''}. {''}</Text>
                        <Text style={styles.hrs}>Mcnair</Text>

                    </View>

                </View>

                <View style={styles.container11}>
                    <IonicIcon name='ellipsis-horizontal' size={24} color={'gray'} ></IonicIcon>

                </View>
            </View>

                <View style={styles.ccontainerText}>
                    <Text style={styles.ttex}>
                    I'm using Macbook pro 21. I noticed a heating issue, kindly
                    check that before purchasing it.
                    </Text>

            </View>
            <View style={styles.inline0}>
                <View style={styles.inline1}>
                    <Text style={styles.hrs}> 18h</Text>
                    <IonicIcon name='heart-sharp' size={20} color={'#1DCC2E'} ></IonicIcon>
                    <Text style={styles.clr}>8</Text>

                </View>
                <View style={styles.sett}>
                    <Text>Like</Text>
                    <Text> Reply </Text>
                    <Text>Share </Text>
                </View>



            </View>

            <View style={styles.iconfield}>
            <IonicIcon name='camera' size={30} color={'gray'} ></IonicIcon>
            <IonicIcon name='location' size={30} color={'gray'} ></IonicIcon>
            <View style={styles.container1}>
        <IonicIcon name='search-outline' size={20} ></IonicIcon>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          onBlur={() => handleBlur('text')}
          value={text}
          placeholder="Search Location"
          placeholderTextColor={'gray'}

        />

      </View>

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
    )
}

export default Comments

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    container: {
        // marginHorizontal: 10,
       //top:10, 
        flexDirection: 'row',
        gap: 100,
        justifyContent: 'space-between',

    },
    container1: {
        // bottom: 20,
        right: 10,
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
    comment: {
        //    margin: 10,
        // top: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        //alignItems: 'flex-end', // Aligns "Skip all" to the right of the screen
    },

    contain1: {
        // bottom:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Aligns "Skip all" to the right of the screen
    },

    container11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        left: 8,
    },
    container123: {
        flexDirection: 'row',
        bottom:5,
    },
    // combine: {
    //     flexDirection: 'column',

    // },
    iconfield:{
flexDirection:'row',


    },
    ccontainerText: {
        //backgroundColor:'red',
        flexDirection: 'row',
        alignItems: 'center',
       // marginTop: 10,
        // marginHorizontal:10,
        // marginVertical:10,
           marginRight: 40,
    },
    image: {
        borderRadius: 50,
        margin: 10,
    },
    iiimage: {
        width: 90, // Adjust to fit your image's size
        height: 90,
        resizeMode: 'contain',
    },
    texxt: {
        color: '#4A4A4A',
        fontWeight: 'bold',
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        //marginTop: 10,
    },
    text: {
        color: '#1DCC2E'
    },
    tex: {
        //margin: 5,
        // bottom: 10
        // fontSize:20,
    },
    ttex: {
        //margin: 5,
        bottom: 15,
        left:40,
        // fontSize:20,
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 20,



    },
    inline0: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 30,
        // marginTop: 20,



    },
    iinline: {
        flexDirection: 'row',
        marginBottom: 10,
        // gap:10,
        //marginLeft:20,

    },
    inline1: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10,
        marginLeft: 40,
        // textAlign:'auto',

    },
    set: {
        flexDirection: 'row',
        gap: 10,
        // alignItems: 'flex-end',
        //justifyContent: 'space-between',

    },
    sett: {
        flexDirection: 'row',
        gap: 10,
        // alignItems: 'flex-end',
        //justifyContent: 'space-between',

    },
    hrs: {
        color: 'gray',
    },
    clr:{
      color:'#1DCC2E',
      marginLeft:-8,

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
})