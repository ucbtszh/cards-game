// TODO: PUSH ALL THIS TO DB

import platform from 'platform'

export default {
    mounted() {
        // screen resolution
        var w = window.screen.width
        var h = window.screen.height
        console.log("screen resolution", w, h)

        // is touchscreen device?
        var hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
        console.log("has touchscreen", hasTouchScreen)
        
        // OS
        var OSName = platform.os.family
        var OSArch = platform.os.architecture
        console.log("OS", OSName, OSArch)
        
        // browser
        var UA = navigator.userAgent;
        console.log("browser", UA)
        
        // timezone
        var d = new Date();
        var n = d.getTimezoneOffset();
        console.log("local timezone", n)
        
        // preferred browser language
        var lang = navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.userLanguage)
        console.log("preferred browser language", lang)
    }
}