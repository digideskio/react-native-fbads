/**
 * AdSettings.js
 * react-native-fbads
 *
 * Created by Mike Grabowski on 29/09/16.
 * Copyright © 2016 Callstack.io. All rights reserved.
 *
 * @flow
 */

import { NativeModules } from 'react-native';

const { CTKAdSettingsManager } = NativeModules;

type SDKLogLevel = 'none' | 'debug' | 'verbose' | 'warning' | 'error' | 'notification';

export default {
  /**
   * Registers given device with `deviceHash` to receive test Facebook ads.
   */
  addTestDevice(deviceHash: string) {
    CTKAdSettingsManager.addTestDevice(deviceHash);
  },

  /**
   * Clears previously set test devices
   */
  clearTestDevices() {
    CTKAdSettingsManager.clearTestDevices();
  },

  /**
   * Sets current SDK log level
   */
  setLogLevel(logLevel: SDKLogLevel) {
    CTKAdSettingsManager.setLogLevel(logLevel);
  },

  /**
   * Specifies whether ads are treated as child-directed
   */
  setIsChildDirected(isDirected: boolean) {
    CTKAdSettingsManager.setIsChildDirected(isDirected);
  },

  /**
   * Sets mediation service name
   */
  setMediationService(mediationService: string) {
    CTKAdSettingsManager.setMediationService(mediationService);
  },

  /**
   * Sets URL prefix
   */
  setUrlPrefix(urlPrefix: string) {
    CTKAdSettingsManager.setUrlPrefix(urlPrefix);
  },
};
