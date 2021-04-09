const data = [
  {
    "title": "色度校正后花屏",
    "content": "查看接收卡是否符合色度校正要求，大带载程序不支持色度校正",
    "receivingcard":"DH系列",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
    
},
{
    "title": "VX6SSDI抖动",
    "content": "VX6S，最新固件第一个SDI口优化正常，第二个SDI口优化不足，会出现抖动情况。",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""

},
{
    "title": "断电重启后整屏偏色",
    "content": "尝试调节芯片拓展参数，关闭去坏点功能",
    "receivingcard":"", 
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "硬件打屏高度无法覆盖全屏",
    "content": "调节发送卡分辨率为实际屏幕分辨率即可",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "硬件打屏出现不规律色块",
    "content": "连接DVI或HDMI线即可",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "使用DH7512接收卡，前端我司视频处理器设备断电之后，屏体仍有部分区域显示断电前最后一帧画面。",
    "content": "升级4.6.3.13_0322版本固件可解决问题；",
    "receivingcard":"DH7512",
    "chip":"",
    "receivingversion":"4.6.3.13_0322",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "1060无法通过音视频分离器输出音频的问题；",
    "content": "V1060设备升级1.1.0.9版本固件后，需要给设备返回出厂，否则仍然会出现",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"V1060；1.1.0.9",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "Vcan搜不到N6",
    "title": "n6用v-can要用3.5.1及以上版本，否则搜不到设备",
    "content": "",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "Kompass FX3软件安装后出现卡顿。",
    "content": "检查电脑配置；加密狗驱动没装成功，需在命令行中装下驱动即可",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "校正后出现弧形波纹（类似于摩尔纹形状）",
    "content": "可能是分区过大，可尝试调小分区",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "中控平板软件上需要显示预监画面",
    "content": "设置预监卡ip URL地址 ws://192.168.0.121:8091,回显URL地址 ws://192.168.10.121:8092;中控端设置为输入源URL地址    rtsp://192.168.10.121:8091/echovideo;大屏回显URL地址 rtsp://192.168.10.121:8092/echovideo，设置完成后无法显示到码流视频；中控端端口号+10后，改为8101  8102后正常；",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "418接收卡，升级9929程序包后，升级其他版本程序包无法升级成功，测试升级常规版本程序同样无法升级成功且多次重启程序仍未改变",
    "content": "在接收卡升级页面，盲输nova，尝试使用从genldon加载升级，有一定几率可升级成功。",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"418",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "使用H系列进行4K显卡拼接，尽量从方案上给客户定使用DP进行拼接，避免配合显卡使用兼容问题。",
    "content": "同时需要注意显卡mosaic和surround的区别，一般mosaicm拼接只有英伟达P系列显卡会有，操作相对直观简单，目前P系列大多显卡已经停产，新推出的显卡GTX2080,3080，3090等显卡没有mosaic功能，但是仍然可以显卡拼接，需要使用surround拼接功能，相对麻烦，但是可以配合我司发送卡，H系列做拼接",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "TC7559B",
    "content": "可选择5953译码设置",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":"TC7559B"
},
{
    "title": "meebox200",
    "content": "hdmi输出仅支持标准1080p显示器画面显示",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},
{
    "title": "校正出现黑色不纯/绿底",
    "content": "优先排查是否打开显卡全动态输出，然后排查是否为视频线材或者接口问题。",
    "receivingcard":"",
    "chip":"",
    "receivingversion":"",
    "sendingversion":"",
    "softwareversion":"",
    "decondingchip":""
},


]

module.exports = data 