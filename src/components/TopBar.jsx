import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from './SearchBar'


export const TopBar = () => {
  const [value, setValue] = useState('')

  console.log(value);

  const updateValue = () => {

  }
  return (
    <View style={styles.container}>
      <SearchBar
        updateValue={updateValue}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#0366D6',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'center'
  }
})