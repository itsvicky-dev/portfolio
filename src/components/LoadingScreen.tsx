import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [progress]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: 'black',
        transition: 'transform 1s',
        transform: isLoading ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '52vw',
            padding: '0 2rem',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <span
              style={{
                display: 'block',
                fontSize: '12vw',
                fontWeight: '300',
                letterSpacing: '-0.02em',
                lineHeight: '1',
                transform: `translateY(${progress > 0 ? '0' : '100%'})`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              LOADING
            </span>
          </div>

          <div
            style={{
              marginTop: '2rem',
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundColor: 'white',
                transition: 'width 0.3s ease-out',
                width: `${progress}%`,
              }}
            />
          </div>

          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.875rem',
              fontWeight: '300',
              letterSpacing: '0.1em',
            }}
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              INITIALIZING
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.3)',
            letterSpacing: '0.1em',
          }}
        >
          <span>© {new Date().getFullYear()}</span>
          <span style={{ animation: 'pulse 1.5s infinite' }}>
            EXPERIENCE LOADING
          </span>
          <span>PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;