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
  - <launched> pid=6970
  - [pid=6970][err]
  - [pid=6970][err] (process:6976): Gtk-WARNING **: 09:31:53.570: Failed to open display
  - [pid=6970] <gracefully close start>
  - [pid=6970] <kill>
  - [pid=6970] <will force kill>
  - [pid=6970] <process did exit: exitCode=1, signal=null>
  - [pid=6970] starting temporary directories cleanup
  - [pid=6970] finished temporary directories cleanup
  - [pid=6970] <gracefully close end>

```