import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Sales() {
    return (
        <View style={styles.container}>
	        <Text>What is Sales? </Text>
	        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste exercitationem harum quaerat numquam tempore impedit doloribus, officiis distinctio, similique sunt, neque quam quod blanditiis doloremque praesentium eum vitae tempora nemo.</Text>
	       	<Text>How to be a guru in Sales? </Text>
	       	<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestiae debitis, magni id illum sapiente impedit qui ut in facere quia, ipsam expedita eaque eveniet provident nihil, culpa, cupiditate! Recusandae?</Text>        
	       	<Text>How do I maximize Sales? </Text>
	       	<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error cum atque distinctio, modi id tenetur expedita ipsam? Quis minus deserunt consectetur officia, dolorem, labore rem sint tenetur quae suscipit.</Text>
	       	<Text>What does Sell Smarter does? </Text>
	       	<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod praesentium quibusdam non aspernatur repellendus minus ex voluptatibus sint. Consectetur quo, doloribus unde. Eligendi aperiam nulla ea quam. Deleniti, id incidunt.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  Text: {
    margin: 16,
  },
});

export default Sales