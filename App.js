import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        page1Display: 'block',
        page2Display: 'none',
        page3Display: 'none',
        stats:[{name:'Str',val:0},{name:'Dex',val:0},{name:'Con',val:0},{name:'Int',val:0},{name:'Wis',val:0},{name:'Cha',val:0},],
        classes:['Choose Your Class','Fighter','Barbarian','Ranger','Paladin','Bard','Warlock','Wizard','Sorcerer','Druid'],
        levels:['Level',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={{display:this.state.page1Display}}>
                  <View style={styles.main}>
                    <View style={{height:deviceHeight/12,width:deviceWidth,borderWidth:1}}>
                      
                    </View>
                    <View style={{height: deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                        <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,flexDirection:'row'}}>
                          <ScrollView>
                            {this.state.classes.map((t) => (
                              <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                                {t}
                              </View>
                            ))}
                          </ScrollView>
                        </View>
                        <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,flexDirection:'row'}}>
                          <ScrollView>
                            {this.state.levels.map((t) => (
                              <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                                {t}
                              </View>
                            ))}
                          </ScrollView>
                        </View>
                    </View>
                    <View style={{height: deviceHeight/12,width:deviceWidth,borderWidth:1}}>
                        
                    </View>
                    <View style={{height:7*deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                      <View style={{height:7*deviceHeight/12,width:deviceWidth/3,borderWidth:1,justifyContent:'space-around',alignItems:'center'}}>
                        {this.state.stats.map((t) => (
                          <View>
                            <View style={styles.statName}>
                              <Text> {t.name} </Text>
                            </View>
                            <View style={styles.statHolder}>
                              <View style={styles.stat}>
                                <Text> {t.val} </Text>
                              </View>
                              <View style={styles.statMod}>
                                <Text> {Math.floor((t.val - 10)/2)} </Text>
                              </View>
                            </View>
                          </View>
                        ))}
                      </View>
                      <View style={{height:7*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:2*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                          <View style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                            HP
                          </View>
                          <View style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                            THP
                          </View>
                          <View style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                            AC
                          </View>
                          <View style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                            Spd
                          </View>
                        </View>
                        <View style={{height:1*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1}}>
                        
                        </View>
                        <View style={{height:4*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1}}>
                        
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{display:this.state.page2Display}}>
                  <View style={styles.main}>
                    < Text>2</Text>
                  </View>
                </View>
                <View style={{display:this.state.page3Display}}>
                  <View style={styles.main}>
                    < Text>3</Text>
                  </View>
                </View>
                <View style={styles.navbar}>
                  <TouchableHighlight
                    onPress={ () => this.setState({page1Display: 'block',page2Display: 'none',page3Display:'none'})}>
                    <View style={styles.navbutton}>
                      <Text> Stats </Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={ () => this.setState({page1Display: 'none',page2Display: 'block',page3Display:'none'})}>
                    <View style={styles.navbutton}>
                      <Text> Attacks </Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={ () => this.setState({page1Display: 'none',page2Display: 'none',page3Display:'block'})}>
                    <View style={styles.navbutton}>
                      <Text> Character </Text>
                    </View>
                  </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        width:deviceWidth,
        height: 5 * deviceHeight/6,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    navbar: {
        width:deviceWidth,
        height: deviceHeight/6,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    navbutton: {
      width:deviceWidth/3.5,
      height: deviceHeight/8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
    },
    statHolder: {
      width:deviceWidth/3,
      height: deviceHeight/18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flexDirection:'row'
    },
    statName: {
      width:deviceWidth/3,
      height: 2*deviceHeight/54,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      flexDirection:'row'
    },
    stat: {
      width:2*deviceWidth/9,
      height: deviceHeight/18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
    },
    statMod: {
      width:deviceWidth/9,
      height: deviceHeight/18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
    },
});
