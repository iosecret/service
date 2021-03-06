import dayjs from 'dayjs';

const oneHourStamp = 60 * 60000;
const oneDayStamp = 24 * oneHourStamp;
const isNull = (time: string | number | Date): boolean => !time || time === 'null';

/**
 * 格式化时间
 *
 * @param time
 * @param format
 * @returns
 */
export const formatDate = (time: string | number | Date, format = 'YYYY-MM-DD'): string => {
  if (isNull(time)) return '';

  return dayjs(time).format(format);
};

/**
 * 格式化起止时间
 *  2021.08.16 21:05 - 22:00
 *
 * @param start
 * @param end
 * @param format
 * @returns
 */
export const formatStartEndTime = (start: string | number | Date, end: string | number | Date, format = 'YYYY.MM.DD HH:mm'): string => {
  if ((isNull(start) && isNull(end)) || (!isNull(start) && !isNull(end) && start > end)) return '';

  const times = [formatDate(start, format)];

  // 大于一天 展示全天
  if (end) {
    const endDate = new Date(end);
    const startDate = new Date(start);

    times.push(formatDate(end, endDate.getTime() - startDate.getTime() > oneDayStamp || endDate.getDate() !== startDate.getDate() ? format : 'HH:mm'));
  }

  return times.join(' - ');
};

/**
 * 计算距今间隔时间
 *
 * @param start
 * @param end
 *
 * @returns
 */
export const formatRemainStartTime = (start: string | number | Date, end: string | number | Date): string => {
  const nowStamp = Date.now();

  start = isNull(start) ? 0 : new Date(start).getTime();
  end = isNull(end) ? 0 : new Date(end).getTime();

  if (isNull(start) || (end && end < nowStamp) || (start && start < nowStamp)) return '';

  const remindStamp = +start - nowStamp;
  const remindDay = Math.floor(+remindStamp / oneDayStamp);
  const remindHourStamp = remindStamp - remindDay * oneDayStamp;
  const remindHours = Math.floor(remindHourStamp / oneHourStamp);
  const remindMinuteStamp = remindHourStamp - remindHours * oneHourStamp;
  const remindMinutes = Math.floor(remindMinuteStamp / 60000);

  const buffer: string[] = [];
  remindDay && buffer.push(`${remindDay}天`);
  remindHours && buffer.push(`${remindHours}小时`);
  remindMinutes && buffer.push(`${remindMinutes}分`);
  return buffer.join('');
};
