---
sidebar_position: 2
---

# Basic Theory of Reinforcement Learning

## The Reinforcement Problem

* Involves learning **what to do** - to map situations to actions - to maximize a numerical reward signal.
### Characteristics and Challenges
  * **Closed-loop problems:** Learning system's action influence later inputs
  * Not having direct instructions as to what actions to take
    * Difference with traditional learning:
      * Learner not told which actions to take
      * Discover which actions yield the most reward by trying them out
  * Actions may affect not only immediate reward, but also next situation (and all subsequent rewards)
### Specifications of RL Problem
  * **Sensation**: Agent must be able to sense the state of the environment to some extent
  * **Action**: Able to take actions that affect the state
  * **Goal**: Have a goal or goals relating to the state of the environment
### Challenges
  * Trade-off between Exploration and Exploitation:
    * *Exploit* what it already knows to obtain reward
    * *Explore* to make better action selections in the future
### Interesting Aspects
* Considers the whole problem of a goal-directed agent interacting with an uncertain environment
  * Supervised approaches - Focuses on isolated subproblems instead
  * RL: Have explicit goals, can choose actions to influence their environments
* [Historic] RL is part of a larger trend back toward simple general principles
  * Since 1960s, researchers presumed no general principles exist, intelligence depends only on possession of heuristics and special purpose tricks
  * *Hypothesis*: Intelligence is based on number of relevant facts
  * General principles (searching/learning) were considerd weak methods.
* Types:
  * Game with adversary (eg Tic Tac Toe)
  * Game against nature (no external adversary)

## Elements of Reinforcement Learning

* **Observations / States of Environments** $s_t\in S$
* **Actions** $a_t\in A$
* **Policy** $\pi\in\Pi$: A mapping from perceived states of environment $s\in S$ to actions to be taken when in those states $a\in A$.
  * *Similar*: Psychology: Stimulus-response rules / associations
  * Possible:
    * Simple function / lookup table, or
    * Extensive computation, eg a search process
  * Policies can be stochastic
* **Reward Signal** $r_t$: Environment sends to the reinforcement learning agent a single number (the reward) for the agent to maximize in the long run.
* Overall flow:
  * Environment states -> Agent -> Actions -> Reward
*  **Value Function**: Specifies what is good in the long run
   *  Reward: Immediate desirability of environmental states
   *  Value: long-term desirability of states, taking into account the future states that are likely to follow, and rewards available in those states
   *  *Analogy*: 
      *  Reward: Pleasure/Pain
      *  Value: More refined and farsighted judgement of how pleased or displeased is this environment state
   *  Hard to determine (must be estimated from the sequences of observations that an agent makes over its entire lifetime)
* **Model**: Mimics the behavior of the environment, predicts the next state and reward given a state an action
  * Used for planning
  * Model-based (planning) vs model-free methods (trial-and-error learners)

## Updating the Value Function

Given $s$ the state before the greedy move, and $s'$ the state after the move, the update to the estimated value of $s$ is:
$$
\begin{align*}
V(s)\leftarrow V(s)+\alpha[V(s')-V(s)]
\end{align*}
$$

where the small $\alpha>0$ is the step-size parameter that influence the rate of learning.

[[N - Gerry Tesauro - Backgammon]]

## History

* **Optimal Control** (1950s): Problem of designing a controller to minimize a measure of dynamical system's behavior over time
  * Approaches:
    * [[Per - Richard Bellman]] 
    * [[Per - Hamilton and Jacobi]]
    * Dynamical system's state, 
    * Value function / "Optimal Return Function"
    * [[N - Bellman Equation]] (1957)
    * [[Markov Decision Processes]] (1957)
    * Policy Iteration, Ronald Howard, 1960
    * Dynamic Programming (late 1950s)
      * Problem: Curse of dimensionality (computational requirements grow exponentialy w the number of state variables)
    * Extensions to partially observable MDPs (Lovejoy 1991), Approximation methods (Survey: Rust 1996), Asynchronous methods (Bertsekas, 1982, 1983)
    * History over optimal control (Bryson 1996)