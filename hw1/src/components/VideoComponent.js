function VideoComponent() {
  return (
    <div className="Video">
      <video width="640" height="360" controls autoPlay muted>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
