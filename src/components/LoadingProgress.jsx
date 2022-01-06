import React, { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';

import { loadingContext } from '../contexts/LoadingProvider';

function LoadingProgress() {
	const { progress } = useContext(loadingContext);
	if (progress !== null) {
		return (
			<div className='bg-primary' style={{ position: 'fixed', width: '100%', height: 5, zIndex: 99 }}>
				<ProgressBar
					striped
					animated
					now={progress}
					variant='warning'
					style={{ position: 'absolute', height: 5, width: '100%', backgroundColor: 'transparent' }}
				/>
			</div>
		);
	}
}

export default LoadingProgress;
