import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Sales() {
    return (
        <View style={styles.container}>
          <Text style={styles.Text}>We are all in the business of selling: selling is an essential life skill that everyone must have in order to survive in these times, whether you are in business or not, you must be able to sell.

            Over the years I have learned that business requires 80 % of SALES, MARKETING, CUSTOMER CARE and only about 20% of subject speacialisation or product knowledge. 
            You may be offering a great product or service, but if you are not making SALES you will soon close shop.

            Look at where you are, look at the challenges that you’ve encountered, look at what is to be achieved. What is the output you are looking for? 
            If you answer these questions, you will know what inputs you should be putting into the system. Remember, 
            if what you’re putting is not enough, what you will take out will not be enough either.

            This is the book that will take you to your dreams; it will help you achieve your sales targets. I don’t want you to do it alone, let’s do this together. </Text>

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