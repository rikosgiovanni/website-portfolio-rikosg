import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHoverSound: () => void;
  playDecryptSound: () => void;
  playBackgroundMusic: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false); // Default to ON (not muted)
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const decryptSoundRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    // Initialize background music
    const bgMusic = new Audio('/website-portfolio-rikosg/audio/website.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    bgMusicRef.current = bgMusic;

    // Initialize hover sound
    const hoverSound = new Audio('/website-portfolio-rikosg/audio/hover.mp3');
    hoverSound.volume = 0.3;
    hoverSoundRef.current = hoverSound;

    // Initialize decrypt sound
    const decryptSound = new Audio('/website-portfolio-rikosg/audio/decrypt.mp3');
    decryptSound.volume = 0.3;
    decryptSoundRef.current = decryptSound;

    const startAudio = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        if (!isMuted) {
          bgMusic.play().catch(err => console.log("Audio play blocked:", err));
        }
        window.removeEventListener('click', startAudio);
        window.removeEventListener('mousemove', startAudio);
        window.removeEventListener('touchstart', startAudio);
      }
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('mousemove', startAudio);
    window.addEventListener('touchstart', startAudio);

    return () => {
      bgMusic.pause();
      bgMusicRef.current = null;
      window.removeEventListener('click', startAudio);
      window.removeEventListener('mousemove', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };
  }, []);

  useEffect(() => {
    if (bgMusicRef.current) {
      if (isMuted) {
        bgMusicRef.current.pause();
      } else if (hasInteracted.current) {
        bgMusicRef.current.play().catch(err => console.log("Audio play blocked:", err));
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const playHoverSound = () => {
    if (!isMuted && hoverSoundRef.current) {
      const sound = hoverSoundRef.current.cloneNode() as HTMLAudioElement;
      sound.volume = 0.3;
      sound.play().catch(err => console.log("Hover sound blocked:", err));
    }
  };

  const playBackgroundMusic = () => {
    if (bgMusicRef.current && !isMuted) {
      hasInteracted.current = true;
      bgMusicRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
  };

  const playDecryptSound = () => {
    if (!isMuted && decryptSoundRef.current) {
      const sound = decryptSoundRef.current.cloneNode() as HTMLAudioElement;
      sound.volume = 0.3;
      sound.play().catch(err => console.log("Decrypt sound blocked:", err));
      
      // Stop after 2 seconds
      setTimeout(() => {
        gsap.to(sound, {
          volume: 0,
          duration: 0.5,
          onComplete: () => {
            sound.pause();
            sound.remove();
          }
        });
      }, 500); // Start fade at 1.5s to finish by 2s
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playHoverSound, playDecryptSound, playBackgroundMusic }}>
      {children}
    </AudioContext.Provider>
  );
};
