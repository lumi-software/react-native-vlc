Pod::Spec.new do |s|
  s.name         = "react-native-vlc"
  s.version      = "1.0.0"
  s.summary      = "VLC player"
  s.requires_arc = true
  s.author       = { 'nghinv' => 'nghinv@lumibiz' }
  s.license      = 'MIT'
  s.homepage     = 'https://github.com/lumi-software/react-native-vlc'
  s.source       = { :git => "https://github.com/lumi-software/react-native-vlc.git" }
  s.source_files = 'ios/RCTVLCPlayer/*'
  s.platform     = :ios, "8.0"
  s.static_framework = true  
  s.dependency 'React'
  s.dependency 'MobileVLCKit', '3.3.10'
end
