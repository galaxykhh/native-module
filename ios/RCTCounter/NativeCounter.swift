//
//  NativeCounter.swift
//  AwesomeProject
//
//  Created by 김형한 on 1/12/24.
//

import Foundation

@objc(Counter)
public class Counter: RCTEventEmitter {
  
  private var count = 0
  
  @objc
  static public override func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  public override func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": 0]
  }
  
  @objc
  public override func supportedEvents() -> [String]! {
    return ["onCountChanged"]
  }
  
  @objc
  public func getCount(_ callback: RCTResponseSenderBlock) -> Void {
    callback([count])
  }
  
  @objc
  public func increment() -> Void {
    count += 1
    sendEvent(withName: "onCountChanged", body: count)
  }
  
  @objc
  public func decrement() -> Void {
    count -= 1
    sendEvent(withName: "onCountChanged", body: count)
  }
}
