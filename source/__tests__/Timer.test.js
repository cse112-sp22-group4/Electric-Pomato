// to learn jest.timers -> https://jestjs.io/docs/en/timer-mocks

import Timer from '../js/classes/Timer.js';

// CONSTRUCTOR TESTS

test('Check Timers Initialized Values 1', () => {
  const minutes = 0;
  const seconds = 5;
  const FiveSecondTimer = new Timer(minutes, seconds, null);
  expect(FiveSecondTimer.minutes).toBe(minutes);
  expect(FiveSecondTimer.seconds).toBe(seconds);
});

test('Check Timers Initialized Values 2', () => {
  const minutes = 9;
  const seconds = 5;
  const timer = new Timer(minutes, seconds, null);
  expect(timer.minutes).toBe(minutes);
  expect(timer.seconds).toBe(seconds);
});

test('Check Timers Initialized Values : Minutes > 99', () => {
  const minutes = 123;
  const seconds = 50;
  const timer = new Timer(minutes, seconds, null);
  // minutes should be clamped to 99
  expect(timer.minutes).toBe(99);
  expect(timer.seconds).toBe(seconds);
});

test('Check Timers Initialized Values : Second > 59', () => {
  const minutes = 1;
  const seconds = 61;
  const timer = new Timer(minutes, seconds, null);
  expect(timer.minutes).toBe(minutes);
  // seconds should be clamped to 59
  expect(timer.seconds).toBe(59);
});

// COUNT DOWN TESTS

test('Check Timer to Return Promise', () => {
  // callback jest function and increment mutableNum
  const jestCallback = jest.fn();
  const callback = function thing() {
    jestCallback();
  };

  // timer
  const seconds = 0;
  const timer = new Timer(0, seconds, callback);
  const promise = timer.startTimer();

  return expect(promise).resolves.toBe('Timer Finished');
});

test('Check Timer Count Down 1sec and Callback Each Sec', () => {
  // callback jest function and increment mutableNum
  const jestCallback = jest.fn();
  let mutatableNum = 0;
  const callback = function thing() {
    jestCallback();
    mutatableNum += 1;
  };

  // timer
  const seconds = 1;
  const timer = new Timer(0, seconds, callback);

  // start counting
  expect(jestCallback).not.toBeCalled();
  timer.startTimer();

  // expect promise to resolve because timer ends
  expect(jestCallback).toHaveBeenCalledTimes(seconds);
  expect(mutatableNum).toBe(seconds);
});

test('Check Timer Count Down 2sec and Callback Each Sec', async () => {
  jest.useFakeTimers('modern');
  // callback jest function and increment mutableNum
  const jestCallback = jest.fn();
  let mutatableNum = 0;
  const callback = function thing() {
    jestCallback();
    mutatableNum += 1;
  };

  // timer
  const seconds = 2;
  const timer = new Timer(0, seconds, callback);

  // start counting
  expect(jestCallback).not.toBeCalled();
  timer.startTimer();
  jest.advanceTimersByTime(2000);

  // advance one second
  setTimeout(() => {
    expect(timer.minutes).toBe(0);
    expect(timer.seconds).toBe(0);
    expect(jestCallback).toHaveBeenCalledTimes(seconds);
    expect(mutatableNum).toBe(seconds);
  }, 2000);
  jest.useRealTimers();
});

test('Check Timer Count Down 1min and Access Timer Members', () => {
  jest.useFakeTimers('modern');
  // callback jest function and increment mutableNum
  const jestCallback = jest.fn();
  let mutatableNum = 0;
  const callback = function thing() {
    jestCallback();
    mutatableNum += 1;
  };

  // timer
  const minutes = 2;
  const seconds = 0;
  const timer = new Timer(minutes, seconds, callback);

  // start counting down
  expect(jestCallback).not.toBeCalled();
  timer.startTimer();

  // should have ticked down by 1 after starting
  expect(timer.seconds).toBe(59);
  expect(timer.minutes).toBe(1);

  // count down 1 minute and check the values
  jest.advanceTimersByTime(1000);
  for (let i = 1; i <= 60 - 1 - 1; i += 1) {
    expect(timer.seconds).toBe(60 - i - 1);
    expect(timer.minutes).toBe(1);
    jest.advanceTimersByTime(1000);
    // +1 because we ticked the timer 1 second prior to for-loop
    // and another +1 because starting a timer immediately callsback
    expect(mutatableNum).toBe(i + 1 + 1);
  }
});

test('Null callbackEverySecond Member Variable', () => {
  const callbackFunction = jest.fn();
  const timer = new Timer(0, 5, null);

  expect(callbackFunction).not.toBeCalled();
  timer.startTimer();

  setTimeout(() => {
    expect(callbackFunction).not.toBeCalled();
  }, 5000);
});
