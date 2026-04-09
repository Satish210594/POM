# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDrivenTest.spec.js >> Data Driven Test for undefined and J5TKD6
- Location: tests/dataDrivenTest.spec.js:12:5

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1511/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-fT5JOC -juggler-pipe --start-maximized -silent
  - <launched> pid=6324
  - [pid=6324][err] [6326] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=6324][err] Error: no DISPLAY environment variable specified
  - [pid=6324] <process did exit: exitCode=1, signal=null>
  - [pid=6324] starting temporary directories cleanup
  - [pid=6324] <gracefully close start>
  - [pid=6324] <kill>
  - [pid=6324] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6324] finished temporary directories cleanup
  - [pid=6324] <gracefully close end>

```