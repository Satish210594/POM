# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> has title
- Location: tests/example.spec.js:4:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --no-startup-window --start-maximized
  - <launched> pid=7323
  - [pid=7323][err]
  - [pid=7323][err] (process:7329): Gtk-WARNING **: 09:30:31.503: Failed to open display
  - [pid=7323] <gracefully close start>
  - [pid=7323] <kill>
  - [pid=7323] <will force kill>
  - [pid=7323] <process did exit: exitCode=1, signal=null>
  - [pid=7323] starting temporary directories cleanup
  - [pid=7323] finished temporary directories cleanup
  - [pid=7323] <gracefully close end>

```