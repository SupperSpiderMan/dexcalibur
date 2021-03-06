module.exports = {
    // the default encoding ()
    encoding: "utf8",// "ascii",

    // NOT EXISTING PPT
    invalid_ppt: "invalid_value",

    // Dexcalibur src location
    dexcaliburPath: "/home/test/dexcalibur/src/",
    
    // workspace location : folder where analyzed APK and data are stored
    workspacePath: "/home/dexcalibur/workspace/", 
    
    // ADB location
    adbPath: "/home/dexcalibur/platform-tools/platform-tools/adb",
    // androidSdkPath is useless for this Docker image (Android SDK not installed)
    androidSdkPath: "/home/dexcalibur/platform-tools/",

    // APKTool location
    apktPath: "/usr/local/bin/apktool",//"/home/dexcalibur/apktool",

    // Optional : SDB location
    sdbPath: null,

    
    // do not modified
    deviceId: null,
    useEmulator: false,

    // temporary files location
    tmpDir: "/tmp/",

    // default bridge
    bridge: "adb",

    // Default web server config
    web_port: 8000,

    
    // Android API version 
    platform_target: "android:7.0.0",

    // additional platforms can be add here
    platform_available: {
        "android:4.4.1": {
            name: "android",
            version : "4.4.1",
            apiVersion: 19,
            // Default path is APIS/<name>_<apiVersion> 
            // Custom path can be defined as follow
            // binaryPath: "/tmp/android_custom/"
        },
        "android:7.0.0": {
            name: "android",
            version : "7.0.0",
            apiVersion: 24,
            // Default path is APIS/<name>_<apiVersion> 
            // Custom path can be defined as follow
            // binaryPath: "/tmp/android_custom/"
        }
    }
};
