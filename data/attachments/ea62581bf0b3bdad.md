# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Pages/fixadactin.spec.js >> adactin fixture
- Location: tests/Pages/fixadactin.spec.js:8:7

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
  - <launched> pid=7505
  - [pid=7505][err]
  - [pid=7505][err] (process:7511): Gtk-WARNING **: 09:32:12.564: Failed to open display
  - [pid=7505] <gracefully close start>
  - [pid=7505] <kill>
  - [pid=7505] <will force kill>
  - [pid=7505] <process did exit: exitCode=1, signal=null>
  - [pid=7505] starting temporary directories cleanup
  - [pid=7505] finished temporary directories cleanup
  - [pid=7505] <gracefully close end>

```