(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{371:function(t,e,s){t.exports=s.p+"assets/img/asleep-awake.a233a2ef.svg"},372:function(t,e,s){t.exports=s.p+"assets/img/transitions-events.af54e0b5.svg"},373:function(t,e,s){t.exports=s.p+"assets/img/initial-state.bdbe27a5.svg"},374:function(t,e,s){t.exports=s.p+"assets/img/final-state.63512456.svg"},375:function(t,e,s){t.exports=s.p+"assets/img/compound-state.e9bfccbb.svg"},376:function(t,e,s){t.exports=s.p+"assets/img/parallel-states.f60d5dd7.svg"},377:function(t,e,s){t.exports=s.p+"assets/img/self-transition.c8ffac05.svg"},378:function(t,e,s){t.exports=s.p+"assets/img/basic-login.c40ae416.svg"},379:function(t,e,s){t.exports=s.p+"assets/img/login-compound-state.d6d9b069.svg"},380:function(t,e,s){t.exports=s.p+"assets/img/delayed-transition.352ce5a6.svg"},381:function(t,e,s){t.exports=s.p+"assets/img/entry-action.8f5dc1ec.svg"},539:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction-to-state-machines-and-statecharts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-state-machines-and-statecharts"}},[t._v("#")]),t._v(" Introduction to state machines and statecharts")]),t._v(" "),a("p",[t._v("Statecharts are a visual language used to describe the states in a process.")]),t._v(" "),a("p",[t._v("You may have used similar diagrams in the past to design user flows, plan databases or map app architecture. Statecharts are another way of using boxes and arrows to represent flows, but with XState these flows are also executable code that can be used to control the logic in your applications.")]),t._v(" "),a("p",[t._v("This guide covers the basics of statecharts in a beginner-friendly way, including:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#states"}},[t._v("states")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#transitions-and-events"}},[t._v("transitions and events")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#initial-state"}},[t._v("initial states")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#final-state"}},[t._v("final states")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#compound-states"}},[t._v("compound states")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#parallel-states"}},[t._v("parallel states")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#self-transition"}},[t._v("self-transitions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#planning-statecharts"}},[t._v("planning statecharts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#delayed-transitions"}},[t._v("delayed transitions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#actions"}},[t._v("actions")])])]),t._v(" "),a("h2",{attrs:{id:"states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[t._v("#")]),t._v(" States")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("states")]),t._v(" are represented by rounded rectangle boxes. To draw a statechart for the process of a dog, there are two states that would first come to mind:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(371),alt:""}})]),t._v(" "),a("p",[t._v("A dog is always "),a("strong",[t._v("asleep")]),t._v(" or "),a("strong",[t._v("awake")]),t._v(". The dog can’t be asleep and awake at the same time, and it’s impossible for the dog to be neither asleep nor awake. There’s only these two states, a precisely limited, "),a("em",[t._v("finite")]),t._v(" number of states.")]),t._v(" "),a("h2",{attrs:{id:"transitions-and-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions-and-events"}},[t._v("#")]),t._v(" Transitions and events")]),t._v(" "),a("p",[t._v("How the dog goes between "),a("strong",[t._v("asleep")]),t._v(" and "),a("strong",[t._v("awake")]),t._v(" is through "),a("em",[t._v("transitions")]),t._v(", which are symbolised by an arrow pointing from one state to the next state in the process’s sequence.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(372),alt:""}})]),t._v(" "),a("p",[t._v("A transition is caused by an "),a("em",[t._v("event")]),t._v(" that results in the change of state. Transitions are labelled with their events.")]),t._v(" "),a("p",[t._v("Transitions and events are "),a("em",[t._v("deterministic")]),t._v(". Deterministic means that each transition and event always points to the same next state, and always produces the same result from their given starting condition, every time the process is run. Dogs never "),a("strong",[t._v("wake up")]),t._v(" to become "),a("strong",[t._v("asleep")]),t._v(" or "),a("strong",[t._v("fall asleep")]),t._v(" to become "),a("strong",[t._v("awake")]),t._v(".")]),t._v(" "),a("p",[t._v("This tiny dog process, with its two finite states and two transitions is a "),a("em",[t._v("Finite State Machine.")]),t._v(" A state machine is used to describe the behavior of something. The machine describes the thing’s states and the transitions between those states. It’s a Finite State Machine because it has a finite number of states. (Sometimes abbreviated to FSM by folks who love jargon).")]),t._v(" "),a("h2",{attrs:{id:"initial-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-state"}},[t._v("#")]),t._v(" Initial state")]),t._v(" "),a("p",[t._v("Any process that has states will have an "),a("em",[t._v("initial state")]),t._v(", the default state the process exists in until an event happens to change the process’s state.")]),t._v(" "),a("p",[t._v("The initial state is represented by a filled circle with an arrow pointing from the circle to the initial state.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(373),alt:""}})]),t._v(" "),a("p",[t._v("Using a statechart to describe the process of walking the dog, the initial state would be "),a("strong",[t._v("waiting")]),t._v(" to walk.")]),t._v(" "),a("h2",{attrs:{id:"final-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-state"}},[t._v("#")]),t._v(" Final state")]),t._v(" "),a("p",[t._v("Most processes with states will have a "),a("em",[t._v("final state")]),t._v(", the last state when the process is finished. The final state is represented by a double border on the state’s rounded rectangle box.")]),t._v(" "),a("p",[t._v("In the dog walking statechart, the final state would be "),a("strong",[t._v("walk complete")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:s(374),alt:"Dog walking statechart showing waiting state transitioning through the leave home event to the on a walk state, then transitioning through the arrive home event to the final state of walk complete."}})]),t._v(" "),a("h2",{attrs:{id:"compound-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compound-states"}},[t._v("#")]),t._v(" Compound states")]),t._v(" "),a("p",[t._v("A compound state is a state that can contain more states, also known as child states. These child states can only happen when the parent compound state is happening. Inside the "),a("strong",[t._v("on a walk")]),t._v(" state, there could be the child states of "),a("strong",[t._v("walking")]),t._v(", "),a("strong",[t._v("running")]),t._v(" and "),a("strong",[t._v("stopping to sniff good smells")]),t._v(".")]),t._v(" "),a("p",[t._v("A compound state is symbolised by a labelled rounded rectangle box that acts as a container for its child states.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(375),alt:""}})]),t._v(" "),a("p",[t._v("A compound state should also specify which child state is the initial state. In the "),a("strong",[t._v("on a walk")]),t._v(" compound state, the initial state is "),a("strong",[t._v("walking")]),t._v(".")]),t._v(" "),a("p",[t._v("Compound states are what makes statecharts capable of handling more complexity than an everyday state machine.")]),t._v(" "),a("h3",{attrs:{id:"atomic-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atomic-states"}},[t._v("#")]),t._v(" Atomic states")]),t._v(" "),a("p",[t._v("An atomic state is a state that doesn’t have any child states. "),a("strong",[t._v("Waiting")]),t._v(", "),a("strong",[t._v("walk complete")]),t._v(", "),a("strong",[t._v("walking")]),t._v(", "),a("strong",[t._v("running")]),t._v(" and "),a("strong",[t._v("stopping to sniff good smells")]),t._v(" are all atomic states.")]),t._v(" "),a("h3",{attrs:{id:"parallel-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallel-states"}},[t._v("#")]),t._v(" Parallel states")]),t._v(" "),a("p",[t._v("A parallel state is a compound state where all of its child states, also known as regions, are active simultaneously. The regions are separated inside the compound state container by a dashed line.")]),t._v(" "),a("p",[t._v("Inside the "),a("strong",[t._v("on a walk")]),t._v(" compound state, there could be two regions. One region contains the dog’s activity child states of "),a("strong",[t._v("walking")]),t._v(", "),a("strong",[t._v("running")]),t._v(" and "),a("strong",[t._v("stopping to sniff good smells")]),t._v(", and the other region containing the dog’s tail states of "),a("strong",[t._v("wagging")]),t._v(" and "),a("strong",[t._v("not wagging")]),t._v(". The dog can walk and wag its tail, run and wag its tail or stop and sniff while wagging its tail, it can also do any of these activities without wagging its tail.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(376),alt:""}})]),t._v(" "),a("p",[t._v("Both regions should also specify which child state is the initial state. In our "),a("strong",[t._v("tail")]),t._v(" region, the initial state is "),a("strong",[t._v("not wagging")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"self-transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-transition"}},[t._v("#")]),t._v(" Self-transition")]),t._v(" "),a("p",[t._v("A self-transition is when an event happens, but the transition returns to the same state. The transition arrow exits and re-enters the same state.")]),t._v(" "),a("p",[t._v("A helpful way to describe a self-transition is “doing something, not going somewhere” in the process.")]),t._v(" "),a("p",[t._v("In a "),a("strong",[t._v("dog begging")]),t._v(" process, there would be a "),a("strong",[t._v("begging")]),t._v(" state with a "),a("strong",[t._v("gets treat")]),t._v(" event. And for the dogs who love their food, no matter how many times you go through the "),a("strong",[t._v("gets treat")]),t._v(" event, the dog returns to its "),a("strong",[t._v("begging")]),t._v(" state.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(377),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"planning-statecharts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-statecharts"}},[t._v("#")]),t._v(" Planning statecharts")]),t._v(" "),a("p",[t._v("One of the benefits of statecharts is that, in the process of putting a statechart together, you explore all the possible states in your process. This exploration will help you avoid bugs and errors in your code as you’re more likely to cover all the eventualities.")]),t._v(" "),a("p",[t._v("And because statecharts are executable, they can behave as both the diagram and the code, making it less likely that you’ll introduce differences or bugs interpreting between the diagramming and coding environments.")]),t._v(" "),a("h3",{attrs:{id:"planning-a-statechart-for-a-login-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-a-statechart-for-a-login-machine"}},[t._v("#")]),t._v(" Planning a statechart for a login machine")]),t._v(" "),a("p",[t._v("To draw a statechart for a login machine, start by listing the basic "),a("em",[t._v("events")]),t._v(" in the process. Think about what your login process will "),a("em",[t._v("do")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("log in")]),t._v(" "),a("li",[t._v("log out")])]),t._v(" "),a("p",[t._v("Then list the "),a("em",[t._v("states")]),t._v(" that exist as a result of those events:")]),t._v(" "),a("ul",[a("li",[t._v("logged in")]),t._v(" "),a("li",[t._v("logged out")])]),t._v(" "),a("p",[t._v("Once there’s some events and states, there’s the beginnings of a statechart.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(378),alt:"Login statechart showing an initial logged out state transitioning through a log in event to a logged in state, then transitioning through a log out event back to the logged out state."}})]),t._v(" "),a("p",[t._v("Don’t forget the "),a("em",[t._v("initial state")]),t._v(". In this case, the "),a("strong",[t._v("logged out")]),t._v(" state is the initial state, as any new user would come to the process logged out.")]),t._v(" "),a("h2",{attrs:{id:"delayed-transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delayed-transitions"}},[t._v("#")]),t._v(" Delayed transitions")]),t._v(" "),a("p",[t._v("Some login and logout processes will log out an inactive user after a fixed length of time as a security measure.")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("active")]),t._v(" and "),a("strong",[t._v("idle")]),t._v(" states only happen when the user is logged in, so these become child states inside the "),a("strong",[t._v("logged in")]),t._v(" compound state.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(379),alt:""}})]),t._v(" "),a("p",[t._v("The initial state inside the "),a("strong",[t._v("logged in")]),t._v(" compound state is "),a("strong",[t._v("active")]),t._v(", as it happens as a direct result of the "),a("strong",[t._v("log in")]),t._v(" event, and logging in is a sign of user activity.")]),t._v(" "),a("p",[t._v("A "),a("em",[t._v("delayed transition")]),t._v(" is a type of transition which happens after being in a state for a specified length of time. The delayed transition is labelled with “after” and a fixed duration to indicate how much time should pass before transitioning to the next indicated state.")]),t._v(" "),a("p",[t._v("In the login statechart, a delayed transition of "),a("strong",[t._v("60000")]),t._v(" milliseconds, or 1 minute, follows the "),a("strong",[t._v("active")]),t._v(" state to determine whether the user is "),a("strong",[t._v("idle")]),t._v(". If there is an "),a("strong",[t._v("activity")]),t._v(" event before the transition reaches one minute, the process returns to the "),a("strong",[t._v("active")]),t._v(" state.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(380),alt:""}})]),t._v(" "),a("p",[t._v("A delayed transition of "),a("strong",[t._v("180000")]),t._v(" milliseconds, or 3 minutes, follows the "),a("strong",[t._v("idle")]),t._v(" state to transition to the "),a("strong",[t._v("auto logged out")]),t._v(" state if the user remains idle.")]),t._v(" "),a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),a("p",[t._v("A statechart is used to set off "),a("em",[t._v("actions")]),t._v(" in the system outside of the statechart. Actions are also commonly known as "),a("em",[t._v("effects")]),t._v(" or "),a("em",[t._v("side-effects")]),t._v(". “Side effects” sounds like a negative or unimportant term, but setting off actions is the primary purpose in using statecharts.")]),t._v(" "),a("p",[t._v("Actions are events that have no impact or consequences for the rest of the sequence, the event is just triggered and the sequence moves on to the next step in the process. For example, the login statechart might execute actions that change the user interface.")]),t._v(" "),a("p",[t._v("An "),a("em",[t._v("action")]),t._v(" can be fired upon entering or exiting a state, or on a transition. An action on a state is included inside the state’s container with an “entry /” or “exit /” label depending on whether the action should be fired on entry or exit from the state.")]),t._v(" "),a("p",[t._v("In the login statechart, there’s an "),a("em",[t._v("entry")]),t._v(" action on the "),a("strong",[t._v("idle")]),t._v(" state to warn the user that they may be logged out.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(381),alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);