import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles-component';

export default function Pagination({totalNews, newsPerPage, currentPage, handleChangePage}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
      pageNumbers.push(i)
  }

  return (
    <View style={styles.pagination}>
      {pageNumbers.map(number => (
         <Text style={styles[`${currentPage === number ? 'currentPage' : 'page'}`]} key = {number}
          onPress={() => handleChangePage(number)}>
            {number}
          </Text>
      ))}
    </View>
  )
}
