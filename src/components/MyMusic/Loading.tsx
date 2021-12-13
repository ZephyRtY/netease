import React, { useEffect, useState } from 'react';
import { setInterval } from 'timers';
import './style/loading.scss';
export const Loading = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let timer = setInterval(() => {
			setCount((v) => (v + 1) % 4);
		}, 400);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return <span className="loading">{`Loading${'.'.repeat(count)}`}</span>;
};