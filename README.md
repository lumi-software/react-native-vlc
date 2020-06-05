# @nghinv/react-native-vlc

A `VLCPlayer` component for react-native
project clone from `react-native-yz-vlcplayer`

# Installation

## Installing the package

* Use yarn

```sh
yarn add @nghinv/react-native-vlc
```

* Use npm

```sh
npm install @nghinv/react-native-vlc
```

### Dependencies

- react-native-vector-icons

- react-native-slider


## android

* **With autolinking (react-native 0.60+)**

* **Pre 0.60**

> Run `react-native link @nghinv/react-native-vlc`


## ios

* **With autolinking (react-native 0.60+)**

> Run `cd ios && pod install`

* **Pre 0.60**

Use framework

1. cd to ios

2. run `pod init`

3. add `pod 'MobileVLCKit', '3.3.10'` to pod file

4. run `pod install`


* **Enable Bitcode**

In root project select Build Settings ---> find Bitcode and select Enable Bitcode

![](./images/bitcode.png)

* **Remove DSYM**

In root project select Build Settings --> Build Options --> Debug Information is set to DWARF.

![](./images/dsym.png)

# Example

```javascript
  (1) import { VLCPlayer, VlCPlayerView } from '@nghinv/react-native-vlc';

  (2) 
    <VLCPlayer
      ref={ref => (this.vlcPlayer = ref)}
      style={[styles.video]}
      videoAspectRatio="16:9"
      paused={this.state.paused}
      source={{ uri: this.props.uri}}
      onProgress={this.onProgress.bind(this)}
      onEnd={this.onEnded.bind(this)}
      onBuffering={this.onBuffering.bind(this)}
      onError={this._onError}
      onStopped={this.onStopped.bind(this)}   
      onPlaying={this.onPlaying.bind(this)}
      onPaused={this.onPaused.bind(this)}      
    />
  (3) or use
    <VlCPlayerView
      autoplay={false}
      url={this.state.url}
      Orientation={Orientation}      
      BackHandle={BackHandle}
      showTitle={true}
      title=""
      showBack={true}
      onLeftPress={()=>{}}
      startFullScreen={() => {      
        this.setState({
        isFull: true,
        });
      }}
      closeFullScreen={() => {
        this.setState({
        isFull: false,
        });
      }}
    />
```

# Property

## VLCPlayer component

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| rate | `number` |         |             |
| seek | `number` |         |             |
| resume | `boolean` |      |             |
| position | `number` |      |             |
| snapshotPath | `string` |      |             |
| paused | `boolean` |      |             |
| autoAspectRatio | `boolean` |      |     |
| videoAspectRatio | `string` | `16:9`     |     |
| volume | `number` |      | from 0 to 200    |
| volumeUp | `number` |     |             |
| volumeDown | `number` |     |             |
| repeat | `boolean` |     |             |
| muted | `boolean` |     |             |
| hwDecoderForced | `number` |  `0, 1` | (Only android) need use with hwDecoderForced |
| hwDecoderEnabled | `number` |  `0, 1`   | Only android) need use with hwDecoderEnabled |
| style | `ViewStyle` |     |             |
| onVideoLoadStart | `func` |     |             |
| onVideoStateChange | `func` |     |             |
| onVideoProgress | `func` |     |             |
| onSnapshot | `func` |     |             |
| onIsPlaying | `func` |     |             |
| onOpen | `func` |     |             |
| onLoadStart | `func` |     |             |
| source | `oject, number` |     |             |
| play | `func` |     |             |
| snapshot | `func` |     |             |
| onError | `func` |     |             |
| onProgress | `func` |     | { currentTime:1000,duration:1000 } unit：ms |
| onEnded | `func` |     |             |
| onStopped | `func` |     |             |
| onPlaying | `func` |     |             |
| onPaused | `func` |     |             |
| scaleX | `number` |     |             |
| scaleY | `number` |     |             |
| translateX | `number` |     |             |
| translateY | `number` |     |             |
| rotation | `number` |     |             |


## VlCPlayerView component

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| style | `ViewStyle` |         |         |
| videoStyle | `ViewStyle` |         |         |
| initPaused | `boolean` | false |  |
| source | `oject, number` |  | `{ uri: 'http:...' }` |
| seek | `number` | 0 |  |
| playInBackground | `boolean` | false |  |
| isAd | `boolean` | false |  |
| showAd | `boolean` | false |  |
| adUrl | `string` |  |  |
| autoplay | `boolean` | true |  |
| fullVideoAspectRatio | `string` |  |  |
| videoAspectRatio | `string` |  |  |
| errorTitle | `string` | `Video playback error, please reload` |  |
| height | `number` | 250 |  |
| url | `string` |  | url of video |
| showBack | `boolean` | false |  |
| showTitle | `boolean` | false |  |
| title | `string` |  |  |
| showGoLive | `boolean` | false |  |
| showLeftButton | `boolean` | true |  |
| showMiddleButton | `boolean` | true |  |
| showRightButton | `boolean` | true |  |
| animationLayout | `boolean` | true |  |
| titleGolive | `string` | `Go live` | show when showGoLive true |
| onEnd | `func` |  |  |
| onAdEnd | `func` |  |  |
| startFullScreen | `func` |  |  |
| closeFullScreen | `func` |  |  |
| onLeftPress | `func` |  |  |
| onGoLivePress | `func` |  |  |
| onReplayPress | `func` |  |  |
| onVLCProgress | `func` |  |  |
| onVLCEnded | `func` |  |  |
| onVLCError | `func` |  |  |
| onVLCBuffering | `func` |  |  |
| BackHandle |  | `undefined` | BackAndroid |
| Orientation |  | `undefined` | `react-native-orientation-locker` |

# Supported formats

Supported formats mp4, m3u8, flv,mov, rtsp, rtmp, etc.
