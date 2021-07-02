import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

const MealDetailScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The meal screen</Text>
            <Button title="Go back to Categories" onPress={()=>{
                props.navigation.popToTop();
            }}/>
        </View>
    );
};

const styles= StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default MealDetailScreen;