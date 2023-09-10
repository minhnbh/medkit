import React, { useEffect, useState } from 'react';

const CallingTime = () => {
	let timeCountInterval: NodeJS.Timeout;
	const [time, setTime] = useState(0);
	const [formatTime, setFormatTime] = useState('00:00:00');

	const checkingIfOneDigit = (num: number) => (num < 10 ? `0${num}` : num);

	const setCounting = () => {
		if (timeCountInterval) {
			clearInterval(timeCountInterval);
		}
		timeCountInterval = setInterval(() => {
			const hour = Math.floor(time / (60 * 60));
			const minute = Math.floor((time - hour * 60) / 60);
			const second = Math.floor((time - hour * 60) % 60);
			setTime(prev => prev + 1);
			setFormatTime(
				`${checkingIfOneDigit(hour)}:${checkingIfOneDigit(
					minute,
				)}:${checkingIfOneDigit(second)}`,
			);
		}, 1000);
	};

	useEffect(() => {
		setCounting();
		return () => {
			clearInterval(timeCountInterval);
		};
	}, []);

	return <>{formatTime}</>;
};

export default CallingTime;
