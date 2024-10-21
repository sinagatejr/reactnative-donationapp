import React from 'react';
import style from './style';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <Icon name="arrow-left" />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
