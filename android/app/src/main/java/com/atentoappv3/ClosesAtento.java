package com.atentoappv3;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ClosesAtento extends ReactContextBaseJavaModule {
  ClosesAtento(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "ClosesAtento";
  }

  @ReactMethod
  public void closesAtentoApp() {
    System.exit(0);
  }
}
