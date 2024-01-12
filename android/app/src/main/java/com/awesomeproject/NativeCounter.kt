package com.awesomeproject

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule


class Counter(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {
    private var count = 0

    override fun getName() = "Counter"

    override fun getConstants(): Map<String, Any>? {
        val constants: MutableMap<String, Any> = HashMap()
        constants.put("initialCount", 0)
        return constants
    }

    @ReactMethod
    fun increment() {
        count++
        sendCounterEvent()
    }

    @ReactMethod
    fun decrement() {
        count--
        sendCounterEvent()
    }

    @ReactMethod
    fun getCount(callback: com.facebook.react.bridge.Callback) {
        callback.invoke(count)
    }

    private fun sendCounterEvent() {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("onCountChanged", count)
    }
}