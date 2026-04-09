# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDrivenTest.spec.js >> Data Driven Test for undefined and HYT56
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
  - <launching> /home/runner/.cache/ms-playwright/firefox-1511/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-eyWOOn -juggler-pipe --start-maximized -silent
  - <launched> pid=6494
  - [pid=6494][err] [6496] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=6494][err] Error: no DISPLAY environment variable specified
  - [pid=6494] <process did exit: exitCode=1, signal=null>
  - [pid=6494] starting temporary directories cleanup
  - [pid=6494] <gracefully close start>
  - [pid=6494] <kill>
  - [pid=6494] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=6494] finished temporary directories cleanup
  - [pid=6494] <gracefully close end>

```