import {
    TEST_STATE,
    
  } from '../types.js';
  
  /**
   * action type
   */
  
  export function testState(data) {
    return {
      type: TEST_STATE,
      payload: data,
    }
  }
  
  
  
  