/**
 * Created by nghinv on Thu Jun 04 2020
 * Copyright (c) 2020 nghinv@lumi.biz
 */

declare module '@nghinv/react-native-vlc' {
  import { PureComponent } from 'react';
  import { ViewStyle } from 'react-native';

  interface BackHandle {

  }

  interface Orientation {

  }

  interface Source {
    uri: string;
  }

  interface VLCPlayerProps {
    rate: number;
    seek: number;
    resume: boolean;
    position: number;
    snapshotPath: string;
    paused: boolean;
    autoAspectRatio: boolean;
    // '16:9'
    videoAspectRatio: string;
    // 0 ---> 200
    volume: number;
    volumeUp: number;
    volumeDown: number;
    repeat: boolean;
    muted: boolean;

    initType: 1 | 2;

    // [
    //   '--no-audio',
    //   '--rtsp-tcp',
    //   `--network-caching=${150}`,
    //   `--rtsp-caching=${150}`,
    //   '--no-stats',
    //   `--tcp-caching=${150}`,
    //   `--realrtsp-caching=${150}`,
    // ]
    initOptions: Array<String>;
    hwDecoderEnabled: number;
    hwDecoderForced: number;

    style: ViewStyle;

    onVideoLoadStart: () => void;
    onVideoStateChange: () => void;
    onVideoProgress: () => void;
    onSnapshot: () => void;
    onIsPlaying: () => void;
    onOpen: () => void;
    onLoadStart: () => void;

    /* Wrapper component */
    source: Source | number;
    play: () => void;
    snapshot: () => void;
    onError: () => void;
    onProgress: () => void;
    onEnded: () => void;
    onStopped: () => void;
    onPlaying: () => void;
    onPaused: () => void;

    /* Required by react-native */
    scaleX: number;
    scaleY: number;
    translateX: number;
    translateY: number;
    rotation: number;
  }

  interface VlCPlayerViewProps {

    style: ViewStyle;

    videoStyle: ViewStyle;

    // default false
    initPaused: boolean;

    // default null
    source: Source | number | null;

    // default 0
    seek: number;

    // default false
    playInBackground: boolean;

    // default false
    isAd: boolean;

    // default true
    autoplay: boolean;

    // '1:1'
    fullVideoAspectRatio: string;

    videoAspectRatio: string;

    // default 'Video playback error, please reload'
    errorTitle: string;

    // default = 250
    height: number;

    // default false
    showAd: boolean;

    adUrl: string;

    url: string;

    // deafault false
    showBack: boolean;

    // deafault false
    showTitle: boolean;

    title: string;

    // deafault false
    showGoLive: boolean,

    // deafault true
    showLeftButton: boolean;

    // deafault true
    showMiddleButton: boolean;

    // deafault true
    showRightButton: boolean;

    // deafault true
    animationLayout: boolean;

    // deafault 'go live'
    titleGolive: string;

    onEnd: () => void;

    onAdEnd: () => void;

    startFullScreen: () => void;

    closeFullScreen: () => void;

    onLeftPress: () => void;

    onGoLivePress: () => void;

    onReplayPress: () => void;

    onVLCPlaying: () => void;

    onVLCPaused: () => void;

    onVLCProgress: () => void;

    onVLCEnded: () => void;

    onVLCError: () => void;

    onVLCBuffering: () => void;

    BackHandle: BackHandle;

    Orientation: Orientation;
  }

  class VLCPlayer extends PureComponent<VLCPlayerProps> {

  }

  class VlCPlayerView extends PureComponent<VlCPlayerViewProps> {

  }
}