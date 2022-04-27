export class Panel {
    #totalConsumption: number
    #cycleDays: number
    public state: number
    public power: number
    public isVisible: boolean
    constructor(
        power: number, 
        state: number, 
        totalConsumption: number, 
        cycleDays: number,
        isVisible: boolean
    ) { 
        this.power = power
        this.state = state, 
        this.#cycleDays = cycleDays
        this.#totalConsumption = totalConsumption
        this.isVisible = isVisible
    }

    get totalConsumption(): number {
        return this.#totalConsumption
    }

    get qty(): number {
        const qty = this.#consumptionInWatts / this.state / this.#cycleDays / this.power
        return  Math.trunc(qty);
    }

    get month(): string {
        if (this.#cycleDays === 61) return 'bimestrales'
        else if (this.#cycleDays === 30) return 'mensuales';
        return '';
    }

    get #consumptionInWatts(): number {
        return this.#totalConsumption * 1000;
    }
}
