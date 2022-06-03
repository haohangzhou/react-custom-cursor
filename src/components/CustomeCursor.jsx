import React, { useEffect, useRef, useState } from 'react';
import './CustomerCursor.css';

const CustomeCursor = () => {
	const [isMouseDown, setIsMouseDown] = useState(false);

	let outer = useRef();
	let inner = useRef();

	useEffect(() => {
		console.log(isMouseDown);

		window.addEventListener('mousemove', (e) => {
			//calculate the outer Circle's center
			const outerX = e.clientX - outer.current.offsetWidth / 2;
			const outerY = e.clientY - outer.current.offsetHeight / 2;

			//calculate the inner Circle's center
			const innerX = e.clientX - inner.current.offsetWidth / 2;
			const innerY = e.clientY - inner.current.offsetHeight / 2;

			//set the position of both cursor
			outer.current.style.left = outerX + 'px';
			outer.current.style.top = outerY + 'px';

			inner.current.style.left = innerX + 'px';
			inner.current.style.top = innerY + 'px';
		});

		window.addEventListener('mousedown', () => {
			setIsMouseDown((pre) => true);
		});

		window.addEventListener('mouseup', () => {
			setIsMouseDown((pre) => false);
		});
	}, [isMouseDown]);

	return (
		<>
			<div ref={outer} className='cursor-outer'></div>
			<div
				ref={inner}
				className={`cursor-inner ${
					isMouseDown ? 'enlarge' : ''
				}`}></div>
		</>
	);
};

export default CustomeCursor;
