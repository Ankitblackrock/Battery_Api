const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDischargingTime = document.querySelector(
  ".batteryDischargingTime"
);

// Battery API

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      console.log(battery);

      function updateBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeChangeinfo();
      }
      updateBatteryDetails();
      //Battery Charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }

      //Battery Charging Time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeChangeinfo();
      });
      function updateChargingTimeChangeinfo() {
        console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      //Battery Discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        const dischargetime = battery.dischargingTime;
        batteryDischargingTime.innerHTML = dischargetime + " seconds";
      }
      //Battery Level Change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      //Battery status
    });
  }
};

battery();
