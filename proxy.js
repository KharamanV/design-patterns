// @flow

interface IVideo {
  getLast(): void;
}

/* External library */
class Video {
  getLast() { /* Get last video from API */ }
}

class VideoProxy implements IVideo {
  service: Video;
  video: any;

  constructor(service: Video) {
    this.service = service;
  }

  getLast() {
    if (!this.video) {
      this.video = this.service.getLast();
    }

    return this.video;
  }
}

/* Client */
class VideoClient {
  service: IVideo;

  constructor(service: IVideo) {
    this.service = service;
  }

  play() {
    const video = this.service.getLast();

    /* Play video */
  }
}

const video = new Video();
const videoProxy = new VideoProxy(video);
const videoClient = new VideoClient(videoProxy);

videoClient.play();
