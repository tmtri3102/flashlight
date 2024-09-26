class Battery {
	setEnergy() {
		this.energy = energy;
	}
	getEnergy() {
		return this.energy;
	}
	decreaseEnergy() {
		if (this.energy < 10) this.energy--;
	}
}

class FlashLamp {
	setBattery(battery) {
		this.battery = battery;
	}
	getBatteryInfo() {
		return this.battery.getEnergy();
	}
}

/*
Battery
==========
- enegy: number
==========
+ setEnergy(number): void
+ getEnergy(): number
+ decreaseEnergy(): void

FlashLamp
==========
- battery: Battery
- status: boolean
==========
+ setBattery(Battery): void
+ getBatteryInfo(): number
+ light(): void
+ turnOn(): void
+ turnOff(): void
*/
