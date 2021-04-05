import platform from 'platform'
import { writeMetaUser } from "../firebaseConfig"

export default {
    mounted() {
        // screen resolution
        var w = window.screen.width
        var h = window.screen.height

        // is touchscreen device?
        var hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
        
        // OS
        var OSName = platform.os.family
        var OSArch = platform.os.architecture
        
        // browser
        var UA = navigator.subjectAgent;
        
        // timezone
        var d = new Date();
        var n = d.getTimezoneOffset();
        
        // preferred browser language
        var lang = navigator.languages
        ? navigator.languages[0]
        : (navigator.language || navigator.subjectLanguage)

        let metaInfo = {
            starttime: Date.now(),
            screen_width: w,
            screen_height: h,
            touchscreen: hasTouchScreen,
            os_name: OSName,
            os_arch: OSArch,
            browser: UA,
            min_to_utc: n,
            language: lang
        }
        writeMetaUser(this.$uuid, metaInfo)
    }
}