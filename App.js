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
        classesDisplay:'block',
        classDisplay:'none',
        levelsDisplay:'block',
        levelDisplay:'none',
        currentClass: '',
        currentLevel: '',
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        check1:false,
        stats:['Strength','Dexterity','Constitution','Inteligence','Wisdom','Charisma'],
        classes:['Choose Your Class (scroll)','Fighter','Barbarian','Ranger','Paladin','Bard','Warlock','Wizard','Sorcerer','Druid'],
        levels:['Level (scroll)',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        skills:[{s:'Athletics',id:0,n:0,p:false},{s:'Acrobatics',id:1,n:1,p:false},{s:'Sleight of Hand',id:1,n:2,p:false},{s:'Stealth',id:1,n:3,p:false},{s:'Arcana',id:2,n:4,p:false},{s:'History',id:2,n:5,p:false},{s:'Investigation',id:2,n:6,p:false},{s:'Nature',id:2,n:7,p:false},{s:'Religion',id:2,n:8,p:false},{s:'Animal Handeling',id:3,n:9,p:false},{s:'Insight',id:3,n:10,p:false},{s:'Medicine',id:3,n:11,p:false},{s:'Perception',id:3,n:12,p:false},{s:'Survival',id:3,n:13,p:false},{s:'Deception',id:4,n:14,p:false},{s:'Indimidation',id:4,n:15,p:false},{s:'Performance',id:4,n:16,p:false},{s:'Persuasion',id:4,n:17,p:false},],
        spells:[],
        newSpell: 'Add a Spell',
        attacks:[],
        newAttack: 'Add an Attack',
        equipment: 'Add Equipment',
        features: 'Add Features',
        hp: 'HP',
        thp: 'THP',
        ac: 'AC',
        spd: 'SPD',
        name: 'Name',
        subclass: 'Subclass',
        sts: 'Death Saving Throws',
        hitDie: 'Hit Die',
        backstory: 'Add Backstory Here',
        race: 'Race',
        align: 'Alignment',
        bgd: 'Background',
        age: 'Age',
        height: 'Height',
        weight:'Weight',
        eyes:'Eyes',
        skin:'Skin',
        hair:'Hair'
    }

    pickClass = (c) => {
      this.setState({ currentClass: c,
                      classDisplay: 'block',
                      classesDisplay: 'none'
      })
    }

    pickLevel = (l) => {
      this.setState({ currentLevel: l,
                      levelDisplay: 'block',
                      levelsDisplay: 'none'
      })
    }
    pickLevel = (l) => {
      this.setState({ currentLevel: l,
                      levelDisplay: 'block',
                      levelsDisplay: 'none'
      })
    }

    addSpell = (spell) => {
      this.state.spells.splice(this.state.spells.length, 0, {spell})
    }

    skillMod = (s) => {
      if(s==0){return Math.floor((this.state.str-10)/2)}
      else if(s==1){return Math.floor((this.state.dex-10)/2)}
      else if(s==2){return Math.floor((this.state.int-10)/2)}
      else if(s==3){return Math.floor((this.state.wis-10)/2)}
      else {return Math.floor((this.state.cha-10)/2)}
    }
    
    profCheck = (en,ids,ess,pey) => {
      if(pey == false){this.state.skills.splice(n,1,{s:ess,id:ids,n:en,p:true})}
      else {this.state.skills.splice(n,1,{s:ess,id:ids,n:en,p:false})}
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={{display:this.state.page1Display}}>
                  <View style={styles.main}>
                    <View style={{height:deviceHeight/12,width:deviceWidth,borderWidth:1, alignItems:'center', justifyContent:'center'}}>
                      <TextInput style={{height:deviceHeight/13,width:deviceWidth/1.5,borderWidth:1, textAlign:'center'}}
                        onChangeText={(name) => this.setState({name})}
                        value = {this.state.name}
                      />
                    </View>
                    <View style={{height: deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                        <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,flexDirection:'row',}}>
                            <ScrollView style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,flexDirection:'row', display: this.state.classesDisplay}}>
                              {this.state.classes.map((t) => (
                                <TouchableHighlight
                                  onPress={() => {this.pickClass(t)}}>
                                  <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                                    {t}
                                  </View>
                                </TouchableHighlight>
                              ))}
                            </ScrollView>
                            <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center',display:this.state.classDisplay}}>
                              <TouchableHighlight
                                onPress={() => {this.setState({classDisplay:'none',classesDisplay:'block'})}}  
                              >
                                <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                                  {this.state.currentClass} (click again to change)
                                </View>
                              </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,flexDirection:'row'}}>
                        <ScrollView style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,flexDirection:'row', display: this.state.levelsDisplay}}>
                              {this.state.levels.map((t) => (
                                <TouchableHighlight
                                  onPress={() => {this.pickLevel(t)}}>
                                  <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                                    {t}
                                  </View>
                                </TouchableHighlight>
                              ))}
                            </ScrollView>
                            <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center',display:this.state.levelDisplay}}>
                              <TouchableHighlight
                                onPress={() => {this.setState({levelDisplay:'none',levelsDisplay:'block'})}}  
                              >
                                <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                                  {this.state.currentLevel} (click again to change)
                                </View>
                              </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={{height: deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                      <TextInput 
                        style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}
                        onChangeText={(subclass) => this.setState({subclass})}
                        value={this.state.subclass}
                        />
                      <View style={{height: deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'center'}}>
                          Prof: {Math.floor((this.state.currentLevel-1)/4)+2}
                      </View>
                    </View>
                    <View style={{height:7*deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                      <View style={{height:7*deviceHeight/12,width:deviceWidth/3,borderWidth:1,justifyContent:'space-around',alignItems:'center'}}>
                          <View>
                            <View style={styles.statName}>
                              <Text> {this.state.stats[0]} </Text>
                            </View>
                            <View style={styles.statHolder}>
                              <TextInput
                                style = {styles.stat}
                                keyboardType='numeric'
                                onChangeText={(str) => this.setState({str})}
                                value = {this.state.str}
                              />
                              <View style={styles.statMod}>
                                <Text> {Math.floor((this.state.str-10)/2)} </Text>
                              </View>
                            </View>
                            <View style={styles.statName}>
                              <Text> {this.state.stats[1]} </Text>
                            </View>
                            <View style={styles.statHolder}>
                            <TextInput
                                style = {styles.stat}
                                keyboardType='numeric'
                                onChangeText={(dex) => this.setState({dex})}
                                value = {this.state.dex}
                              />
                              <View style={styles.statMod}>
                                <Text> {Math.floor((this.state.dex-10)/2)} </Text>
                              </View>
                            </View>
                            <View style={styles.statName}>
                              <Text> {this.state.stats[2]} </Text>
                            </View>
                            <View style={styles.statHolder}>
                            <TextInput
                                style = {styles.stat}
                                keyboardType='numeric'
                                onChangeText={(con) => this.setState({con})}
                                value = {this.state.con}
                              />
                              <View style={styles.statMod}>
                                <Text> {Math.floor((this.state.con-10)/2)} </Text>
                              </View>
                            </View>
                            <View style={styles.statName}>
                              <Text> {this.state.stats[3]} </Text>
                            </View>
                            <View style={styles.statHolder}>
                            <TextInput
                                style = {styles.stat}
                                keyboardType='numeric'
                                onChangeText={(int) => this.setState({int})}
                                value = {this.state.int}
                              />
                              <View style={styles.statMod}>
                                <Text> {Math.floor((this.state.int-10)/2)} </Text>
                              </View>
                            </View>
                            <View style={styles.statName}>
                              <Text> {this.state.stats[4]} </Text>
                            </View>
                            <View style={styles.statHolder}>
                            <TextInput
                                style = {styles.stat}
                                keyboardType='numeric'
                                onChangeText={(wis) => this.setState({wis})}
                                value = {this.state.wis}
                              />
                              <View style={styles.statMod}>
                                <Text> {Math.floor((this.state.wis-10)/2)} </Text>
                              </View>
                            </View>
                            <View style={styles.statName}>
                              <Text> {this.state.stats[5]} </Text>
                            </View>
                            <View style={styles.statHolder}>
                            <TextInput
                                style = {styles.stat}
                                keyboardType='numeric'
                                onChangeText={(cha) => this.setState({cha})}
                                value = {this.state.cha}
                              />
                              <View style={styles.statMod}>
                                <Text> {Math.floor((this.state.cha-10)/2)} </Text>
                              </View>
                            </View>
                          </View>
                      </View>
                      <View style={{height:7*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:2*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                          <TextInput style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center', textAlign:'center'}}
                            keyboardType='numeric'
                            onChangeText={(hp) => this.setState({hp})}
                            value = {this.state.hp}
                          />
                          <TextInput style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center', textAlign:'center'}}
                            keyboardType='numeric'
                            onChangeText={(thp) => this.setState({thp})}
                            value = {this.state.thp}
                          />
                          <TextInput style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center', textAlign:'center'}}
                            keyboardType='numeric'
                            onChangeText={(ac) => this.setState({ac})}
                            value = {this.state.ac}
                          />
                          <TextInput style={{height:2*deviceHeight/12,width:deviceWidth/7,borderWidth:1,alignItems:'center',justifyContent:'center', textAlign:'center'}}
                            keyboardType='numeric'
                            onChangeText={(spd) => this.setState({spd})}
                            value = {this.state.spd}
                          />
                        </View>
                          <View style={{height:1*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1,justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
                            <TextInput style={{height:deviceHeight/12,width:deviceWidth/3,borderWidth:1,alignItems:'center',justifyContent:'center', textAlign:'center'}}
                              onChangeText={(sts) => this.setState({sts})}
                              value = {this.state.sts}
                            />
                            <TextInput style={{height:deviceHeight/12,width:deviceWidth/3,borderWidth:1,alignItems:'center',justifyContent:'center', textAlign:'center'}}
                              onChangeText={(hitDie) => this.setState({hitDie})}
                              value = {this.state.hitDie}
                            />
                        </View>
                        <View style={{height:4*deviceHeight/12,width:2*deviceWidth/3,borderWidth:1}}>
                          <ScrollView style={{flexDirection:'row'}}>
                                {this.state.skills.map((t) => (
                                  <View style={{flexDirection:'row'}}>
                                    <View style={{height:1*deviceHeight/12,width:4*deviceWidth/9,borderWidth:1}}> 
                                      {t.s}
                                    </View>
                                    <View style={{height:1*deviceHeight/12,width:2*deviceWidth/9,borderWidth:1}}>
                                      Mod: {this.skillMod(t.id)}
                                    </View>
                                  </View>
                                ))}
                          </ScrollView>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{display:this.state.page2Display}}>
                  <View style={styles.main}>
                    <View style={{height:5*deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                      <View style={{height:5*deviceHeight/12,width:deviceWidth/2,borderWidth:1}}>
                          <View style={{height:deviceHeight/12,width:deviceWidth/2,borderWidth:1,justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'row'}}>
                            <TextInput
                                style = {{height:deviceHeight/12,width:3*deviceWidth/8,borderWidth:1,textAlign:'center'}}
                                onChangeText={(newSpell) => this.setState({newSpell})}
                                value = {this.state.newSpell}
                              />
                            <TouchableHighlight
                              onPress={() => {
                                this.state.spells.splice(this.state.spells.length,0,this.state.newSpell);
                                this.setState({newSpell:'Add a Spell'});
                              }}
                            >
                              <View style={{height:deviceHeight/12,width:deviceWidth/8,borderWidth:1}}> + </View>
                            </TouchableHighlight>
                          </View>
                          <View style={{height:4*deviceHeight/12,width:deviceWidth/2,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                            <ScrollView>
                              {this.state.spells.map((t) => (
                                <View style={{height:deviceHeight/12,width:deviceWidth/2,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                                  {t}
                                </View>
                              ))}
                            </ScrollView>
                          </View>
                      </View>
                      <View style={{height:5*deviceHeight/12,width:deviceWidth/2,borderWidth:1}}>
                          <View style={{height:deviceHeight/12,width:deviceWidth/2,borderWidth:1,justifyContent:'center',alignItems:'center',textAlign:'center',flexDirection:'row'}}>
                            <TextInput
                                style = {{height:deviceHeight/12,width:3*deviceWidth/8,borderWidth:1,textAlign:'center'}}
                                onChangeText={(newAttack) => this.setState({newAttack})}
                                value = {this.state.newAttack}
                              />
                            <TouchableHighlight
                              onPress={() => {
                                this.state.attacks.splice(this.state.attacks.length,0,this.state.newAttack);
                                this.setState({newAttack:'Add an Attack'});
                              }}
                            >
                            
                              <View style={{height:deviceHeight/12,width:deviceWidth/8,borderWidth:1}}> + </View>
                            </TouchableHighlight>
                          </View>
                          <View style={{height:4*deviceHeight/12,width:deviceWidth/2,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                            <ScrollView>
                              {this.state.attacks.map((t) => (
                                <View style={{height:deviceHeight/12,width:deviceWidth/2,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                                  {t}
                                </View>
                              ))}
                            </ScrollView>
                          </View>
                      </View>
                    </View>
                    <View style={{height:5*deviceHeight/12,width:deviceWidth,borderWidth:1,flexDirection:'row'}}>
                      <View style={{height:5*deviceHeight/12,width:deviceWidth/2,borderWidth:1}}>
                        <TextInput
                                style = {{height:5*deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'left'}}
                                onChangeText={(equipment) => this.setState({equipment})}
                                value = {this.state.equipment}
                                multiline={true}
                        />
                      </View>
                      <View style={{height:5*deviceHeight/12,width:deviceWidth/2,borderWidth:1}}>
                        <TextInput
                                  style = {{height:5*deviceHeight/12,width:deviceWidth/2,borderWidth:1,textAlign:'left'}}
                                  onChangeText={(features) => this.setState({features})}
                                  value = {this.state.features}
                                  multiline={true}
                          />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{display:this.state.page3Display}}>
                  <View style={styles.main}>
                    <View style={{height:5*deviceHeight/6,width:deviceWidth,justifyContent:'space-around',alignItems:'center'}}>
                      <View style={{height:deviceHeight/2.5,width:deviceWidth,borderWidth:1}}>
                        <View style={{height:deviceHeight/10,width:deviceWidth,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}>
                            Backstory
                        </View>
                        <TextInput 
                          style={{height:3*deviceHeight/10,width:deviceWidth,borderWidth:1}}
                          onChangeText={(backstory)=>this.setState({backstory})}
                          value={this.state.backstory}
                          multiline={true}
                        />
                      </View>
                      <View style={{height:deviceHeight/2.5,width:deviceWidth,borderWidth:1}}>
                        <View style={{height:deviceHeight/2.5,width:deviceWidth,borderWidth:1}}>
                          <View style={{height:deviceHeight/10,width:deviceWidth,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}>
                              Character
                          </View>
                          <View style={{height:deviceHeight/10,width:deviceWidth,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(race)=>this.setState({race})}
                              value={this.state.race}
                            />
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(align)=>this.setState({align})}
                              value={this.state.align}
                            />
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(bgd)=>this.setState({bgd})}
                              value={this.state.bgd}
                            />
                          </View>
                          <View style={{height:deviceHeight/10,width:deviceWidth,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(age)=>this.setState({age})}
                              value={this.state.age}
                            />
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(height)=>this.setState({height})}
                              value={this.state.height}
                            />
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(weight)=>this.setState({weight})}
                              value={this.state.weight}
                            />
                          </View>
                          <View style={{height:deviceHeight/10,width:deviceWidth,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(eyes)=>this.setState({eyes})}
                              value={this.state.eyes}
                            />
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(skin)=>this.setState({skin})}
                              value={this.state.skin}
                            />
                            <TextInput style={{height:deviceHeight/10,width:deviceWidth/3,borderWidth:1,textAlign:'center',alignItems:'center',justifyContent:'center'}}
                              onChangeText={(hair)=>this.setState({hair})}
                              value={this.state.hair}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    
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
      textAlign: 'center',
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
    unpressed: {
      height:1*deviceHeight/24,
      width:deviceWidth/9,
      borderWidth:1
    },
    pressed: {
      height:1*deviceHeight/24,
      width:deviceWidth/9,
      borderWidth:1,
      backgroundColor:'black'
    },
});
