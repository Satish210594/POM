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
  - <launched> pid=7343
  - [pid=7343][err]
  - [pid=7343][err] (process:7349): Gtk-WARNING **: 09:32:07.442: Failed to open display
  - [pid=7343] <gracefully close start>
  - [pid=7343] <kill>
  - [pid=7343] <will force kill>
  - [pid=7343] <process did exit: exitCode=1, signal=null>
  - [pid=7343] starting temporary directories cleanup
  - [pid=7343] finished temporary directories cleanup
  - [pid=7343] <gracefully close end>

```