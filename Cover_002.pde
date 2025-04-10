// ... existing code ...

class Rectangle{
  float h;

  float lifespan = 240;
  float totalLife = lifespan;
  
  // Add these variables for radius lerping
  float currentRadius = 10;
  float targetRadius = 10;
  float radiusLerpAmount = 0;
  
  ///POSITION
  PVector position, velocity, acceleration;
  
  // ... existing code ...
  
  void updateLife(){
    lifespan--;
    
    // Update radius lerp
    if(frameCount % 10 == 0 && radiusLerpAmount == 0){
      targetRadius = random(10, 30);
      radiusLerpAmount = 0.01; // Start the lerp
    }
    
    if(radiusLerpAmount > 0 && radiusLerpAmount < 1){
      // Apply quadratic easing to the lerp
      float easeAmount = easeInOutQuad(radiusLerpAmount);
      currentRadius = lerp(currentRadius, targetRadius, easeAmount);
      radiusLerpAmount += 0.1; // Increment the lerp amount
      
      if(radiusLerpAmount >= 1){
        radiusLerpAmount = 0; // Reset for next change
        currentRadius = targetRadius; // Ensure we reach the exact target
      }
    }
  }

  void display(){
    // Remove this as we're handling radius transitions differently now
    /*
    if(frameCount%10==0){
      this.initialRadius = random(10, 30);
    }
    */
    
    if(lifespan > totalLife-4){
      if(frameCount%2==0){
        cover.noFill();
        cover.noStroke();
      }else{
        hasFill();
      }
    }else{
      hasFill();
    }
    
    // Use currentRadius instead of initialRadius for the corner radius
    cover.rect(this.position.x, this.position.y, this.scale.x-1, this.scale.y, currentRadius);
  }
  
  // ... existing code ...
  
  // Add this method for quadratic easing
  float easeInOutQuad(float t) {
    return t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2;
  }
}

// ... existing code ...