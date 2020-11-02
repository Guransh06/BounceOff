function bounceOff(O1,O2){
    if (O1.y - O2.y < O2.height/2 + O1.height/2
      && O2.y - O1.y < O2.height/2 + O1.height/2){
      return true;
      
    }
  }