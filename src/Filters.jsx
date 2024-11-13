import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements'; // Import Button from react-native-elements
import React, { useState, useEffect } from 'react';
import CheckBox from 'react-native-check-box';
import Slider from '@react-native-community/slider';




const Filters = () => {
  const [text, onChangeText] = useState('');
  const [isSelected, setSelection] = useState(false);

  //  const renderThumb = useCallback(() => <Thumb/>, []);
  // const renderRail = useCallback(() => <Rail/>, []);
  // const renderRailSelected = useCallback(() => <RailSelected/>, []);
  // const renderLabel = useCallback(value => <Label text={value}/>, []);
  // const renderNotch = useCallback(() => <Notch/>, []);
  // const handleValueChange = useCallback((low, high) => {
  //   setLow(low);
  //   setHigh(high);
  // }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.tex}>Filters</Text>
        <IonicIcon name='close-circle' size={24} color='gray' ></IonicIcon>
      </View>

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
      <View style={styles.container}>
        <Text style={styles.tex}>Category</Text>
      </View>
      <View style={styles.container0}>
        <View style={styles.containerr}>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Food & groceries
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Home & Furniture
            </Text>
          </View>

          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Books & Media
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Toys & Games
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Healh & Wellness
            </Text>
          </View>


        </View>

        <View style={styles.ccontainerr}>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Beauty & Care
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Automative & Parts
            </Text>
          </View>

          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Sports & Outdoor
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Electronic & Gadgets
            </Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isSelected}
              onClick={() => setSelection(!isSelected)}
              style={styles.checkbox} // Adjust size here
              checkBoxColor='gray'
            />
            <Text style={styles.centereddTextt}>
              Clothing
            </Text>
          </View>


        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.tex}>Price Range</Text>
      </View>
      {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}
        <Slider
          style={{ width: 350, height: 10 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#1DCC2E"
          maximumTrackTintColor="#1DCC2E"
        />
        <View style={styles.con}>
         <Text style={styles.texx}>0$</Text>
         <Text style={styles.texx}>100$</Text>
         </View>

      {/* </View> */}
      <View style={styles.container}>
        <Text style={styles.tex}>Distance</Text>
      </View>
      {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}
        <Slider
          style={{ width: 350, height: 10}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#1DCC2E"
          maximumTrackTintColor="#1DCC2E"
        />
         <View style={styles.con}>
         <Text style={styles.texx}>0$</Text>
         <Text style={styles.texx}>100$</Text>
         </View>
      {/* </View> */}

      <TouchableOpacity activeOpacity={0.7}>
      <Button
        title="Apply"
       //onPress={gohome}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '200', fontSize: 18 }}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7}>
      <Button
        title="Reset"
        //onPress={gohome}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '200', fontSize: 18 }}
        buttonStyle={styles.buttonn}
        containerStyle={styles.buttonContainer}
      />
    </TouchableOpacity>




    </View>
  )
}

export default Filters;

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10
  },
  container: {
    margin: 10,
    flexDirection: 'row',
    gap: 100,
    justifyContent: 'space-between',

  },
  tex: {
    fontSize: 20,
    color:'gray',

  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    // width: '70%',
    height: 40,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 30,
    color: '#1DCC2E',
    borderColor: 'gray',

  },
  button: {
    backgroundColor: '#1DCC2E',
    borderColor: 'transparent',
    //borderWidth: 0,
    borderRadius: 30,
    marginVertical: 10,
    

  },
  buttonn: {
    backgroundColor: 'lightgray',
    borderColor: 'transparent',
    //borderWidth: 0,
    borderRadius: 30,
    marginVertical: 10,
    

  },
  buttonContainer: {
    
    width: 200,
    marginHorizontal: 70,
    //marginTop: 10
 },
  input: {
    flex: 1,
    width: '100%',
    height: 50,
    paddingleft: 10,
    borderRadius: 10,
    color: '#1DCC2E',

  },
  containerr: {
    flexDirection: 'column',
    margin: 20,
  },
  ccontainerr: {
    flexDirection: 'column',
    margin: 20,
    //marginHorizontal:-50,
  },

  container0: {
    flexDirection: 'row',
  },
  checkboxRow: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
    // marginHorizontal: 30,
    // textAlign:"left",
    // justifyContent:"left"
  },
  checkbox: {
    alignSelf: 'auto',
    //width: -20, 
    //height: -1, 
    //padding: 2, 
  },
  centereddTextt: {
    color: 'Darkgray',
    // justifyContent:"flex-start",
    //textAlign: 'left',
    marginRight: 10,
    //marginLeft:10,
    fontSize: 12,

  },
  con:{
  flexDirection: 'row',
  justifyContent:"space-between",
  margin:10,

  // marginHorizontal:80,
  },

  texx:{
    //margin:10,
    //marginHorizontal:90,
  color: '#1DCC2E',
  },
 
})