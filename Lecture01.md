## Four principales of OOPS
1. Abstraction: 
Your Explanation: Hides internal details from the user.
Analogy (✓): Car brake system — user presses a pedal without knowing the complex hydraulics behind it.
Refined Definition: Abstraction means exposing only essential features while hiding the implementation details. It helps reduce complexity.

In Code: Achieved using abstract classes or interfaces.

2. Polymorphism:
Your Explanation: Using the same thing for different purposes.
 Analogy (✓): Car key — used to unlock and start the vehicle.
Refined Definition: Polymorphism means “many forms.” A method can behave differently based on the object calling it.
In Code: Achieved via method overloading (compile-time) and method overriding (runtime).


3. Inheritance: 
Your Explanation: Reuse or extend features.
Analogy (✓): F1 car — all teams get base design from FIA but customize it.
Refined Definition: Inheritance allows a class (child) to inherit features (fields and methods) from another class (parent). Promotes code reusability.
In Code: class Ferrari extends Car


4. Encapsulation
Your Explanation: Encapsulate variables/methods and prevent exposure.
Analogy: (Missing)
Let’s fill that in:
Analogy (✔): Think of a pill capsule — it hides the bitter medicine inside. You only know the effect, not the content.
Another one: ATM machine — you press buttons (public interface), but you don’t see internal validations or database operations.
Refined Definition: Encapsulation means wrapping data (variables) and the code (methods) acting on the data into a single unit (class) and restricting direct access to it.
In Code: Achieved using private/protected modifiers and getters/setters.