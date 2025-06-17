import React, { useState, useRef, useEffect } from "react";

const songs = [
  { id: 1, title: "AAA", artist: "EM XINH 'SAY HI', TIÊN TIÊN, PHƯƠNG MỸ CHI,...", src: "./public/music/AAA - EM XINH _SAY HI_.mp3", image: "./public/photo/2.ico" },
  { id: 2, title: "Nếu Lúc Đó", artist: "tlinh", src: "./public/music/Nếu lúc đó - tlinh.mp3", image: "./public/photo/3.ico" },
  { id: 3, title: "You Said You Were Sorry", artist: "Selena Gomez", src: "./public/music/You Said You Were Sorry - Selena Gomez.mp3", image: "./public/photo/4.ico" },
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
  if (audioRef.current.readyState >= 2) { // Kiểm tra xem đã load chưa
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Playback error:", error));
    }
    setIsPlaying(!isPlaying);
  } else {
    console.warn("Audio chưa load xong!");
  }
};

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-gray-800 w-[220px] mx-auto flex flex-col mt-[-65%] items-center">
      {/* Hiển thị ảnh album */}
      <img src={songs[currentSongIndex].image} alt="Album Cover" className="w-70 h-70 rounded-md shadow-md bg-glass" />

      {/* Tiêu đề + nghệ sĩ */}
      <div className="mt-4 text-center">
        <h2 className="text-lg text-2xl text-gray-800 font-bold">{songs[currentSongIndex].title}</h2>
        <p className="text-rose-800 font-semibold">{songs[currentSongIndex].artist}</p>
      </div>

      {/* Điều khiển âm nhạc */}
      <audio ref={audioRef} src={songs[currentSongIndex].src} onEnded={nextSong} />

      {/* Thanh tiến trình bài hát */}
      <div className="w-full flex flex-col items-center mt-4">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between w-full text-sm text-rose-800 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Nút điều khiển */}
      <div className="flex items-center space-x-6 mt-4">
        <button onClick={prevSong} className="text-gray-800 bg-yellow-100 px-4 py-2 rounded-full hover:bg-rose-100">
          ⏮
        </button>
        <button onClick={togglePlayPause} className="text-gray-800 bg-rose-100 px-4 py-2 rounded-full hover:bg-yellow-100">
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={nextSong} className="text-gray-800 bg-yellow-100 px-4 py-2 rounded-full hover:bg-rose-100">
          ⏭
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;