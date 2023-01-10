import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import ScrollViewExample from './components/Cards'
import { useState, useEffect } from 'react'

const App = () => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <View testID='loader' style={{flex: 1}}>
    {
      isLoading ? <ActivityIndicator size={70}  color="#00B074" style={styles.container}/>  : <ScrollViewExample />
    }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  },
})