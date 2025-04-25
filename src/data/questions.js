const questions = [
  {
    question: "When driving in fog, you should use:",
    optionA: "High beam headlights",
    optionB: "Low beam headlights",
    optionC: "Parking lights only",
    optionD: "Hazard lights only",
    correctAnswer: "B",
    explanation: "In foggy conditions, high beams will reflect off the fog particles and create glare that reduces visibility. Low beams direct light downward onto the road, providing better visibility in fog. Parking lights alone don't provide enough illumination, and hazard lights should only be used when your vehicle is stopped or disabled."
  },
  {
    question: "When approaching a school bus with flashing red lights from either direction, you must:",
    optionA: "Slow down and proceed with caution",
    optionB: "Stop only if you're behind the bus",
    optionC: "Stop and remain stopped until the lights stop flashing",
    optionD: "Stop only during school hours",
    correctAnswer: "C",
    explanation: "Washington law requires all vehicles from both directions to stop for a school bus with flashing red lights and an extended stop arm. The only exception is if you're on the opposite side of a divided highway with a physical barrier or median. You must remain stopped until the lights stop flashing and the stop arm is withdrawn."
  },
  {
    question: "What is the blood alcohol concentration (BAC) limit for drivers under 21 years of age in Washington State?",
    optionA: "0.08%",
    optionB: "0.04%",
    optionC: "0.02%",
    optionD: "Any detectable amount",
    correctAnswer: "C",
    explanation: "Washington has a \"zero tolerance\" law for drivers under 21. The legal BAC limit for drivers under 21 is 0.02%, which is significantly lower than the 0.08% limit for drivers 21 and over. Even one alcoholic drink can put a young driver over this limit."
  },
  {
    question: "When making a right turn, you should:",
    optionA: "Swing wide to the left first",
    optionB: "Stay in the right lane and turn into the right lane",
    optionC: "Turn from any lane as long as it's clear",
    optionD: "Use the left turn signal first, then the right",
    correctAnswer: "B",
    explanation: "When making a right turn, you should position your vehicle in the far right lane and turn into the right lane of the new road. This ensures a proper and safe turn while maintaining your lane position. Swinging wide creates confusion and can cause accidents."
  },
  {
    question: "In Washington State, how long must you signal before turning or changing lanes?",
    optionA: "At least 50 feet",
    optionB: "At least 100 feet",
    optionC: "At least 200 feet",
    optionD: "At least 300 feet",
    correctAnswer: "B",
    explanation: "Washington State law requires that you signal continuously for at least 100 feet before making a turn or changing lanes. This gives other drivers adequate warning of your intentions, allowing them to adjust their driving accordingly."
  },
  {
    question: "When parking on a hill with a curb and your wheels should be turned so that if your brakes fail, your car will:",
    optionA: "Roll into traffic",
    optionB: "Roll away from the curb",
    optionC: "Roll into the curb",
    optionD: "Wheels should always be straight",
    correctAnswer: "C",
    explanation: "When parking on a hill, always turn your wheels so that if your brakes fail, your car will roll into the curb rather than into traffic. When facing downhill, turn your wheels toward the curb. When facing uphill with a curb, turn your wheels away from the curb. When facing uphill without a curb, turn your wheels to the right (toward the edge of the road)."
  },
  {
    question: "A solid yellow line on your side of the center line means:",
    optionA: "Passing is allowed when safe",
    optionB: "You can cross to make a left turn",
    optionC: "No passing allowed",
    optionD: "Both B and C",
    correctAnswer: "D",
    explanation: "A solid yellow line on your side of the center line means you cannot pass other vehicles by crossing the line. However, you may cross the solid yellow line to make a left turn into a driveway or onto another road when it is safe to do so."
  },
  {
    question: "What is the speed limit in a residential area in Washington unless otherwise posted?",
    optionA: "15 mph",
    optionB: "20 mph",
    optionC: "25 mph",
    optionD: "30 mph",
    correctAnswer: "C",
    explanation: "In Washington State, the default speed limit in residential areas is 25 mph unless otherwise posted. This lower speed limit helps protect pedestrians, bicyclists, and children who may be present in residential neighborhoods."
  },
  {
    question: "What does a flashing yellow arrow at an intersection mean?",
    optionA: "Come to a complete stop",
    optionB: "Yield to oncoming traffic and pedestrians, then proceed with caution",
    optionC: "The light is about to turn red",
    optionD: "Proceed only if turning right",
    correctAnswer: "B",
    explanation: "A flashing yellow arrow indicates that you may make the turn after yielding to oncoming traffic and pedestrians. Unlike a solid green light, which gives the right-of-way, a flashing yellow arrow reminds drivers that they must yield before turning."
  },
  {
    question: "When driving in rain, your vehicle is most likely to hydroplane when:",
    optionA: "Your tires are worn",
    optionB: "You're driving slowly",
    optionC: "You're driving on rough pavement",
    optionD: "Your vehicle has anti-lock brakes",
    correctAnswer: "A",
    explanation: "Hydroplaning occurs when your tires lose contact with the road and ride on a film of water. Worn tires with less tread depth are more likely to hydroplane because they cannot channel water away effectively. Other factors that increase hydroplaning risk include higher speeds and smooth road surfaces."
  },
  {
    question: "What is the meaning of a pentagon-shaped sign?",
    optionA: "Railroad crossing",
    optionB: "Construction zone",
    optionC: "School zone",
    optionD: "Hospital zone",
    correctAnswer: "C",
    explanation: "A pentagon-shaped sign (five-sided with the point up) is used exclusively to indicate a school zone or school crossing. These signs are yellow or fluorescent yellow-green with black symbols or lettering to alert drivers to watch for children and to obey special speed limits."
  },
  {
    question: "In Washington State, what should you do if you're involved in an accident resulting in injury, death, or property damage over $1,000?",
    optionA: "Call your insurance company only",
    optionB: "Exchange information with the other driver only",
    optionC: "File a report with the Department of Licensing within 4 days",
    optionD: "Move your vehicle only if it's blocking traffic",
    correctAnswer: "C",
    explanation: "Washington law requires that if you're involved in an accident resulting in injury, death, or property damage exceeding $1,000, you must file a Collision Report with the Department of Licensing within 4 days. This is in addition to immediately stopping, exchanging information, and notifying law enforcement if applicable."
  },
  {
    question: "When two vehicles arrive at an uncontrolled intersection at the same time, who has the right-of-way?",
    optionA: "The larger vehicle",
    optionB: "The vehicle on the right",
    optionC: "The vehicle going straight",
    optionD: "The vehicle traveling faster",
    correctAnswer: "B",
    explanation: "At an uncontrolled intersection (no stop signs, yield signs, or traffic signals), when two vehicles arrive at approximately the same time, the vehicle on the right has the right-of-way. However, all drivers should exercise caution as right-of-way is something to be yielded, not taken."
  },
  {
    question: "When driving near a bicyclist, you should:",
    optionA: "Always honk to alert them of your presence",
    optionB: "Pass them quickly regardless of traffic conditions",
    optionC: "Give them at least 3 feet of space when passing",
    optionD: "Expect them to always ride on the sidewalk",
    correctAnswer: "C",
    explanation: "Washington law requires drivers to give bicyclists at least 3 feet of space when passing. Bicycles are considered vehicles and have the same rights and responsibilities on the road. Never crowd or follow a bicyclist too closely, and only pass when it's safe to do so."
  },
  {
    question: "When is it legal to pass a vehicle on the right in Washington?",
    optionA: "Never",
    optionB: "When the vehicle ahead is making a left turn",
    optionC: "When you're in a hurry",
    optionD: "Only on the highway",
    correctAnswer: "B",
    explanation: "You may pass on the right when the vehicle ahead is making a left turn, when you are on a paved roadway with two or more lanes in your direction, or when you are on a one-way street with two or more lanes. Always pass with caution and ensure it's safe to do so."
  },
  {
    question: "What should you do if your vehicle's right wheels drop off the pavement onto the shoulder?",
    optionA: "Brake hard and steer sharply back onto the roadway",
    optionB: "Accelerate and steer sharply back onto the roadway",
    optionC: "Grip the wheel firmly, ease off the accelerator, and brake gently",
    optionD: "Continue at your current speed and steer gradually back onto the roadway",
    correctAnswer: "C",
    explanation: "If your wheels drop off the pavement, avoid panic reactions. Hold the steering wheel firmly, ease off the accelerator, and brake gently. When it's safe, steer gradually back onto the roadway. Sudden braking or steering can cause you to lose control or flip your vehicle."
  },
  {
    question: "In Washington State, when can you use a cell phone while driving?",
    optionA: "When stopped at a red light",
    optionB: "Only when using hands-free technology",
    optionC: "When driving under 35 mph",
    optionD: "Only when receiving a call, not making one",
    correctAnswer: "B",
    explanation: "Washington's \"Driving Under the Influence of Electronics\" (E-DUI) law prohibits hand-held cell phone use while driving, even when stopped at a light. You may only use a cell phone with hands-free technology, such as Bluetooth or speaker phone, that requires minimal use of a finger. Even with hands-free technology, it's best to limit phone use while driving."
  },
  {
    question: "What is the purpose of an HOV (High Occupancy Vehicle) lane?",
    optionA: "For emergency vehicles only",
    optionB: "To reduce traffic congestion by encouraging carpooling",
    optionC: "For trucks and large vehicles only",
    optionD: "For vehicles traveling below the speed limit",
    correctAnswer: "B",
    explanation: "HOV lanes are designed to reduce traffic congestion by encouraging carpooling. These lanes are reserved for vehicles with a minimum number of occupants (typically 2 or 3 people, as indicated by signs). By promoting ride-sharing, HOV lanes help reduce the total number of vehicles on the road."
  },
  {
    question: "In Washington, what is the appropriate action when you see an emergency vehicle with flashing lights behind you?",
    optionA: "Speed up to get out of the way",
    optionB: "Stop immediately wherever you are",
    optionC: "Pull to the right edge of the roadway and stop",
    optionD: "Change lanes to let the emergency vehicle pass",
    correctAnswer: "C",
    explanation: "When an emergency vehicle with flashing lights approaches from any direction, you must yield the right-of-way by pulling over to the right edge of the roadway and stopping. Wait until the emergency vehicle has passed completely before re-entering traffic. This applies even if the emergency vehicle is on the opposite side of a divided highway."
  },
  {
    question: "What must you do before entering an intersection to make a left turn?",
    optionA: "Signal and move to the rightmost lane",
    optionB: "Yield to oncoming traffic, pedestrians, and bicyclists",
    optionC: "Come to a complete stop regardless of traffic",
    optionD: "Accelerate to clear the intersection quickly",
    correctAnswer: "B",
    explanation: "Before making a left turn, you must yield to oncoming vehicles, pedestrians in crosswalks, and bicyclists. Signal your intention at least 100 feet before turning, and position your vehicle in the left lane or designated left-turn lane. Complete the turn when it's safe to do so."
  },
  {
    question: "What does a solid white line between lanes of traffic mean?",
    optionA: "Changing lanes is prohibited",
    optionB: "Changing lanes is discouraged",
    optionC: "Changing lanes is permitted when safe",
    optionD: "The lane will end soon",
    correctAnswer: "B",
    explanation: "A solid white line between lanes of traffic indicates that lane changes are discouraged but not prohibited. These lines are often used in areas where lane changes might be risky, such as approaching intersections or in areas with limited visibility. While not illegal to cross, it's best to avoid changing lanes unless absolutely necessary."
  },
  {
    question: "What is the \"Move Over Law\" in Washington State?",
    optionA: "A law requiring slow drivers to move to the right lane",
    optionB: "A law requiring drivers to change lanes or slow down when approaching stationary emergency or work vehicles",
    optionC: "A law requiring drivers to move their vehicles to the side of the road after minor accidents",
    optionD: "A law requiring drivers to move over for faster traffic",
    correctAnswer: "B",
    explanation: "Washington's \"Move Over Law\" requires drivers approaching stationary emergency vehicles, utility vehicles, tow trucks, or highway maintenance vehicles with flashing lights to either move over to another lane (if safe to do so) or slow down significantly below the posted speed limit. This law helps protect emergency and service workers."
  },
  {
    question: "How should you respond when you see a yellow traffic signal light?",
    optionA: "Speed up to get through the intersection",
    optionB: "Stop immediately regardless of your position",
    optionC: "Prepare to stop, or proceed with caution if you can't stop safely",
    optionD: "Always come to a complete stop and then proceed",
    correctAnswer: "C",
    explanation: "A steady yellow light indicates that the light will soon turn red. You should prepare to stop if you can do so safely. If you're too close to the intersection to stop safely, proceed through with caution. Never speed up to \"beat\" a yellow light, as this creates dangerous situations."
  },
  {
    question: "What should you do at a flashing red traffic signal?",
    optionA: "Slow down and proceed with caution",
    optionB: "Stop and wait for the signal to change",
    optionC: "Stop, yield to traffic and pedestrians, then proceed when safe",
    optionD: "Treat it like a yellow light",
    correctAnswer: "C",
    explanation: "A flashing red traffic signal must be treated the same as a stop sign. Come to a complete stop, yield to all traffic and pedestrians, and proceed only when it's safe to do so. Unlike a steady red light, you don't need to wait for the signal to change."
  },
  {
    question: "When parallel parking next to a curb, your wheels should be:",
    optionA: "At least 18 inches from the curb",
    optionB: "No more than 12 inches from the curb",
    optionC: "Touching the curb",
    optionD: "At least 24 inches from the curb",
    correctAnswer: "B",
    explanation: "When parallel parking, your wheels should be no more than 12 inches (1 foot) from the curb. Parking too far from the curb can obstruct traffic or create a hazard for cyclists. In some cities, parking beyond this distance can result in a parking ticket."
  },
  {
    question: "What does a diamond-shaped road sign indicate?",
    optionA: "Stop ahead",
    optionB: "School zone",
    optionC: "Warning",
    optionD: "Regulatory information",
    correctAnswer: "C",
    explanation: "Diamond-shaped signs are warning signs that alert drivers to potential hazards or changing road conditions ahead. They are typically yellow or orange with black symbols or text. Examples include curve ahead, merging traffic, pedestrian crossing, or slippery when wet."
  },
  {
    question: "In Washington, when is it legal to make a right turn at a red light?",
    optionA: "Never",
    optionB: "Only when there's a \"Right Turn on Red Permitted\" sign",
    optionC: "After coming to a complete stop and yielding to traffic and pedestrians",
    optionD: "Only between 10 PM and 6 AM",
    correctAnswer: "C",
    explanation: "In Washington, you may make a right turn at a red light after coming to a complete stop and yielding to cross traffic and pedestrians. However, you must not turn if there is a sign prohibiting right turns on red. Always check for oncoming traffic, cyclists, and pedestrians before turning."
  },
  {
    question: "What is the meaning of a green arrow signal at an intersection?",
    optionA: "Proceed with caution in any direction",
    optionB: "You have the right-of-way to proceed in the direction of the arrow",
    optionC: "Yield to pedestrians, then turn",
    optionD: "The light will soon turn yellow",
    correctAnswer: "B",
    explanation: "A green arrow signal gives you the right-of-way to proceed in the direction the arrow is pointing. Oncoming traffic is stopped by a red light when the green arrow is displayed. However, you must still yield to pedestrians and any vehicles already in the intersection."
  },
  {
    question: "What is the speed limit in a school zone in Washington when children are present?",
    optionA: "15 mph",
    optionB: "20 mph",
    optionC: "25 mph",
    optionD: "30 mph",
    correctAnswer: "B",
    explanation: "The speed limit in school zones in Washington is 20 mph when children are present or when lights are flashing. This reduced speed limit helps protect children who may be entering or exiting school or crossing streets nearby. Fines for speeding in a school zone are double the normal amount."
  },
  {
    question: "What is the minimum age to obtain a driver's license in Washington without restrictions?",
    optionA: "16 years old",
    optionB: "17 years old",
    optionC: "18 years old",
    optionD: "21 years old",
    correctAnswer: "C",
    explanation: "In Washington, you must be at least 18 years old to obtain a driver's license without restrictions. Drivers under 18 are subject to Intermediate License restrictions, which include limitations on passengers and nighttime driving. These restrictions are part of Washington's Graduated Driver Licensing program."
  },
  {
    question: "When driving in heavy fog, you should:",
    optionA: "Drive at normal speeds but increase following distance",
    optionB: "Use high beam headlights to see better",
    optionC: "Follow the taillights of the vehicle ahead closely",
    optionD: "Reduce speed and increase following distance",
    correctAnswer: "D",
    explanation: "In heavy fog, visibility is severely reduced. You should reduce your speed and increase your following distance to allow more time to react to hazards. Use low beam headlights (high beams reflect off the fog, reducing visibility further), and use the right edge of the road or fog line as a guide. Never follow taillights closely, as this reduces your reaction time."
  },
  {
    question: "What is a legal requirement in Washington State if a child is under 8 years old and shorter than 4'9\" (57 inches)?",
    optionA: "They must sit in the back seat only",
    optionB: "They must use a booster seat or child restraint system",
    optionC: "They may use an adult seat belt if they're at least 6 years old",
    optionD: "They must be supervised by an adult passenger",
    correctAnswer: "B",
    explanation: "Washington law requires that children under 8 years old and shorter than 4'9\" (57 inches) must use an appropriate child restraint system, which may include a car seat, booster seat, or other approved device. Children under 13 should ride in the back seat when practical. These laws are designed to ensure proper seat belt fit and maximum protection."
  },
  {
    question: "What is \"hydroplaning\" and how can it be prevented?",
    optionA: "When a vehicle slides on ice; prevented by using snow chains",
    optionB: "When a vehicle's tires lose contact with the road due to water; prevented by slowing down",
    optionC: "When brakes overheat; prevented by pumping the brakes",
    optionD: "When tires deflate suddenly; prevented by checking tire pressure",
    correctAnswer: "B",
    explanation: "Hydroplaning occurs when your tires ride on top of water instead of gripping the road surface. It can cause loss of steering and braking control. To prevent hydroplaning, maintain good tire tread, reduce speed during rainy conditions, avoid puddles if possible, and avoid sudden turns or braking. If you do hydroplane, gently ease off the accelerator and steer straight until control is regained."
  },
  {
    question: "What does a red circle with a slash through it on a traffic sign mean?",
    optionA: "Yield to oncoming traffic",
    optionB: "A prohibited action",
    optionC: "Stop ahead",
    optionD: "Railroad crossing",
    correctAnswer: "B",
    explanation: "A red circle with a slash through it means the action depicted inside the circle is prohibited. Common examples include \"No Left Turn,\" \"No U-Turn,\" \"No Parking,\" or \"No Bicycles.\" These regulatory signs indicate actions that are illegal and may result in a traffic citation if violated."
  },
  {
    question: "When driving on a multi-lane highway, slower traffic should:",
    optionA: "Stay in the far right lane",
    optionB: "Stay in the center lane",
    optionC: "Stay in the far left lane",
    optionD: "It doesn't matter which lane they use",
    correctAnswer: "A",
    explanation: "On multi-lane highways, slower traffic should stay in the far right lane. The left lanes are typically for passing and faster traffic. Washington's \"Keep Right Except to Pass\" law requires vehicles to stay in the right lane unless they are actively passing another vehicle or preparing for a left turn. This helps maintain traffic flow and prevent congestion."
  },
  {
    question: "What is the proper technique for turning your steering wheel when making a turn?",
    optionA: "Hand-over-hand technique",
    optionB: "Use one hand only for better control",
    optionC: "Cross your arms for sharper turns",
    optionD: "Let the wheel slide through your palms",
    correctAnswer: "A",
    explanation: "The hand-over-hand steering technique is the safest and most effective method for turning. Start with your hands at the 9 and 3 o'clock positions (or 8 and 4 for airbag-equipped vehicles). As you turn, one hand pulls down while the other crosses over to continue pulling. This technique provides the most control while keeping both hands on the wheel as much as possible."
  },
  {
    question: "What is the main purpose of a roundabout?",
    optionA: "To create more parking spaces",
    optionB: "To increase fuel efficiency",
    optionC: "To keep traffic flowing without stop signs or traffic signals",
    optionD: "To provide a scenic route for tourists",
    correctAnswer: "C",
    explanation: "Roundabouts are designed to keep traffic flowing continuously without stop signs or traffic signals. They reduce crashes and traffic delays by eliminating the need for vehicles to come to a complete stop when no conflicting traffic is present. When using a roundabout, you should yield to traffic already in the circle, use your turn signal when exiting, and always travel counterclockwise."
  },
  {
    question: "When parking your vehicle facing uphill with a curb, in which direction should you turn your front wheels?",
    optionA: "Straight ahead",
    optionB: "Toward the street (away from the curb)",
    optionC: "Away from the street (toward the curb)",
    optionD: "It doesn't matter",
    correctAnswer: "B",
    explanation: "When parking facing uphill with a curb, turn your front wheels away from the curb (toward the street) and let your vehicle roll back slightly until the rear of your front tire touches the curb. This positions your vehicle so that if the brakes fail, the front wheels will hit the curb, preventing the vehicle from rolling into traffic."
  },
  {
    question: "What does a flashing yellow traffic signal mean?",
    optionA: "Stop and proceed when safe",
    optionB: "Slow down and proceed with caution",
    optionC: "Prepare to stop, the light will soon be red",
    optionD: "The intersection is closed",
    correctAnswer: "B",
    explanation: "A flashing yellow traffic signal means slow down and proceed with caution. It indicates that the intersection is operating normally but requires extra attention. Unlike a flashing red signal, you don't need to come to a complete stop unless necessary for safety, but you should be prepared to stop if needed and be especially alert for cross traffic and pedestrians."
  },
  {
    question: "What is the purpose of having an \"escape route\" when driving?",
    optionA: "It's a path to avoid traffic congestion",
    optionB: "It's a planned path to take if your primary route is blocked by a crash",
    optionC: "It's a path of travel to use in case of an emergency",
    optionD: "It's a designated evacuation route during natural disasters",
    correctAnswer: "C",
    explanation: "An \"escape route\" is a mental plan for where you would steer your vehicle if a sudden emergency occurs, such as another driver swerving into your lane or a child running into the street. To maintain an escape route, you should continually scan the road ahead, maintain appropriate following distances, and be aware of the space around your vehicle. This defensive driving technique helps you avoid collisions by having alternatives ready if your intended path is suddenly blocked."
  },
  {
    question: "What is the meaning of a white sign with the letters \"RR\" and an \"X\" below it?",
    optionA: "Railroad crossing ahead",
    optionB: "Recreation area",
    optionC: "Road repair ahead",
    optionD: "Rest area ahead",
    correctAnswer: "A",
    explanation: "A white sign with the letters \"RR\" and an \"X\" below it is an advance warning sign for a railroad crossing. This sign alerts drivers that they are approaching a railroad track crossing the roadway ahead. When you see this sign, be prepared to stop if a train is approaching. Look and listen for trains in both directions before proceeding."
  },
  {
    question: "How much distance should you maintain behind the vehicle ahead when driving in good conditions?",
    optionA: "At least 1 car length",
    optionB: "At least 2 car lengths",
    optionC: "At least a 2-second following distance",
    optionD: "At least a 4-second following distance",
    correctAnswer: "C",
    explanation: "In good driving conditions, you should maintain at least a 2-second following distance from the vehicle ahead. To determine this, watch when the vehicle ahead passes a fixed point (like a sign), then count \"one-one-thousand, two-one-thousand.\" If you reach that same point before finishing, you're following too closely. In adverse conditions like rain, fog, or night driving, increase this to at least 3 or 4 seconds."
  },
  {
    question: "What action is required when you see a sign with the words \"DO NOT PASS\"?",
    optionA: "Pass only when the way ahead is clear",
    optionB: "Pass only on the right side",
    optionC: "Do not pass any other vehicle going in the same direction",
    optionD: "You can pass if you're in a hurry",
    correctAnswer: "C",
    explanation: "A \"DO NOT PASS\" sign indicates a no-passing zone where it is illegal to pass any vehicle going in the same direction. These signs are typically placed in areas where limited visibility, road design, or other hazards make passing dangerous. Passing in a no-passing zone is a serious traffic violation and can result in fines and points on your license."
  },
  {
    question: "What should you do if your vehicle starts to skid?",
    optionA: "Brake hard to stop the skid",
    optionB: "Accelerate to pull out of the skid",
    optionC: "Steer in the direction you want the front of the vehicle to go",
    optionD: "Pull the emergency brake",
    correctAnswer: "C",
    explanation: "If your vehicle starts to skid, stay calm and avoid slamming on the brakes, which can worsen the skid. Ease off the accelerator and steer in the direction you want the front of the vehicle to go (sometimes described as \"steering into the skid\"). This helps the tires regain traction. If you have anti-lock brakes and need to slow down, apply steady pressure rather than pumping the brakes."
  },
  {
    question: "What should you do when an emergency vehicle with flashing lights is approaching from any direction?",
    optionA: "Speed up to get out of the way",
    optionB: "Pull over to the right side of the road and stop",
    optionC: "Maintain your speed and position",
    optionD: "Move to the left lane only",
    correctAnswer: "B",
    explanation: "When an emergency vehicle with flashing lights approaches from any direction, you must pull over to the right side of the road and stop. This applies even if the emergency vehicle is on the opposite side of a divided highway. Remain stopped until the emergency vehicle has passed completely. This law ensures emergency vehicles can move through traffic quickly and safely."
  },
  {
    question: "What is the penalty for a first DUI offense in Washington State?",
    optionA: "24 hours in jail and $500 fine",
    optionB: "One day to 364 days in jail and $350-$5,000 fine",
    optionC: "At least 30 days in jail",
    optionD: "Warning and mandatory alcohol treatment",
    correctAnswer: "B",
    explanation: "A first DUI offense in Washington State can result in one day to 364 days in jail and fines ranging from $350 to $5,000, depending on your blood alcohol concentration (BAC). Additional penalties include license suspension (90 days to 2 years), mandatory ignition interlock device installation, alcohol assessment and treatment, and probation. The penalties become more severe with higher BAC levels or if there are aggravating circumstances."
  },
  {
    question: "What is the minimum liability insurance coverage required for drivers in Washington State?",
    optionA: "$10,000 for injury/death to one person, $20,000 for all persons, $5,000 for property damage",
    optionB: "$15,000 for injury/death to one person, $30,000 for all persons, $10,000 for property damage",
    optionC: "$25,000 for injury/death to one person, $50,000 for all persons, $10,000 for property damage",
    optionD: "$50,000 for injury/death to one person, $100,000 for all persons, $25,000 for property damage",
    correctAnswer: "C",
    explanation: "Washington State law requires all drivers to carry minimum liability insurance of $25,000 for bodily injury or death to one person, $50,000 for bodily injury or death to all persons involved in one accident, and $10,000 for property damage. Driving without insurance is illegal and can result in a fine, license suspension, and SR-22 requirements. Higher coverage limits are recommended for better protection."
  },
  {
    question: "What does a yield sign mean?",
    optionA: "Come to a complete stop",
    optionB: "Slow down and give the right-of-way to vehicles or pedestrians in or approaching the intersection",
    optionC: "Other drivers must yield to you",
    optionD: "Proceed without slowing down",
    correctAnswer: "B",
    explanation: "A yield sign means you must slow down and give the right-of-way to vehicles or pedestrians in or approaching the intersection. Unlike a stop sign, you don't need to come to a complete stop if the way is clear. However, you must be prepared to stop if necessary and must not proceed until you can do so safely without interfering with traffic that has the right-of-way."
  },
  {
    question: "When approaching a roundabout, what should you do?",
    optionA: "Always come to a complete stop before entering",
    optionB: "Yield to traffic already in the roundabout",
    optionC: "Enter at high speed to merge smoothly",
    optionD: "Use your left turn signal to enter",
    correctAnswer: "B",
    explanation: "When approaching a roundabout, slow down and yield to traffic already in the roundabout and to pedestrians in crosswalks. Enter when there's a safe gap in traffic. Use your right turn signal when exiting. Always travel counterclockwise in a roundabout. Roundabouts are designed to keep traffic flowing, so you don't need to stop if there's no conflicting traffic."
  },
  {
    question: "When is it legal to drive in a bike lane in Washington State?",
    optionA: "When making a right turn within 200 feet of an intersection",
    optionB: "When traffic is congested in regular lanes",
    optionC: "When passing a slow-moving vehicle",
    optionD: "Never, bike lanes are for bicycles only",
    correctAnswer: "A",
    explanation: "In Washington State, you may drive in a bike lane only when making a right turn within 200 feet of an intersection. Before moving into the bike lane, check for cyclists, yield to them, and signal your intention to turn. At all other times, bike lanes are exclusively for bicyclists. Driving in bike lanes at other times is illegal and dangerous for cyclists."
  },
  {
    question: "What is the proper technique for making a U-turn?",
    optionA: "Signal right, then turn from the right lane",
    optionB: "Signal left, then turn from the far left lane or center turn lane",
    optionC: "No signal required for U-turns",
    optionD: "Signal and turn from any lane when clear",
    correctAnswer: "B",
    explanation: "When making a U-turn, signal left and position your vehicle in the far left lane or center turn lane if available. Check for a \"No U-turn\" sign, as U-turns are prohibited in many locations. Make sure you have a clear view of approaching traffic and ensure there's enough space to complete the turn. U-turns are illegal at blind curves, on hills, near bridges, and in tunnels or underpasses where your vehicle cannot be seen by other drivers within 500 feet."
  },
  {
    question: "What does a white rectangular sign with black lettering indicate?",
    optionA: "Warning",
    optionB: "Regulatory rules that must be obeyed",
    optionC: "Information about services",
    optionD: "Construction zones",
    correctAnswer: "B",
    explanation: "White rectangular signs with black lettering are regulatory signs that indicate rules which must be obeyed. Examples include speed limits, lane usage instructions, turn restrictions, parking regulations, and other traffic laws. Violating these regulatory signs is illegal and may result in a traffic citation."
  },
  {
    question: "What is the correct action when coming to an intersection with no traffic control devices?",
    optionA: "The driver on the left has the right-of-way",
    optionB: "The driver on the right has the right-of-way",
    optionC: "The driver going straight has the right-of-way",
    optionD: "The first vehicle to arrive has the right-of-way",
    correctAnswer: "B",
    explanation: "At an intersection with no traffic control devices (stop signs, yield signs, or traffic signals), the vehicle on the right has the right-of-way. This is known as the \"yield to the right\" rule. However, if there are multiple vehicles at different approaches, each driver should yield to the vehicle on their right. When in doubt, yield to be safe—right-of-way is something given, not taken."
  },
  {
    question: "What does a work zone sign with orange background indicate?",
    optionA: "Road work or maintenance ahead",
    optionB: "School zone ahead",
    optionC: "Hazardous materials route",
    optionD: "Hospital zone",
    correctAnswer: "A",
    explanation: "Orange signs indicate road work or maintenance ahead. These temporary signs warn of construction, maintenance, or utility work activities. They may be accompanied by flaggers, cones, barrels, or other traffic control devices. Always slow down and be alert when entering a work zone. In Washington, traffic fines are doubled in work zones, and traffic violations in these areas can result in significant penalties."
  },
  {
    question: "When driving in heavy rain, what should you do if your vehicle begins to hydroplane?",
    optionA: "Brake firmly and steer straight ahead",
    optionB: "Accelerate to gain more control",
    optionC: "Ease off the accelerator and keep the steering wheel straight",
    optionD: "Turn the steering wheel quickly in the opposite direction",
    correctAnswer: "C",
    explanation: "If your vehicle begins to hydroplane in heavy rain, ease off the accelerator (don't brake) and keep the steering wheel straight until you regain control. Avoid sudden movements of the steering wheel or brakes, which can worsen the situation. Hydroplaning occurs when your tires lose contact with the road and ride on a film of water. To prevent hydroplaning, slow down in wet conditions, maintain proper tire tread and pressure, and avoid puddles when possible."
  },
  {
    question: "How long must a new Washington resident wait before obtaining a Washington driver's license?",
    optionA: "10 days",
    optionB: "30 days",
    optionC: "60 days",
    optionD: "90 days",
    correctAnswer: "B",
    explanation: "New Washington residents must obtain a Washington driver's license within 30 days of establishing residency. Establishing residency includes registering to vote, receiving state benefits, working in a non-military position, or living in Washington for 6 consecutive months. You'll need to surrender your out-of-state license, pass a vision screening, and possibly take knowledge and driving tests depending on the status of your current license."
  },
  {
    question: "What is the speed limit in alleys in Washington State unless otherwise posted?",
    optionA: "5 mph",
    optionB: "10 mph",
    optionC: "15 mph",
    optionD: "20 mph",
    correctAnswer: "C",
    explanation: "The speed limit in alleys in Washington State is 15 mph unless otherwise posted. Alleys often have limited visibility, tight spaces, and may have pedestrians, children, or pets present. Drive slowly and be prepared to stop quickly. When exiting an alley onto a sidewalk or street, you must stop before crossing the sidewalk and yield to pedestrians and cross traffic."
  },
  {
    question: "What does a sign showing a deer silhouette indicate?",
    optionA: "Deer hunting area",
    optionB: "Wildlife crossing area",
    optionC: "Zoo or wildlife park ahead",
    optionD: "Wildlife conservation area",
    correctAnswer: "B",
    explanation: "A sign showing a deer silhouette indicates a wildlife crossing area where animals frequently cross the road. Be especially alert in these areas, particularly during dawn, dusk, and nighttime when animals are most active. Reduce your speed and scan the road edges for animals. If you see an animal near or on the road, slow down or stop if necessary, but avoid swerving sharply which could cause you to lose control or hit another vehicle."
  },
  {
    question: "What should you do if you are involved in a collision in which someone is injured?",
    optionA: "Move the vehicles out of traffic first, then check for injuries",
    optionB: "Call the police and leave the scene to avoid creating more congestion",
    optionC: "Stop, check for injuries, call 911, and remain at the scene",
    optionD: "Exchange information and let insurance companies handle it",
    correctAnswer: "C",
    explanation: "If you're involved in a collision with injuries, stop immediately, check for injuries, and call 911. Provide first aid if you're trained, but don't move injured persons unless they're in immediate danger. Remain at the scene until emergency services arrive. Leaving the scene of an accident with injuries is a serious offense in Washington State (hit-and-run). You must also exchange information with other involved parties and file an accident report with the DOL within 4 days if damages exceed $1,000."
  },
  {
    question: "What is the meaning of a yellow arrow traffic signal?",
    optionA: "Yield to oncoming traffic, then proceed with caution",
    optionB: "Stop and wait for a green signal",
    optionC: "The protected turning phase is ending",
    optionD: "Pedestrians have the right-of-way",
    correctAnswer: "C",
    explanation: "A yellow arrow traffic signal indicates that the protected turning phase is ending. Like a standard yellow light, it warns that the signal is about to change to red. You should stop if you can do so safely. If you're already in the intersection waiting to turn, complete your turn with caution. The yellow arrow typically appears after a green arrow and before either a red light or flashing yellow arrow."
  },
  {
    question: "In Washington State, what is the speed limit on rural interstate highways unless otherwise posted?",
    optionA: "60 mph",
    optionB: "65 mph",
    optionC: "70 mph",
    optionD: "75 mph",
    correctAnswer: "C",
    explanation: "The default speed limit on rural interstate highways in Washington State is 70 mph unless signs indicate otherwise. Urban interstate highways typically have a 60 mph limit. Always obey posted speed limit signs as they take precedence over these default limits."
  },
  {
    question: "What should you do if your vehicle's accelerator (gas pedal) sticks?",
    optionA: "Continue driving until you reach your destination",
    optionB: "Put the car in neutral, apply steady pressure on the brake, and pull over safely",
    optionC: "Turn off the engine immediately while driving",
    optionD: "Pump the gas pedal rapidly to unstick it",
    correctAnswer: "B",
    explanation: "If your accelerator sticks, shift to neutral immediately, which disconnects the engine from the wheels. Apply steady pressure on the brake (don't pump), look for an escape path, and pull over to a safe location. Once stopped, turn off the engine. Do not turn off the engine while moving as this can disable power steering and power brakes."
  },
  {
    question: "In Washington State, how long is a driver's license valid for most drivers?",
    optionA: "2 years",
    optionB: "4 years",
    optionC: "6 years",
    optionD: "8 years",
    correctAnswer: "C",
    explanation: "In Washington State, a standard driver's license is valid for 6 years before renewal is required. The Department of Licensing will send a renewal notice before the expiration date. Drivers can renew up to a year before the expiration date without losing any time on their license."
  },
  {
    question: "When may you legally cross a double yellow line in Washington State?",
    optionA: "When passing a slow-moving vehicle",
    optionB: "When no other vehicles are present",
    optionC: "When turning left into a driveway or alley",
    optionD: "During daylight hours only",
    correctAnswer: "C",
    explanation: "In Washington State, you may legally cross a double yellow line only when turning left into a driveway, alley, private road, or business entrance. You may not cross a double yellow line to pass another vehicle or for any other purpose. Double yellow lines indicate no passing from either direction."
  },
  {
    question: "What should you do if you're involved in a collision with no injuries but with vehicle damage?",
    optionA: "Leave immediately and call your insurance company later",
    optionB: "Move vehicles out of traffic if possible, exchange information, and report if damage exceeds $1,000",
    optionC: "Wait for police regardless of the severity",
    optionD: "Exchange phone numbers only",
    correctAnswer: "B",
    explanation: "If you're involved in a collision with no injuries but with vehicle damage, you should move vehicles out of traffic if possible to prevent secondary crashes. Exchange information with the other driver(s) including name, address, phone number, license plate, driver's license, and insurance information. You must file a report with the Department of Licensing within 4 days if property damage exceeds $1,000."
  },
  {
    question: "What is the 'Zipper Merge' technique in Washington?",
    optionA: "A method for quickly changing lanes in heavy traffic",
    optionB: "Using both lanes until the merge point, then taking turns merging",
    optionC: "A technique for parallel parking",
    optionD: "An emergency maneuver to avoid a crash",
    correctAnswer: "B",
    explanation: "The Zipper Merge is a technique recommended by WSDOT where drivers use both lanes of traffic until reaching a defined merge point, then alternate (like a zipper) into the open lane. This is most effective in heavy traffic and construction zones as it reduces congestion, prevents dangerous lane switching, and can reduce backups by up to 40%."
  },
  {
    question: "When driving in Washington, what is the legal requirement regarding headlights?",
    optionA: "Use them only at night",
    optionB: "Use them from sunset to sunrise and when visibility is less than 1,000 feet",
    optionC: "Use them only during adverse weather conditions",
    optionD: "Use them only when other drivers have them on",
    correctAnswer: "B",
    explanation: "Washington law requires headlights to be used from sunset to sunrise and at any time when you cannot clearly see a person or vehicle from a distance of 1,000 feet due to insufficient light or unfavorable atmospheric conditions. This includes fog, rain, snow, or smoke. Using headlights in low visibility conditions helps others see your vehicle."
  },
  {
    question: "How long must a new resident of Washington wait before obtaining a Washington driver's license?",
    optionA: "30 days after establishing residency",
    optionB: "60 days after establishing residency",
    optionC: "90 days after establishing residency",
    optionD: "6 months after establishing residency",
    correctAnswer: "A",
    explanation: "New Washington residents must obtain a Washington State driver's license within 30 days of establishing residency. Establishing residency includes registering to vote, paying in-state tuition, getting a job, or renting/buying a home in the state. Out-of-state licenses must be surrendered when obtaining a Washington license."
  },
  {
    question: "What is Washington's 'Good Samaritan Law' regarding assistance at accident scenes?",
    optionA: "It requires all drivers to stop and render aid at accident scenes",
    optionB: "It protects people who provide reasonable emergency care from liability",
    optionC: "It applies only to medical professionals",
    optionD: "It requires drivers to carry first aid equipment",
    correctAnswer: "B",
    explanation: "Washington's Good Samaritan Law protects people who provide emergency care at accident scenes from liability, as long as they act in good faith and provide reasonable emergency care. This law encourages people to help at accident scenes without fear of being sued if something goes wrong, provided they don't act with gross negligence."
  },
  {
    question: "What is the appropriate action when approaching a roundabout in Washington?",
    optionA: "Enter at full speed to merge with traffic",
    optionB: "Always come to a complete stop before entering",
    optionC: "Slow down and yield to traffic already in the roundabout",
    optionD: "Sound your horn to alert other drivers",
    correctAnswer: "C",
    explanation: "When approaching a roundabout, slow down and look for traffic already in the roundabout. You must yield to vehicles already in the roundabout. Enter when there is a safe gap in traffic. Always travel counterclockwise around the center island. Signal right before exiting the roundabout and look for pedestrians when exiting."
  },
  {
    question: "What is the 'Slow Down, Move Over' law in Washington State?",
    optionA: "A law requiring drivers to move over for faster traffic",
    optionB: "A law requiring drivers to slow down in school zones",
    optionC: "A law requiring drivers to slow down and move over for emergency and work vehicles",
    optionD: "A law for trucks on steep downgrades",
    correctAnswer: "C",
    explanation: "Washington's 'Slow Down, Move Over' law requires drivers approaching stationary emergency vehicles, tow trucks, road maintenance vehicles, utility vehicles, or other authorized vehicles displaying flashing lights to either move over to another lane (if safe) or slow down significantly below the posted speed limit. Violating this law can result in a $214 fine and potential criminal charges if a collision occurs."
  },
  {
    question: "When passing a bicycle in Washington State, what is the minimum safe passing distance required by law?",
    optionA: "1 foot",
    optionB: "2 feet",
    optionC: "3 feet",
    optionD: "5 feet",
    correctAnswer: "C",
    explanation: "Washington law requires motorists to pass bicyclists with at least 3 feet of space. If road conditions allow, you should give even more space. This ensures the safety of cyclists who may need to maneuver around road hazards. If you cannot provide at least 3 feet of passing space, you should wait until it's safe to pass."
  },
  {
    question: "In Washington State, what is the law regarding child passengers who are under 2 years old?",
    optionA: "They must ride in the back seat in any approved restraint",
    optionB: "They must ride in a rear-facing car seat until age 2 or until they exceed height/weight limits",
    optionC: "They may ride in a forward-facing seat if they weigh more than 20 pounds",
    optionD: "They may use a booster seat",
    correctAnswer: "B",
    explanation: "Washington law requires children under age 2 to ride in a rear-facing car seat until they reach the height or weight limit of their car seat as set by the manufacturer. Rear-facing positions provide better protection for a young child's head, neck, and spine in the event of a crash. After reaching the limits, they can move to a forward-facing seat with a harness."
  },
  {
    question: "What should you do if you witness a traffic accident in Washington State?",
    optionA: "Drive around it to avoid being involved",
    optionB: "Stop only if someone waves for help",
    optionC: "Stop at a safe location, call 911, and provide aid if you can do so safely",
    optionD: "Take photos and post them online",
    correctAnswer: "C",
    explanation: "If you witness a traffic accident, stop at a safe location away from traffic. Call 911 immediately to report the accident location and apparent injuries. Provide reasonable assistance if you can do so safely. Washington's Good Samaritan Law protects those who provide reasonable emergency care from liability. Don't move injured people unless there's immediate danger, and remain at the scene until emergency services arrive."
  },
  {
    question: "What does Washington law require regarding mandatory vehicle insurance?",
    optionA: "Insurance is optional for experienced drivers",
    optionB: "Insurance is required only for vehicles less than 5 years old",
    optionC: "All drivers must carry proof of liability insurance or other financial responsibility",
    optionD: "Insurance is required only for drivers under age 25",
    correctAnswer: "C",
    explanation: "Washington law requires all drivers to carry proof of liability insurance or other approved financial responsibility while driving. The minimum liability coverage required is $25,000 for injury or death to one person, $50,000 for injury or death to all persons in one accident, and $10,000 for property damage. Driving without insurance can result in a fine, license suspension, and SR-22 requirements."
  },
  {
    question: "In Washington State, when can a driver use a handheld wireless communications device?",
    optionA: "When stopped at a traffic light",
    optionB: "When driving under 25 mph",
    optionC: "Only in emergencies or when reporting illegal activity",
    optionD: "Anytime, if using the speaker function",
    correctAnswer: "C",
    explanation: "In Washington State, drivers may only use a handheld wireless communications device (including cell phones) when reporting an emergency, alerting authorities to potential criminal activity, or during emergencies. All other handheld device use while driving is prohibited, even when temporarily stopped at a traffic light or in traffic. Hands-free use is permitted for drivers 18 and older."
  },
  {
    question: "What is the law regarding marijuana use and driving in Washington State?",
    optionA: "Legal as long as you have a medical prescription",
    optionB: "Legal as long as it has been at least 2 hours since consumption",
    optionC: "Illegal to drive with a THC blood concentration of 5.00 ng/ml or higher",
    optionD: "Legal if the marijuana is in a sealed container",
    correctAnswer: "C",
    explanation: "In Washington State, it is illegal to drive with a THC (the active ingredient in marijuana) blood concentration of 5.00 nanograms per milliliter or higher. This is considered a per se DUI offense, similar to the 0.08% BAC limit for alcohol. It's also illegal to use marijuana while driving or to have open containers of marijuana in the passenger area of a vehicle. The fact that marijuana is legal for adults 21+ in Washington does not make it legal to drive under its influence."
  },
  {
    question: "What is Washington's law regarding the use of studded tires?",
    optionA: "Allowed year-round in mountain areas",
    optionB: "Allowed from November 1 to March 31",
    optionC: "Prohibited throughout the state",
    optionD: "Allowed only during declared snow emergencies",
    correctAnswer: "B",
    explanation: "In Washington State, studded tires are only legal to use from November 1 to March 31. Using studded tires outside this period can result in a traffic infraction and fine. This restriction exists because studded tires cause significant damage to road surfaces when used on bare pavement. The Washington State Department of Transportation encourages drivers to consider approved alternative traction tires that are legal year-round."
  },
  {
    question: "What action should you take when approaching a transit bus with its yield sign flashing?",
    optionA: "Speed up to pass before the bus pulls out",
    optionB: "Slow down and be prepared to stop as the bus has the right-of-way",
    optionC: "Honk to let the bus driver know you're there",
    optionD: "Change lanes immediately without checking for traffic",
    correctAnswer: "B",
    explanation: "Washington law requires drivers to yield to a transit bus displaying a yield sign that is attempting to reenter traffic from a bus stop. You should slow down and prepare to stop if necessary, as the bus has the right-of-way. This law helps public transportation operate efficiently and safely. After the bus has merged safely, you may resume normal driving."
  },
  {
    question: "When driving in Washington, when are you required to turn on your vehicle's headlights?",
    optionA: "Only after sunset",
    optionB: "Only during rain or snow",
    optionC: "From 30 minutes after sunset to 30 minutes before sunrise and when visibility is limited",
    optionD: "Only when driving on rural roads",
    correctAnswer: "C",
    explanation: "Washington law requires headlights to be used from 30 minutes after sunset until 30 minutes before sunrise. Headlights are also required when conditions prevent you from clearly seeing a person or vehicle from 1,000 feet away, such as during fog, rain, snow, or smoke. Using headlights in these conditions makes your vehicle more visible to others and increases safety."
  },
  {
    question: "What does a octagonal-shaped sign indicate?",
    optionA: "School zone",
    optionB: "Yield",
    optionC: "Stop",
    optionD: "Railroad crossing",
    correctAnswer: "C",
    explanation: "An octagonal (eight-sided) sign always means STOP. When you see this sign, you must come to a complete stop at the marked stop line or before entering the crosswalk or intersection if there is no stop line. After stopping, yield to pedestrians and vehicles that have the right-of-way before proceeding. The octagonal shape and red color are standardized nationally so drivers can recognize stop signs immediately even in poor visibility."
  },
  {
    question: "In Washington State, what is the fine for a first offense of driving while using a handheld cell phone?",
    optionA: "$48",
    optionB: "$99",
    optionC: "$136",
    optionD: "$500",
    correctAnswer: "C",
    explanation: "In Washington State, the fine for a first offense of driving while using a handheld cell phone is $136 under the Driving Under the Influence of Electronics Act. Second and subsequent offenses within five years increase to $234. These violations are considered primary offenses, meaning an officer can pull you over solely for this violation, and they appear on your driving record."
  },
  {
    question: "What should you do if your vehicle has a tire blowout while driving?",
    optionA: "Brake hard immediately to stop quickly",
    optionB: "Pull over immediately wherever you are",
    optionC: "Grip the steering wheel firmly, gradually reduce speed, and pull off the road safely",
    optionD: "Turn sharply toward the side of the good tire",
    correctAnswer: "C",
    explanation: "If you experience a tire blowout, grip the steering wheel firmly with both hands to maintain control of your vehicle. Don't brake suddenly, as this can cause your vehicle to skid or spin. Instead, take your foot off the gas pedal and let the vehicle slow down gradually. Keep the vehicle moving straight ahead while it slows, then gently apply the brakes and pull off the road to a safe location. Once safely off the road, activate your hazard lights."
  },
  {
    question: "Which of the following is TRUE about driving in the left lane of a multi-lane highway in Washington?",
    optionA: "It's legal to drive continuously in the left lane if you're driving the speed limit",
    optionB: "The left lane is reserved only for emergency vehicles",
    optionC: "You must move right if another vehicle is overtaking you, regardless of your speed",
    optionD: "You can drive in the left lane only during daylight hours",
    correctAnswer: "C",
    explanation: "In Washington State, the left lane of a multi-lane highway is designated as a passing lane, not a travel lane. The 'Keep Right Except to Pass' law requires vehicles to stay in the right lane unless they are actively passing another vehicle, regardless of speed. If another vehicle approaches from behind, you must move right when safe to do so, even if you are driving at the speed limit. Continuous left lane driving impedes traffic flow and is subject to a $136 fine."
  },
  {
    question: "When two vehicles arrive at a four-way stop simultaneously from perpendicular directions, who has the right-of-way?",
    optionA: "The vehicle on the left",
    optionB: "The vehicle on the right",
    optionC: "The vehicle that is going straight",
    optionD: "The larger vehicle",
    correctAnswer: "B",
    explanation: "When two vehicles arrive at a four-way stop at the same time and are positioned at perpendicular directions, the vehicle on the right has the right-of-way. This is based on the general right-of-way rule that applies at uncontrolled or stop-controlled intersections. However, all drivers should make eye contact and use clear signals to confirm intentions."
  },
  {
    question: "In Washington State, how many points does a driver need to accumulate before their license can be suspended?",
    optionA: "3 points within a year",
    optionB: "6 points within a year",
    optionC: "12 points within a year",
    optionD: "Washington doesn't use a point system",
    correctAnswer: "D",
    explanation: "Washington State does not use a point system for traffic violations. Instead, the Department of Licensing tracks the number and type of violations. License suspension is based on the seriousness of violations and how many you receive within a certain time period. For example, committing certain serious violations even once, like DUI or reckless driving, can result in immediate suspension."
  },
  {
    question: "What are the consequences for refusing a breath test when suspected of DUI in Washington State?",
    optionA: "No consequences if you're a first-time offender",
    optionB: "A small fine only",
    optionC: "Automatic license suspension of at least 1 year",
    optionD: "5 days in jail",
    correctAnswer: "C",
    explanation: "Under Washington's Implied Consent Law, refusing a breath test when lawfully arrested for DUI results in automatic license suspension of at least 1 year for a first refusal, 2 years for a second refusal, and 3 years for subsequent refusals within seven years. This administrative suspension is separate from any criminal penalties if you're convicted of DUI. Additionally, your refusal can be used against you in court."
  },
  {
    question: "What is the proper technique for driving through standing water on the roadway?",
    optionA: "Drive through quickly to splash the water away",
    optionB: "Drive through slowly in a low gear, then test your brakes afterward",
    optionC: "Stop and wait for the water to drain away",
    optionD: "Zigzag through the water to maintain traction",
    correctAnswer: "B",
    explanation: "When driving through standing water that you cannot avoid, slow down and proceed in a lower gear (1st or 2nd if manual, low range if automatic). Keep your engine RPMs up and maintain a consistent, slow speed to create a bow wave in front of your vehicle. After passing through the water, lightly apply your brakes to dry them. Deep water can damage your engine or cause your vehicle to float, so avoid water that appears deeper than 6 inches."
  },
  {
    question: "What vehicle equipment is legally required to be operational at all times in Washington State?",
    optionA: "Air conditioning",
    optionB: "Cruise control",
    optionC: "Windshield wipers",
    optionD: "Heated seats",
    correctAnswer: "C",
    explanation: "Washington law requires that all factory-installed safety equipment on a vehicle must be present and in working order, including windshield wipers, which are essential for visibility during precipitation. Other required equipment includes headlights, tail lights, brake lights, turn signals, mirrors, horn, brakes, muffler, windshield, safety belts, and emissions control equipment where applicable."
  },
  {
    question: "What is the 'Basic Speed Law' in Washington State?",
    optionA: "Never exceed the posted speed limit",
    optionB: "Drive at the same speed as surrounding traffic",
    optionC: "Never drive slower than the posted minimum speed",
    optionD: "Drive at a speed appropriate for existing conditions, regardless of posted limits",
    correctAnswer: "D",
    explanation: "Washington's Basic Speed Law requires drivers to operate at a speed that is reasonable and prudent for the existing conditions, regardless of posted speed limits. This means you must adjust your speed for weather, visibility, traffic, road conditions, and other hazards. You can be cited for driving too fast for conditions even if you're within the posted speed limit."
  },
  {
    question: "What should you do if you're driving and your vehicle catches fire?",
    optionA: "Open all windows to release the smoke",
    optionB: "Pull over immediately, shut off the engine, and get everyone out of the vehicle",
    optionC: "Drive faster to extinguish the flames with airflow",
    optionD: "Pour water on the engine while it's running",
    correctAnswer: "B",
    explanation: "If your vehicle catches fire while driving, signal, pull over to a safe location away from traffic, turn off the engine to stop the flow of fuel, and get everyone out of the vehicle immediately. Move at least 100 feet away from the vehicle and call emergency services. If you have a fire extinguisher and the fire is small, you may attempt to extinguish it, but only if you can do so safely. Never return to a burning vehicle for possessions."
  },
  {
    question: "In Washington State, what is the penalty for being convicted of reckless driving?",
    optionA: "A $50 fine",
    optionB: "Up to 90 days in jail and/or a fine up to $1,000, plus license suspension",
    optionC: "Mandatory community service only",
    optionD: "A warning for first-time offenders",
    correctAnswer: "B",
    explanation: "In Washington State, reckless driving is a gross misdemeanor punishable by up to 90 days in jail and/or a fine up to $1,000. Additionally, your driver's license will be suspended for 30 days. Reckless driving is defined as driving with willful or wanton disregard for the safety of persons or property, and is a serious offense that results in a criminal record."
  },
  {
    question: "When is it permissible to drive in a bike lane in Washington State?",
    optionA: "When traffic is congested",
    optionB: "When making a right turn after yielding to cyclists",
    optionC: "When no cyclists are present",
    optionD: "Whenever it's convenient",
    correctAnswer: "B",
    explanation: "In Washington State, you may only drive in a bike lane when making a right turn, and only within 200 feet of the intersection after first yielding to any cyclists in the lane. At all other times, motor vehicles are prohibited from driving in designated bike lanes. These lanes are specifically designed to provide a safer space for cyclists separate from motor vehicle traffic."
  },
  {
    question: "Which of the following statements about motorcycles is TRUE?",
    optionA: "Motorcycles don't have the same rights as other vehicles on the road",
    optionB: "Motorcycles are entitled to use a full lane, just like other vehicles",
    optionC: "Motorcycles should always be passed in the same lane they're using",
    optionD: "Motorcycles don't need to signal turns if hand signals are used",
    correctAnswer: "B",
    explanation: "Motorcycles are entitled to the full use of a lane, just like other vehicles. Never try to share a lane with a motorcycle or pass one in the same lane they're using. Motorcycles often adjust position within a lane to better see traffic or avoid road hazards, so they need the full lane width. Treat motorcycles with the same respect and following distance as other vehicles."
  },
  {
    question: "What is the 'Idaho Stop' law regarding bicycles in Washington State?",
    optionA: "Bicyclists can treat stop signs as yield signs",
    optionB: "Bicyclists must come to a complete stop at all stop signs",
    optionC: "Bicyclists can ignore traffic signals entirely",
    optionD: "Bicyclists can ride on interstate highways",
    correctAnswer: "A",
    explanation: "As of 2020, Washington State has implemented the 'Safety Stop' law (similar to Idaho's law), which allows bicyclists to treat stop signs as yield signs. When approaching a stop sign, if it is safe to do so, bicyclists may yield the right-of-way if required and then proceed without coming to a complete stop. However, they must still stop at red traffic signals until they receive a green light or, in some jurisdictions, until they've verified it's safe to proceed."
  },
  {
    question: "When driving near a large commercial truck, which of the following is the safest practice?",
    optionA: "Drive in the truck's blind spots to stay out of the way",
    optionB: "Pass on the right side where visibility is better",
    optionC: "Stay far enough behind that you can see the truck's side mirrors",
    optionD: "Drive closely behind the truck to take advantage of reduced wind resistance",
    correctAnswer: "C",
    explanation: "When driving near a large truck, stay far enough behind that you can see the truck's side mirrors. This ensures the truck driver can see you. Trucks have large blind spots (\"No Zones\") on all four sides, especially on the right side and directly behind the truck. Never linger in these blind spots, pass on the left when possible, and maintain a greater following distance than you would with a passenger vehicle."
  },
  {
    question: "At what Blood Alcohol Concentration (BAC) level are drivers 21 and older considered legally impaired in Washington State?",
    optionA: "0.05%",
    optionB: "0.08%",
    optionC: "0.10%",
    optionD: "Any detectable amount",
    correctAnswer: "B",
    explanation: "In Washington State, drivers 21 and older are considered legally impaired with a Blood Alcohol Concentration (BAC) of 0.08% or higher. However, a driver can still be arrested and convicted of DUI with a lower BAC if their ability to drive is affected by alcohol or drugs. For commercial drivers, the limit is 0.04%, and for drivers under 21, it's 0.02%."
  },
  {
    question: "What should you do if you're involved in a vehicle collision with a deer or other large animal in Washington?",
    optionA: "Take the animal home if it's dead",
    optionB: "Report the incident to law enforcement and your insurance company",
    optionC: "Leave the scene after moving the animal to the side of the road",
    optionD: "Only report collisions that occur during hunting season",
    correctAnswer: "B",
    explanation: "If you hit a deer or other large animal in Washington, pull over to a safe location if possible and turn on your hazard lights. Check for injuries to people in your vehicle and call 911 if anyone is hurt. Report the collision to law enforcement, especially if the animal is blocking traffic or injured but still alive. Take photos for insurance purposes and contact your insurance company. Never approach an injured animal, as it may be dangerous when frightened or hurt."
  },
  {
    question: "What is the proper action when encountering a pedestrian using a white cane or guide dog?",
    optionA: "Honk to alert them of your presence",
    optionB: "Stop and wait until they cross, yielding the right-of-way",
    optionC: "Drive around them quickly",
    optionD: "Flash your lights to help them see better",
    correctAnswer: "B",
    explanation: "When encountering a pedestrian using a white cane or guide dog, you must come to a complete stop and yield the right-of-way. Washington law gives absolute right-of-way to visually impaired pedestrians using a white cane or guide dog. These pedestrians may not be able to see your vehicle, so wait patiently until they have completely crossed before proceeding. Do not honk, rev your engine, or make sudden movements that could startle or confuse them."
  },
  {
    question: "What is the 'Positive Control of Vehicle' law in Washington State?",
    optionA: "A requirement to only think positive thoughts while driving",
    optionB: "A requirement to keep positive air pressure in all tires",
    optionC: "A requirement that drivers must be able to control their vehicles at all times",
    optionD: "A requirement to maintain a positive attitude toward other drivers",
    correctAnswer: "C",
    explanation: "Washington's 'Positive Control of Vehicle' law requires that drivers must maintain control of their vehicles at all times. This means being able to perform normal driving functions like steering, braking, and acceleration without difficulty. Violations occur when drivers cannot control their vehicles due to factors like excessive speed for conditions, distraction, impairment, or operating a vehicle with known mechanical issues. Failure to maintain positive control that results in a collision can lead to additional charges or liability."
  },
  {
    question: "What does a sign with the letters \"HOV\" and a diamond symbol mean?",
    optionA: "High Occupancy Vehicle lane restricted to vehicles with multiple occupants",
    optionB: "Heavy Oversize Vehicle route for large trucks",
    optionC: "Highway Overpass Vicinity - watch for bridges",
    optionD: "High Outflow Volume - area prone to flooding",
    correctAnswer: "A",
    explanation: "A sign with 'HOV' and a diamond symbol indicates a High Occupancy Vehicle lane. These lanes are restricted to vehicles carrying a minimum number of occupants (typically 2 or 3, as specified on the sign). The purpose of HOV lanes is to reduce traffic congestion by encouraging carpooling. The diamond symbol is also painted on the pavement of HOV lanes. Violating HOV lane restrictions can result in a substantial fine."
  },
  {
    question: "What information are you legally required to provide to other involved parties after a collision in Washington?",
    optionA: "Only your name",
    optionB: "Your name and address only",
    optionC: "Your name, address, insurance information, and vehicle registration",
    optionD: "Your social security number",
    correctAnswer: "C",
    explanation: "After a collision in Washington, you are legally required to provide your name, address, vehicle registration information, and insurance information to the other involved drivers, passengers, or property owners. You must also show your driver's license if requested. Beyond these requirements, avoid discussing fault or details of the collision except with police, your attorney, or your insurance representative."
];

export default questions;


    
