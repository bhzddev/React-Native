import React, { Fragment } from 'react';
import { SafeAreaView, ScrollView, TextInput, StatusBar, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import ExploreModel from '@app/components/ExploreModel';

const data = [1, 2, 3, 4, 5, 6, 7];

function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput placeholder="Search" style={styles.input} />
      <ScrollView>
        {data?.map((item) => (
          <Fragment key={item}>
            <ExploreModel data={item} />
          </Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
ExploreScreen.propTypes = {
  navigation: propTypes.object,
};
export default ExploreScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1, paddingTop: StatusBar?.currentHeight },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
