
export function videoLengthFormat(timeInSeconds) {
    const timeInSecondsNumber = Number(timeInSeconds);
    const hour = Math.floor(timeInSecondsNumber / 3600);
    const minute = Math.floor((timeInSecondsNumber - hour * 3600) / 60);
    const second = timeInSecondsNumber - minute * 60 - hour * 3600;

    const hourFormatted = String(hour).padStart(2, '0');
    const minuteFormatted = String(minute).padStart(2, '0');
    const secondFormatted = String(second).padStart(2, '0');

    return `${hourFormatted}:${minuteFormatted}:${secondFormatted}`;
}
