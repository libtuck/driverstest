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
  }
];

export default questions;


    
