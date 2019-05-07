import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function Sequence() {
  const transitionSequence = (
    <Transition.Sequence>
      <Transition.Out type="scale" />
      <Transition.Change interpolation="easeInOut" />
      <Transition.In type="scale" />
    </Transition.Sequence>
  );
  const transitionShuffle = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" />
    </Transition.Together>
  );

  let [showText, setShowText] = useState(true);
  let [items, setItems] = useState([
    '🍇 Grapes',
    '🍈 Melon',
    '🍉 Watermelon',
    '🍊 Tangerine',
    '🍋 Lemon',
    '🍌 Banana',
  ]);

  const refShuffle = useRef();
  const refSequence = useRef();

  const renderShuffle = (
    <Transitioning.View
      ref={refShuffle}
      transition={transitionShuffle}
      style={styles.centerAll}>
      <Button
        title="shuffle"
        color="#FF5252"
        onPress={() => {
          refShuffle.current.animateNextTransition();
          const shuffled = items.slice();
          shuffle(shuffled);
          setItems(shuffled);
        }}
      />
      {items.map(item => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}
    </Transitioning.View>
  )

  const renderSequence = (
    <Transitioning.View
      ref={refSequence}
      transition={transitionSequence}
      style={styles.centerAll}>
      <Button
        title="show or hide"
        color="#FF5252"
        onPress={() => {
          refSequence.current.animateNextTransition();
          setShowText(!showText);
        }}
      />
      {showText && (
        <Text style={styles.text}>Tap the above button to hide me</Text>
      )}
    </Transitioning.View>
  )

  return (
    <React.Fragment>
      {renderShuffle}
      {renderSequence}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
});

export default Sequence;
