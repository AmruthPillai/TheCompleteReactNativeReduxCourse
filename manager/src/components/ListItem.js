import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({
      employee: this.props.employee,
    })
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.title}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 20,
  }
})


export default ListItem;
