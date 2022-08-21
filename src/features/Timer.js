import { View, StyleSheet, Text, Vibration } from 'react-native';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { spacing } from '../utils/sizes';
import React, { useState } from 'react';
import { colors } from '../utils/colors';
import { Timing } from './Timing';



const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

const onEnd = (reset) => {
  Vibration.vibrate(PATTERN);
  setHasStarted(false);
  setProgress(1);
  reset();
  onTimerEnd(focusSubject);
}



  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!hasStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          minutes={minutes}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>I am focusing on</Text>
          <Text style={styles.task}> {focusSubject} </Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBarColor}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonwrapper}>
        {!hasStarted && (
          <RoundedButton title="start" onPress={() => setHasStarted(true)} />
        )}
        {hasStarted && (
          <RoundedButton title="pause" onPress={() => setHasStarted(false)} />
        )}
      </View>

      <View style={styles.buttonwrapper}>
      <RoundedButton size={100} title='cancel' onPress={clearSubject} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    justifyContent: 'center'
  },
  buttonwrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
