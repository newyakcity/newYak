import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default ({post}) => (
    <View key={post.id}>
        <Text>{post.title}</Text>
        <Text>{post.body.slice(0, 20)}</Text>
    </View>
)

const styles = StyleSheet.create({});