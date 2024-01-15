//
//  NativeCounter.m
//  AwesomeProject
//
//  Created by 김형한 on 1/12/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)
  RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock) callback)
  RCT_EXTERN_METHOD(increment)
  RCT_EXTERN_METHOD(decrement)
@end

