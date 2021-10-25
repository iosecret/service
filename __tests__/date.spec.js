const { formatDate, formatStartEndTime, formatRemainStartTime } = require('../dist/index');

const _t = (n) => (n < 10 ? `0${n}` : n);

const now = new Date();
const nowDate = `${now.getFullYear()}-${_t(now.getMonth() + 1)}-${_t(now.getDate())}`;

test('formatDate', () => {
  expect(formatDate(now)).toBe(`${nowDate}`);
  expect(formatDate(now, 'YYYY-MM-DD HH:mm')).toBe(`${nowDate} ${_t(now.getHours())}:${_t(now.getMinutes())}`);
  expect(formatDate(now.getTime())).toBe(`${nowDate}`);
  expect(formatDate(now.getTime(), 'YYYY-MM-DD HH:mm')).toBe(`${nowDate} ${_t(now.getHours())}:${_t(now.getMinutes())}`);
  expect(formatDate(now.toString())).toBe(`${nowDate}`);
  expect(formatDate(now.toString(), 'YYYY-MM-DD HH:mm')).toBe(`${nowDate} ${_t(now.getHours())}:${_t(now.getMinutes())}`);
});
