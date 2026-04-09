# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactin.spec.js >> adactin hotel app
- Location: tests/adactin.spec.js:8:5

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
  - <launched> pid=6947
  - [pid=6947][err]
  - [pid=6947][err] (process:6953): Gtk-WARNING **: 09:31:52.854: Failed to open display
  - [pid=6947] <gracefully close start>
  - [pid=6947] <kill>
  - [pid=6947] <will force kill>
  - [pid=6947] <process did exit: exitCode=1, signal=null>
  - [pid=6947] starting temporary directories cleanup
  - [pid=6947] finished temporary directories cleanup
  - [pid=6947] <gracefully close end>

```