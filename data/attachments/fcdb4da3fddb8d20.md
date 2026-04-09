# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDrivenTest.spec.js >> Data Driven Test for undefined and J5TKD6
- Location: tests/dataDrivenTest.spec.js:12:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
<launched> pid=6803
[pid=6803][err] Cannot parse arguments: Unknown option --start-maximized
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
  - <launched> pid=6803
  - [pid=6803][err] Cannot parse arguments: Unknown option --start-maximized
  - [pid=6803] <gracefully close start>
  - [pid=6803] <kill>
  - [pid=6803] <will force kill>
  - [pid=6803] <process did exit: exitCode=1, signal=null>
  - [pid=6803] starting temporary directories cleanup
  - [pid=6803] finished temporary directories cleanup
  - [pid=6803] <gracefully close end>

```