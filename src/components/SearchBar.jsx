import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export const SearchBar = ({value, updateValue, style}) => {
  const [query, setQuery] = useState()
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.iconSearchContainer}>
          <Image
            source={require('../../assets/icons/search.png')}
          />
        </View>
        <TextInput
          value={query}
          placeholder='Search...'
          onChangeText={ text => {
            setQuery(text)
            updateValue(text)
            }}
          style={styles.textInput} />
        {
          query ?
          <TouchableOpacity onPress={() => setQuery('')} style={styles.iconDeleteContainer}>
          <View style={styles.iconDeleteContainer}>
            <Image
              style={styles.iconDelete}
              source={require('../../assets/icons/delete.png')}
            />
          </View>
        </TouchableOpacity>
        : null
        }
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 10
  },
  iconDeleteContainer: {
    flex: 0.2,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput : {
    flex: 1,
    // backgroundColor: 'blue'
  },
  iconSearchContainer: {
    height: 40,
    width: 40,
    flex: 0.2,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
})