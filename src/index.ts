import "@jxa/global-type"
import { run } from "@jxa/run"
import { exit } from "process"

const systemPreferences = async () => {
  await run(() => {
    const preferences = Application("com.apple.systemPreferences")
    const system = Application("com.apple.systemEvents")
    preferences.activate()
    preferences.panes.byId("com.apple.preference.displays").reveal()
    delay(1)
    const process = system.processes.byName("System Preferences")
    delay(1)
    process.windows[0].buttons.byName("Night Shift…").click()
    delay(1)
    const dialog = process.windows[0].sheets[0]
    dialog.checkboxes[0].click()
    delay(0.5)
    dialog.checkboxes[0].click()
    dialog.buttons[1].click()
    delay(0.5)
    preferences.quit()
  }).catch(() => {
    exit(1)
  })
}

systemPreferences()
