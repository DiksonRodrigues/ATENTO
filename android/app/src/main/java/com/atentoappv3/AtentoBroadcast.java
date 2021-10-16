package com.atentoappv3;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

public class AtentoBroadcast extends ReactContextBaseJavaModule {
  AtentoBroadcast(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "AtentoBroadcast";
  }

  @ReactMethod
  public void sendAtentoBroadcast(String name) {
    Intent intent = new Intent();
    intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
    intent.setAction("com.atentoappv3.resultadoatento");
    intent.putExtra("CODE", name);
    getCurrentActivity().sendBroadcast(intent);
    Log.d("CalendarModule", "Create event called with name: " + name);
  }
}
