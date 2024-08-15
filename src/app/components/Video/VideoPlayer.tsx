'use client'
import React, { Suspense, useRef } from 'react';
import { CircularProgress } from '@mui/material';

const Video = React.lazy(() => import('./Video'));

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Video ref={videoRef} />
      </Suspense>
    </div>
  );
};

export default VideoPlayer;