# Light Bulb Problem

Let's say theres a power source that's connected to a stream of light bulbs such that
```
Power ->bulb 1 -> bulb 2 -> bulb 3 -> bulb 4 -> ...
```
A light bulb switch may flip in any given order, however that light bulb may only turn on when it's connected to a bulb that is already turned on (or the power source).

Given the fact that light bulbs may flip in any given order, count how many moments there are in a given flip order.

A moment is when a single or multiple light bulbs turn on after a flip of the switch.

Example:
```
FlippedOrder [2,1,3,5,4] -> 3

Bulbs [0!,1,2,3,4,5] ///where 0 is the power source and '!' denotes being turned on.
```
1. We flip the 2nd bulb first, it hasn't turned on yet. [0!,1,2,3,4,5]
2. We flip the 1st bulb, it turns on because it's connected to the power source and the second bulb now turns on because it's flipped and connected to a bulb with power.Total Moments =1. [0!,1!,2!,3,4,5]
3. We flip the 3rd bulb and it automatically turns on because the 2nd bulb is on. Total Moments = 2. [0!,1!,2!,3!,4,5]
4. We flip the 5th bulb but it doesn't turn on because the 4th isn't powered. [0!,1!,2!,3!,4,5]
5. We flip the 4th bulb and it turns on along with the 5th, simultaneously. Total Moments = 3. [0!,1!,2!,3!,4!,5!]

### Input: FlippedOrder Array
### Output: Number of Moments (Int)