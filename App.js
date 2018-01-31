import React, {
  Component
} from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native'
import {
  Button
} from 'react-native-elements'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.data1 = [{
      key: 1,
      selected: false
    }, {
      key: 2,
      selected: false
    }, {
      key: 3,
      selected: false
    }, {
      key: 4,
      selected: false
    }, {
      key: 5,
      selected: false
    }]
    this.data2 = []
    this.state = {
      count: 0,
      dataSource: this.data1,
      dataSource2: this.data2
    }
  }
  onPress = () => {
    var _arrtoo = this.state.dataSource.slice(0);
    var _count = this.state.count + 1
    _arrtoo.push({
      key: this.data1.length + _count,
      selected: false
    })
    this.setState({
      count: _count,
      dataSource: _arrtoo
    })

  }
  _onPressButton = (item) => {
    //搜索需要改变的元素
    var arrtoo = this.state.dataSource.slice(0);
    var tempi = arrtoo.find(
      function(i, v, arr) {
        return i.key == item.key
      }
    )
    //设置元素
    tempi.selected = !tempi.selected
    //选中的数组 
    var arrSelected = []
    for (var i in arrtoo) {
      if (arrtoo[i].selected == true) {
        arrSelected.push(arrtoo[i])
      }
    }
    //设置数据刷新
    this.setState({
      dataSource: arrtoo,
      dataSource2: arrSelected
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.viewItem1}>
            <FlatList ref="_flatlist" style={styles.viewItemsub} data={this.state.dataSource} renderItem={({item}) => item.selected ? <TouchableOpacity onPress={this._onPressButton.bind(this,item)}><Text style={styles.itemS}>{item.key}</Text></TouchableOpacity>: <TouchableOpacity  onPress={this._onPressButton.bind(this,item)}><Text style={styles.itemN}>{item.key}</Text></TouchableOpacity>}
            />
            <FlatList style={styles.viewItemsub} data={this.state.dataSource2} renderItem={({item}) => <TouchableOpacity onPress={this._onPressButton.bind(this,item)}><Text style={styles.itemS}>{item.key}</Text></TouchableOpacity>}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Touch Here </Text>
          </TouchableOpacity>
          <Button onPress={this.onPress} containerViewStyle={styles.buttonContainerstyle} buttonStyle={{height:30, width: 100}} borderRadius={5}  icon={{name:'cached'}}  title='中文'  backgroundColor='#F20D5E' />
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>
              { this.state.count !== 0 ? this.state.count: null}
            </Text>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainerstyle: {
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  viewItem1: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    paddingTop: 50,
    backgroundColor: '#eeeeee'
  },
  itemS: {
    fontSize: 20,
    backgroundColor: '#dddddd'
  },
  itemN: {
    fontSize: 20,
    backgroundColor: '#FFFFFF'
  },
  viewItemsub: {
    paddingHorizontal: 10,
    flex: 1,
    height: '100%',
    backgroundColor: '#eeeeee'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  alist: {
    backgroundColor: '#eeeeee'
  },
  countText: {
    color: '#FF00FF'
  }
})